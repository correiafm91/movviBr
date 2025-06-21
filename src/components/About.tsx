
import React, { useEffect, useRef, useState } from 'react';
import { Award, Users, Zap, Heart } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const features = [
    {
      icon: Award,
      title: "Precisão Técnica",
      description: "Projetos detalhados com especificações técnicas precisas para fabricação"
    },
    {
      icon: Users,
      title: "Experiência Comprovada",
      description: "Anos de experiência em desenvolvimento de projetos de móveis personalizados"
    },
    {
      icon: Zap,
      title: "Entrega Rápida",
      description: "Projetos desenvolvidos em até 3 semanas, com opções express de 14 dias"
    },
    {
      icon: Heart,
      title: "Atenção aos Detalhes",
      description: "Cada projeto é desenvolvido com cuidado e atenção aos mínimos detalhes técnicos"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-blue-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 font-playfair transition-all duration-1000 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
            <span className="text-white">Sobre Nosso </span>
            <span className="text-white">Serviço</span>
          </h2>
          <p className={`text-xl text-white/80 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}>
            Há mais de 5 anos desenvolvendo 
            <span className="text-white font-semibold"> projetos técnicos de móveis personalizados</span>. 
            Nossa especialidade é criar projetos detalhados que facilitam a fabricação e garantem resultados excepcionais.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'animate-slide-in-right opacity-100' : 'opacity-0'}`}>
            <h3 className="text-3xl font-bold mb-6 font-playfair text-white">
              <span className="text-white">Projetos</span> Profissionais
            </h3>
            <p className="text-lg text-white/80 mb-6 leading-relaxed">
              Desenvolvemos projetos técnicos completos para móveis personalizados, incluindo plantas baixas, 
              cortes, detalhamentos, lista de materiais e especificações técnicas para fabricação.
            </p>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Cada projeto passa por um processo rigoroso de desenvolvimento, onde combinamos conhecimento 
              técnico com criatividade, garantindo projetos viáveis e de alta qualidade.
            </p>
            
            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <div className="text-3xl font-bold text-white mb-2">5+</div>
                <div className="text-white/80">Anos de Experiência</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <div className="text-3xl font-bold text-white mb-2">4</div>
                <div className="text-white/80">Países Atendidos</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'animate-scale-in opacity-100' : 'opacity-0'}`}>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=800&h=600"
                alt="Projeto de móveis personalizados"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl hover-lift"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <Award className="w-8 h-8 text-blue-900" />
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`text-center p-6 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105 ${
                isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${800 + index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-white">{feature.title}</h4>
              <p className="text-white/80 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
