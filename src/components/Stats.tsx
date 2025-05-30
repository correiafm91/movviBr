
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
      const duration = 2000; // 2 seconds
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
        
        // Easing function for smooth animation
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
      label: 'Projetos Entregues',
      description: 'Designs de móveis personalizados criados com excelência'
    },
    {
      icon: Award,
      value: `${counters.satisfaction}%`,
      label: 'Taxa de Satisfação',
      description: 'Índice de aprovação dos nossos clientes'
    },
    {
      icon: Users,
      value: `+${counters.experience}`,
      label: 'Anos de Experiência',
      description: 'Tradição e expertise em design de móveis personalizados'
    },
    {
      icon: Globe,
      value: `${counters.countries}`,
      label: 'Países Atendidos',
      description: 'Presença internacional na América do Sul'
    }
  ];

  return (
    <section id="stats" ref={sectionRef} className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-movvi-yellow/5 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-movvi-yellow/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 font-playfair transition-all duration-1000 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
            <span className="text-white">Números que </span>
            <span className="text-gradient">Impressionam</span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}>
            Nossa trajetória de sucesso é refletida em números que demonstram a 
            <span className="text-movvi-yellow font-semibold"> confiança</span> e 
            <span className="text-movvi-yellow font-semibold"> satisfação</span> dos nossos clientes.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className={`text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 ${
                isVisible ? 'animate-counter opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${400 + index * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-movvi-yellow/20 rounded-full mb-6">
                <stat.icon className="w-8 h-8 text-movvi-yellow" />
              </div>
              
              <div className="text-4xl md:text-5xl font-bold mb-3 text-movvi-yellow font-playfair">
                {stat.value}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-white">
                {stat.label}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}>
          <p className="text-lg text-gray-300 mb-6">
            Faça parte dessas estatísticas de sucesso!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
