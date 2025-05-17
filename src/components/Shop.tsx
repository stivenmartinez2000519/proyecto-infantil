import React from 'react';
import BookCard from './BookCard';

const Shop: React.FC = () => {
  const books = [
    {
      id: "book1",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI14IYOgvlMzYFL3jhJVSOSwxSK_inXUxdEQ&s",
      level: "DISPONIBLE",
      title: "LA ADAS Y SUS TRAVESURAS",
      description: "Libro de juegos para niños realizado con fieltro que incluye actividades sensoriales y de aprendizaje. Ideal para desarrollar habilidades y estimular su imaginación.",
      features: [
        "10 páginas interactivas",
        "Personalizable con nombre del niño",
        "Diferentes texturas y colores",
        "Actividades de desarrollo motor fino"
      ],
      price: 150
    },
    {
      id: "book2",
      image: "data:image/jpeg;base64,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",
      level: "BESTSELLER",
      title: "LA HISTORIA DEL ELEFANTE ",
      description: "Libro de actividades que enseñará a tu pequeño a socializar con otras personas a través de diferentes ejercicios divertidos y educativos.",
      features: [
        "12 actividades grupales",
        "Juegos de cooperación",
        "Ejercicios de comunicación",
        "Ideal para niños de 6-9 años"
      ],
      price: 150
    },
    {
      id: "book3",
      image: "https://librossensoriales.net/wp-content/uploads/2020/08/81-g2C3U-RL._AC_SL1500_-1024x666.jpg?x49837",
      level: "NUEVO",
      title: "AVENTURAS PARA NIÑOS",
      description: "Guía completa para que los niños aprendan a utilizar la tecnología de manera segura y provechosa, acorde a la actualidad digital.",
      features: [
        "Introducción a conceptos informáticos",
        "Juegos educativos digitales",
        "Seguridad en internet",
        "Recomendado para 10-14 años"
      ],
      price: 150
    },
    {
      id: "book4",
      image: "https://lasfloresshop.com/wp-content/uploads/2018/07/Donde-comprar-un-Libro-sensorial-de-fieltro-600x452.jpg",
      level: "AVANZADO",
      title: "MULTI CUENTOS",
      description: "Manual ilustrado para aprender a programar robots educativos y crear inventos tecnológicos con explicaciones paso a paso.",
      features: [
        "8 proyectos prácticos",
        "Conceptos básicos de programación",
        "Instrucciones detalladas con imágenes",
        "Para niños de 14-16 años"
      ],
      price: 150
    },
    {
      id: "book5",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmqQdgffIeuPeMrfAHJmdQCw9HlDe_9vcS9w&s",
      level: "AVANZADO",
      title: "Partes del cuerpo ",
      description: "Manual ilustrado para aprender las partes del cuerpo y enseñarte para que sirve .",
      features: [
        "8 proyectos prácticos",
        "Conceptos básicos de programación",
        "Instrucciones detalladas con imágenes",
        "Para niños de 14-16 años"
      ],
      price: 150
    },
    {
      id: "book6",
      image: "https://i.ytimg.com/vi/lLpmmjkSUOw/maxresdefault.jpg",
      level: "AVANZADO",
      title: "MEDUSA DE LOS NUMEROS ",
      description: "Manual ilustrado para aprender los numeros mientras juegas .",
      features: [
        "8 proyectos prácticos",
        "Conceptos básicos de programación",
        "Instrucciones detalladas con imágenes",
        "Para niños de 14-16 años"
      ],
      price: 150
    },
    {
      id: "book7",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd9PDX0e3rBMp8j91qRigvD8pCv4OxyLKIFg&s",
      level: "AVANZADO",
      title: "PALETA DE COLORES",
      description: "Manual ilustrado para aprender los diferentes colores y como podemos convinarlos .",
      features: [
        "8 proyectos prácticos",
        "Conceptos básicos de programación",
        "Instrucciones detalladas con imágenes",
        "Para niños de 14-16 años"
      ],
      price: 150
    },
    
    
    
  ];


  return (
    <section id="comprar" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
          Nuestros <span className="text-accent">Libros</span>
        </h2>
        
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Explora nuestra colección de libros educativos diseñados para estimular la creatividad 
          y el aprendizaje de los más pequeños.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book, index) => (
            <BookCard 
              key={book.id}
              id={book.id}
              image={book.image}
              level={book.level}
              title={book.title}
              description={book.description}
              features={book.features}
              price={book.price}
              animationDelay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;