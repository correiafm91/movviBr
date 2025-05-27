
import React, { useEffect, useRef, useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const FAQ = () => {
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

  const faqs = [
    {
      question: "Quanto tempo leva para produzir um móvel personalizado?",
      answer: "O prazo varia de acordo com a complexidade do projeto, mas geralmente entre 30 a 60 dias úteis. Projetos mais simples podem ser entregues em até 20 dias, enquanto peças mais elaboradas podem levar até 90 dias. Sempre fornecemos um cronograma detalhado após a aprovação do projeto."
    },
    {
      question: "Vocês fazem projetos para todo o Brasil?",
      answer: "Sim! Atendemos todo o território nacional. Para regiões mais distantes, calculamos o frete de entrega e instalação. Também temos parcerias com montadores qualificados em várias cidades para garantir a melhor instalação dos seus móveis."
    },
    {
      question: "É possível ver o projeto antes da produção?",
      answer: "Absolutamente! Criamos renders 3D fotorrealísticos do seu projeto para que você possa visualizar exatamente como ficará o móvel em seu ambiente antes de iniciarmos a produção. Fazemos quantas alterações forem necessárias até que você esteja completamente satisfeito."
    },
    {
      question: "Quais materiais vocês utilizam?",
      answer: "Trabalhamos com uma ampla variedade de materiais de alta qualidade: madeiras nobres (mogno, carvalho, freijó), MDF e MDP de primeira linha, laminados, vidros temperados, metais e acabamentos especiais. Todos os materiais são certificados e sustentáveis."
    },
    {
      question: "Vocês oferecem garantia?",
      answer: "Sim! Oferecemos 2 anos de garantia para estrutura e 1 ano para acabamentos e ferragens. Além disso, prestamos assistência técnica vitalícia para manutenções e pequenos reparos. Nossa garantia cobre defeitos de fabricação e problemas estruturais."
    },
    {
      question: "Como funciona o processo de orçamento?",
      answer: "O orçamento é gratuito! Primeiro fazemos uma visita técnica ou videochamada para entender suas necessidades, depois criamos um projeto inicial com estimativa de custos. Após aprovação, detalhamos o projeto completo com valores finais. Só iniciamos a produção após sua aprovação total."
    },
    {
      question: "É possível fazer apenas parte de um ambiente?",
      answer: "Claro! Não é necessário mobiliar o ambiente inteiro. Podemos criar desde uma única peça especial até ambientes completos. Nossa especialidade é adaptar nossa criatividade ao seu orçamento e necessidades específicas."
    },
    {
      question: "Vocês fazem manutenção dos móveis após a entrega?",
      answer: "Sim! Oferecemos serviço de manutenção preventiva e corretiva. Recomendamos uma revisão anual para móveis de uso intenso. Também oferecemos serviços de restauração e modernização para dar nova vida aos seus móveis."
    }
  ];

  return (
    <section id="faq" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center px-4 py-2 bg-movvi-yellow/10 rounded-full border border-movvi-yellow/20 mb-6 transition-all duration-1000 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}>
            <HelpCircle className="w-4 h-4 text-movvi-yellow mr-2" />
            <span className="text-black font-medium">Perguntas Frequentes</span>
          </div>
          
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 font-playfair transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
            <span className="text-black">Dúvidas </span>
            <span className="text-gradient">Frequentes</span>
          </h2>
          
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}>
            Esclarecemos as principais dúvidas sobre nossos serviços de 
            <span className="text-movvi-yellow font-semibold"> móveis personalizados</span>. 
            Não encontrou sua resposta? Entre em contato conosco!
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gray-50 rounded-2xl border-none px-6 py-2 hover:bg-gray-100 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-black hover:text-movvi-yellow hover:no-underline transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 pt-2 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}>
          <p className="text-lg text-gray-600 mb-6">
            Ainda tem dúvidas? Nossa equipe está pronta para ajudar!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-movvi-yellow text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
