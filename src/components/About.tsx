
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
      title: "Excelência Comprovada",
      description: "Reconhecidos como líderes em design de móveis personalizados na América do Sul"
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Designers e artesãos experientes dedicados a criar peças únicas"
    },
    {
      icon: Zap,
      title: "Inovação Constante",
      description: "Utilizamos as mais modernas técnicas e materiais sustentáveis"
    },
    {
      icon: Heart,
      title: "Paixão pelo Detalhe",
      description: "Cada projeto é tratado com cuidado e atenção aos mínimos detalhes"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 font-playfair transition-all duration-1000 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
            <span className="text-black">Sobre a </span>
            <span className="text-gradient">Movvi</span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}>
            Há mais de 5 anos, a Movvi tem sido pioneira em transformar sonhos em realidade através do 
            <span className="text-movvi-yellow font-semibold"> design de móveis personalizados</span>. 
            Nossa missão é criar peças únicas que reflitam a personalidade e o estilo de vida de cada cliente.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'animate-slide-in-right opacity-100' : 'opacity-0'}`}>
            <h3 className="text-3xl font-bold mb-6 font-playfair">
              <span className="text-movvi-yellow">Líderes</span> na América do Sul
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Nossa jornada começou com uma visão simples: criar móveis que não sejam apenas funcionais, 
              mas que contem histórias e criem conexões emocionais. Hoje, somos orgulhosamente reconhecidos 
              como a principal empresa de design de móveis personalizados da América do Sul.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Cada peça que criamos passa por um processo meticuloso de design, onde combinamos tradição 
              artesanal com tecnologia de ponta, garantindo qualidade excepcional e durabilidade.
            </p>
            
            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-movvi-yellow mb-2">5+</div>
                <div className="text-gray-600">Anos de Experiência</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-movvi-yellow mb-2">4</div>
                <div className="text-gray-600">Países Atendidos</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'animate-scale-in opacity-100' : 'opacity-0'}`}>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=800&h=600"
                alt="Sala de estar moderna com móveis Movvi"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl hover-lift"
              />
              <div className="absolute -bottom-6 -right-6 bg-movvi-yellow p-4 rounded-xl shadow-lg">
                <Award className="w-8 h-8 text-black" />
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`text-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:scale-105 ${
                isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${800 + index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-movvi-yellow/10 rounded-full mb-4">
                <feature.icon className="w-8 h-8 text-movvi-yellow" />
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
