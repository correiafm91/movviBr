
import React, { useEffect, useState } from 'react';
import { ChevronDown, Sparkles, Star } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-movvi-yellow/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-movvi-yellow/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-movvi-yellow/15 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 text-center relative z-10">
        {/* Badge */}
        <div className={`inline-flex items-center px-4 py-2 bg-movvi-yellow/10 rounded-full border border-movvi-yellow/20 mb-8 transition-all duration-1000 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}>
          <Star className="w-4 h-4 text-movvi-yellow mr-2" />
          <span className="text-black font-medium">Líder na América do Sul</span>
        </div>

        {/* Main Headline */}
        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
          <span className="text-black font-playfair">Design que</span>
          <br />
          <span className="text-gradient font-playfair">Transforma</span>
          <br />
          <span className="text-black font-playfair">Espaços</span>
        </h1>

        {/* Subtitle */}
        <p className={`text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}>
          Criamos móveis personalizados que refletem sua personalidade e elevam seu ambiente com 
          <span className="text-movvi-yellow font-semibold"> design exclusivo</span> e 
          <span className="text-movvi-yellow font-semibold"> qualidade premium</span>.
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-20 transition-all duration-1000 delay-600 ${isVisible ? 'animate-scale-in opacity-100' : 'opacity-0'}`}>
          <a
            href="#gallery"
            className="bg-movvi-yellow text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Ver Nossos Projetos
          </a>
          <a
            href="#contact"
            className="border-2 border-black text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-black hover:text-white transition-all duration-300 hover:scale-105"
          >
            Solicitar Orçamento
          </a>
        </div>

        {/* Social Proof */}
        <div className={`flex flex-col sm:flex-row gap-8 justify-center items-center text-center transition-all duration-1000 delay-800 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-movvi-yellow" />
            <span className="text-gray-600">
              <span className="text-movvi-yellow font-bold">+400</span> clientes satisfeitos
            </span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-movvi-yellow" />
            <span className="text-gray-600">
              <span className="text-movvi-yellow font-bold">89.9%</span> de satisfação
            </span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-movvi-yellow" />
            <span className="text-gray-600">
              <span className="text-movvi-yellow font-bold">15+</span> anos de experiência
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
