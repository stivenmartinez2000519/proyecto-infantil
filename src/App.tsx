import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Shop from './components/Shop';
import Testimonials from './components/Testimonials';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Hero />
        <Features />
        <Shop />
        <Testimonials />
        <footer className="bg-primary text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">KidsSchool</h3>
                <p className="text-white/80">
                  Educación de calidad para los más pequeños, desarrollando su potencial a través del juego y la tecnología.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Enlaces</h3>
                <ul className="space-y-2">
                  <li><a href="#inicio" className="text-white/80 hover:text-accent transition-colors">Inicio</a></li>
                  <li><a href="#caracteristicas" className="text-white/80 hover:text-accent transition-colors">Características</a></li>
                  <li><a href="#comprar" className="text-white/80 hover:text-accent transition-colors">Comprar</a></li>
                  <li><a href="#testimonios" className="text-white/80 hover:text-accent transition-colors">Testimonios</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contacto</h3>
                <ul className="space-y-2 text-white/80">
                  <li>info@kidsschool.com</li>
                  <li>+1 234 567 890</li>
                  <li>Calle Principal 123, Ciudad</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60 text-sm">
              &copy; {new Date().getFullYear()} KidsSchool. Todos los derechos reservados.
            </div>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
}

export default App;