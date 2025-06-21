
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
      title: "Projeto Sala Moderna",
      category: "sala",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=600&h=400",
      description: "Projeto técnico completo para sala de estar com móveis sob medida"
    },
    {
      id: 2,
      title: "Projeto Quarto Casal",
      category: "quarto",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=600&h=400",
      description: "Projeto detalhado para mobiliário de quarto com otimização de espaço"
    },
    {
      id: 3,
      title: "Projeto Escritório",
      category: "escritorio",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=600&h=400",
      description: "Projeto técnico para móveis de escritório ergonômicos"
    },
    {
      id: 4,
      title: "Projeto Cozinha",
      category: "cozinha",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=600&h=400",
      description: "Projeto completo para móveis funcionais de cozinha"
    },
    {
      id: 5,
      title: "Projeto Living",
      category: "sala",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=600&h=400",
      description: "Projeto técnico para ambiente integrado"
    },
    {
      id: 6,
      title: "Projeto Suíte",
      category: "quarto",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=600&h=400",
      description: "Projeto detalhado para móveis de suíte master"
    }
  ];

  const filteredProjects = selectedCategory === 'todos' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="gallery" ref={sectionRef} className="py-20 bg-blue-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 font-playfair transition-all duration-1000 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
            <span className="text-white">Nossos </span>
            <span className="text-white">Projetos</span>
          </h2>
          <p className={`text-xl text-white/80 max-w-3xl mx-auto mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}>
            Explore nossos projetos técnicos mais recentes e descubra como desenvolvemos 
            <span className="text-white font-semibold"> soluções profissionais</span> para móveis personalizados.
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
                  ? 'bg-white text-blue-900 shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
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
              className={`group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/10 ${
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
                    <ExternalLink className="w-5 h-5 text-blue-900" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-white/80 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/60 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center text-white font-medium group-hover:gap-2 transition-all duration-300">
                  Ver Detalhes
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-1000 delay-800 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}>
          <p className="text-lg text-white/80 mb-6">
            Precisa de um projeto técnico personalizado?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-white text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Solicitar Projeto
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
