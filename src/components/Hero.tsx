
import React, { useEffect, useState } from 'react';
import { ChevronDown, Sparkles, Star } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/15 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 text-center relative z-10">
        {/* Badge */}
        <div className={`inline-flex items-center px-4 py-2 bg-white/10 rounded-full border border-white/20 mb-8 transition-all duration-1000 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}>
          <Star className="w-4 h-4 text-white mr-2" />
          <span className="text-white font-medium">Projetos Exclusivos</span>
        </div>

        {/* Main Headline */}
        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
          <span className="text-white font-playfair">Projetos de</span>
          <br />
          <span className="text-white font-playfair">Móveis</span>
          <br />
          <span className="text-white font-playfair">Exclusivos</span>
        </h1>

        {/* Subtitle */}
        <p className={`text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}>
          Desenvolvimento de projetos técnicos detalhados para móveis personalizados com 
          <span className="text-white font-semibold"> precisão técnica</span> e 
          <span className="text-white font-semibold"> qualidade profissional</span>.
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-20 transition-all duration-1000 delay-600 ${isVisible ? 'animate-scale-in opacity-100' : 'opacity-0'}`}>
          <a
            href="#gallery"
            className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Ver Projetos
          </a>
          <a
            href="#faq"
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 hover:scale-105"
          >
            Solicitar Orçamento
          </a>
        </div>

        {/* Social Proof */}
        <div className={`flex flex-col sm:flex-row gap-8 justify-center items-center text-center transition-all duration-1000 delay-800 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-white" />
            <span className="text-white/80">
              <span className="text-white font-bold">+400</span> projetos desenvolvidos
            </span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-white/30"></div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-white" />
            <span className="text-white/80">
              <span className="text-white font-bold">89.9%</span> de aprovação
            </span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-white/30"></div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-white" />
            <span className="text-white/80">
              <span className="text-white font-bold">5+</span> anos de experiência
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/60" />
      </div>
    </section>
  );
};

export default Hero;
