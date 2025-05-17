import React, { useState, useRef, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartIcon: React.FC = () => {
  const { items, itemCount, totalPrice, removeFromCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={cartRef}>
      <button 
        className="flex items-center justify-center p-2 rounded-full bg-white text-primary hover:bg-gray-100 transition-colors relative"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Shopping cart"
      >
        <ShoppingCart size={24} />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-accent text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {itemCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-xl z-50 overflow-hidden transition-all duration-300 ease-in-out origin-top-right animate-scale-in">
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-semibold text-primary">Tu Carrito</h3>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {items.length === 0 ? (
              <div className="p-4 text-center text-gray-500">
                Tu carrito está vacío
              </div>
            ) : (
              <ul className="divide-y divide-gray-100">
                {items.map(item => (
                  <li key={item.id} className="p-4 flex items-start gap-3">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-14 h-14 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm text-primary truncate">{item.title}</h4>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-accent font-semibold">${item.price.toFixed(2)}</span>
                        <span className="text-xs text-gray-500">Cantidad: {item.quantity}</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                      aria-label="Remove item"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="p-4 border-t border-gray-100 bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium">Total:</span>
              <span className="font-bold text-accent">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
              Finalizar Compra
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartIcon;