
import React, { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Award, Globe } from 'lucide-react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    projects: 0,
    satisfaction: 0,
    experience: 0,
    countries: 0
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const targets = {
        projects: 400,
        satisfaction: 89.9,
        experience: 5,
        countries: 4
      };

      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        
        setCounters({
          projects: Math.floor(targets.projects * easeOutQuart),
          satisfaction: +(targets.satisfaction * easeOutQuart).toFixed(1),
          experience: Math.floor(targets.experience * easeOutQuart),
          countries: Math.floor(targets.countries * easeOutQuart)
        });

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isVisible]);

  const stats = [
    {
      icon: TrendingUp,
      value: `+${counters.projects}`,
      label: 'Projetos Desenvolvidos',
      description: 'Projetos técnicos de móveis personalizados criados'
    },
    {
      icon: Award,
      value: `${counters.satisfaction}%`,
      label: 'Taxa de Aprovação',
      description: 'Índice de aprovação dos projetos pelos clientes'
    },
    {
      icon: Users,
      value: `+${counters.experience}`,
      label: 'Anos de Experiência',
      description: 'Experiência em desenvolvimento de projetos de móveis'
    },
    {
      icon: Globe,
      value: `${counters.countries}`,
      label: 'Países Atendidos',
      description: 'Projetos desenvolvidos em diferentes países'
    }
  ];

  return (
    <section id="stats" ref={sectionRef} className="py-20 bg-gray-50 text-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 font-playfair transition-all duration-1000 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
            <span className="text-black">Números que </span>
            <span className="text-black">Impressionam</span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}>
            Nossa trajetória de sucesso é refletida em números que demonstram a 
            <span className="text-black font-semibold"> qualidade</span> e 
            <span className="text-black font-semibold"> confiança</span> dos nossos projetos.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className={`text-center p-8 bg-white rounded-2xl border border-gray-200 hover:bg-gray-50 transition-all duration-500 hover:scale-105 shadow-lg ${
                isVisible ? 'animate-counter opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${400 + index * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-6">
                <stat.icon className="w-8 h-8 text-black" />
              </div>
              
              <div className="text-4xl md:text-5xl font-bold mb-3 text-black font-playfair">
                {stat.value}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-black">
                {stat.label}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}>
          <p className="text-lg text-gray-600 mb-6">
            Faça parte dessas estatísticas de sucesso!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
