import React, { useState } from 'react';
import { ShoppingCart, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface BookCardProps {
  id: string;
  image: string;
  level: string;
  title: string;
  description: string;
  features: string[];
  price: number;
  animationDelay: number;
}

const BookCard: React.FC<BookCardProps> = ({
  id,
  image,
  level,
  title,
  description,
  features,
  price,
  animationDelay
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, title, image, price });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 ease-in-out"
      style={{ 
        transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
        animationDelay: `${animationDelay}ms`,
        animation: 'fadeInUp 0.6s ease-out backwards'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden group aspect-[4/3]">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute top-3 left-3">
          <span className="bg-accent text-white text-xs px-3 py-1 rounded-full font-medium">
            {level}
          </span>
        </div>
      </div>

      <div className="p-5 relative">
        <h3 className="text-lg font-semibold text-primary mb-2 transition-colors group-hover:text-accent">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {description}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-accent font-bold text-xl">
            ${price.toFixed(2)}
          </span>
          <button 
            onClick={handleAddToCart}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              isAdded 
                ? 'bg-green-500 text-white' 
                : 'bg-primary text-white hover:bg-primary-dark'
            }`}
          >
            {isAdded ? (
              <>
                <Check size={16} />
                Añadido
              </>
            ) : (
              <>
                <ShoppingCart size={16} />
                Comprar
              </>
            )}
          </button>
        </div>

        <div 
          className={`absolute left-0 right-0 px-5 pt-4 pb-5 bg-white shadow-lg rounded-b-lg transition-all duration-500 ease-in-out ${
            isHovered 
              ? 'bottom-0 opacity-100 translate-y-full' 
              : 'bottom-0 opacity-0 translate-y-0'
          }`}
        >
          <h4 className="font-medium text-primary mb-2">Características:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mt-1.5 mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookCard;