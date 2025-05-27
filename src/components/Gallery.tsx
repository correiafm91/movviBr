
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'sala', label: 'Sala de Estar' },
    { id: 'quarto', label: 'Quarto' },
    { id: 'escritorio', label: 'Escritório' },
    { id: 'cozinha', label: 'Cozinha' }
  ];

  const projects = [
    {
      id: 1,
      title: "Sala de Estar Moderna",
      category: "sala",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=600&h=400",
      description: "Design minimalista com sofá personalizado e mesa de centro única"
    },
    {
      id: 2,
      title: "Quarto Contemporâneo",
      category: "quarto",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=600&h=400",
      description: "Mobiliário sob medida para otimização de espaço"
    },
    {
      id: 3,
      title: "Escritório Executivo",
      category: "escritorio",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=600&h=400",
      description: "Mesa executiva com design ergonômico e storage integrado"
    },
    {
      id: 4,
      title: "Cozinha Planejada",
      category: "cozinha",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=600&h=400",
      description: "Móveis funcionais com design inovador"
    },
    {
      id: 5,
      title: "Living Integrado",
      category: "sala",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=600&h=400",
      description: "Ambiente integrado com móveis multifuncionais"
    },
    {
      id: 6,
      title: "Suíte Master",
      category: "quarto",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=600&h=400",
      description: "Móveis exclusivos para o quarto principal"
    }
  ];

  const filteredProjects = selectedCategory === 'todos' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="gallery" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 font-playfair transition-all duration-1000 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
            <span className="text-black">Nossa </span>
            <span className="text-gradient">Galeria</span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}>
            Explore nossos projetos mais recentes e descubra como transformamos ideias em 
            <span className="text-movvi-yellow font-semibold"> móveis extraordinários</span>.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-movvi-yellow text-black shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-black'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? 'animate-scale-in opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${600 + index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 p-2 rounded-full">
                    <ExternalLink className="w-5 h-5 text-black" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-black group-hover:text-movvi-yellow transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center text-movvi-yellow font-medium group-hover:gap-2 transition-all duration-300">
                  Ver Detalhes
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-1000 delay-800 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}>
          <p className="text-lg text-gray-600 mb-6">
            Gostou do que viu? Vamos criar algo único para você!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-movvi-yellow text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Iniciar Meu Projeto
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
