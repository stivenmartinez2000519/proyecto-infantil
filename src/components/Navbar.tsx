import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import CartIcon from './CartIcon';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">
            <span className={isScrolled ? 'text-primary' : 'text-white'}>Kids</span>
            <span className="text-accent">School</span>
          </a>
          
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <a 
                href="#inicio" 
                className={`${isScrolled ? 'text-primary' : 'text-white'} hover:text-accent transition-colors`}
              >
                Inicio
              </a>
              <a 
                href="#caracteristicas" 
                className={`${isScrolled ? 'text-primary' : 'text-white'} hover:text-accent transition-colors`}
              >
                Características
              </a>
              <a 
                href="#comprar" 
                className={`${isScrolled ? 'text-primary' : 'text-white'} hover:text-accent transition-colors`}
              >
                Comprar
              </a>
              <a 
                href="#testimonios" 
                className={`${isScrolled ? 'text-primary' : 'text-white'} hover:text-accent transition-colors`}
              >
                Testimonios
              </a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <CartIcon />
              <a 
                href="#" 
                className={`px-5 py-2 rounded-full ${
                  isScrolled 
                    ? 'bg-primary text-white hover:bg-primary-dark' 
                    : 'bg-white text-primary hover:bg-gray-100'
                } transition-colors font-medium`}
              >
                Iniciar Sesión
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 lg:hidden">
            <CartIcon />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-full ${isScrolled ? 'text-primary' : 'text-white'}`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 bg-primary z-40 transform transition-transform duration-300 lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-8">
            <a href="#" className="text-2xl font-bold">
              <span className="text-white">Kids</span>
              <span className="text-accent">School</span>
            </a>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-white rounded-full"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          
          <nav className="flex flex-col space-y-6 text-white text-lg">
            <a 
              href="#inicio" 
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-accent transition-colors"
            >
              Inicio
            </a>
            <a 
              href="#caracteristicas" 
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-accent transition-colors"
            >
              Características
            </a>
            <a 
              href="#comprar" 
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-accent transition-colors"
            >
              Comprar
            </a>
            <a 
              href="#testimonios" 
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-accent transition-colors"
            >
              Testimonios
            </a>
          </nav>
          
          <div className="mt-auto">
            <a 
              href="#" 
              className="block w-full py-3 text-center bg-white text-primary rounded-full hover:bg-gray-100 transition-colors font-medium"
            >
              Iniciar Sesión
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;