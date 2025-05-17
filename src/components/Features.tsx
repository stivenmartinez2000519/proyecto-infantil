import React from 'react';
import { 
  Gamepad2, Trophy, Users, Rocket, 
  GraduationCap, Smartphone 
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Gamepad2 className="w-10 h-10" />,
      title: 'HABILIDADES',
      description: 'A través del juego, la creatividad y el acompañamiento de profesionales dedicados, fomentamos valores, habilidades sociales y el gusto por el aprendizaje desde los primeros años de vida.'
    },
    {
      icon: <Trophy className="w-10 h-10" />,
      title: 'APRENDIZAJE',
      description: 'Le ayudaremos a reconocer colores, formas, letras y números, desarrollar diferentes lenguajes, la memoria y el pensamiento lógico.'
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Comunidad amigable',
      description: 'Fomentamos habilidades sociales como compartir, respetar y trabajar en equipo, así como la expresión de emociones y la autoestima.'
    },
    {
      icon: <Rocket className="w-10 h-10" />,
      title: 'Proyectos creativos',
      description: 'Los proyectos educativos permiten a los niños aprender de forma divertida y activa, desarrollando su creatividad y conocimientos básicos.'
    },
    {
      icon: <GraduationCap className="w-10 h-10" />,
      title: 'Tutores expertos',
      description: 'Nuestros tutores están especializados en educación infantil y programación para hacer el aprendizaje fácil y divertido.'
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: 'Acceso multiplataforma',
      description: 'Disponible en todas las redes sociales: Instagram, TikTok, Facebook y WhatsApp.'
    }
  ];

  return (
    <section id="caracteristicas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          ¿Por qué <span className="text-accent">KidsSchool</span>?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out backwards'
              }}
            >
              <div className="text-accent mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;