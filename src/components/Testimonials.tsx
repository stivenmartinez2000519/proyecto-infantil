import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "María González",
    role: "Madre de familia",
    content: "KidsSchool ha transformado la manera en que mi hijo aprende. Los juegos educativos son fantásticos y realmente mantienen su interés.",
    rating: 5
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "Padre de familia",
    content: "Increíble plataforma educativa. Mis hijos han mejorado significativamente en matemáticas y lectura mientras se divierten.",
    rating: 5
  },
  {
    id: 3,
    name: "Ana Martínez",
    role: "Educadora",
    content: "Como profesora, recomiendo KidsSchool. El contenido está perfectamente adaptado a diferentes niveles de aprendizaje.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonios" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Lo que dicen nuestras familias
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg p-8 transition-transform hover:scale-105"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star
                    key={index}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;