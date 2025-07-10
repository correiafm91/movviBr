
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
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 font-playfair transition-all duration-1000 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
            <span className="text-black">Sobre Nosso </span>
            <span className="text-black">Serviço</span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}>
            Há mais de 5 anos desenvolvendo 
            <span className="text-black font-semibold"> projetos técnicos de móveis personalizados</span>. 
            Nossa especialidade é criar projetos detalhados que facilitam a fabricação e garantem resultados excepcionais.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`text-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:scale-105 border ${
                isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                <feature.icon className="w-8 h-8 text-black" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-black">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
