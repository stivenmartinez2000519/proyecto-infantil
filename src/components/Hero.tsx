import React from 'react';
import { Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative bg-primary text-white py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Aprendizaje Divertido para Pequeños Genios
            </h1>
            <p className="text-xl text-white/90">
              Descubre una nueva forma de aprender jugando con nuestra plataforma educativa diseñada especialmente para niños.
            </p>
            <div className="flex gap-4">
              <button className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-colors">
                <Rocket className="w-5 h-5" />
                Empezar Ahora
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-semibold transition-colors">
                Saber Más
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-full bg-accent/20 absolute -top-12 -right-12 w-64 h-64 animate-pulse"></div>
            <div className="aspect-square rounded-full bg-accent/30 absolute -bottom-8 -left-8 w-48 h-48"></div>
            <div className="relative bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <img 
                src="https://images.pexels.com/photos/8535230/pexels-photo-8535230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Niños aprendiendo con tecnología" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-gray-50"></div>
    </section>
  );
};

export default Hero;