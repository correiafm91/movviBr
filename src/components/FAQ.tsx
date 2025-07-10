
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
      question: "Quanto tempo leva para desenvolver um projeto de móvel?",
      answer: "O desenvolvimento de projetos técnicos leva em até 3 semanas, variando de acordo com a complexidade. Projetos mais simples podem ser entregues em até 14 dias, enquanto projetos mais elaborados podem levar até 3 semanas. Sempre fornecemos um cronograma detalhado após a consulta inicial."
    },
    {
      question: "O que está incluído no projeto técnico?",
      answer: "Nossos projetos incluem plantas baixas detalhadas, cortes técnicos, vistas em 3D, lista completa de materiais, especificações técnicas para fabricação, e instruções de montagem. Tudo o que um marceneiro precisa para fabricar o móvel perfeitamente."
    },
    {
      question: "É possível visualizar o projeto antes da finalização?",
      answer: "Sim! Criamos renders 3D fotorrealísticos e apresentações técnicas para que você possa visualizar exatamente como ficará o móvel. Fazemos quantas alterações forem necessárias até que você esteja completamente satisfeito com o projeto."
    },
    {
      question: "Vocês indicam fabricantes ou marceneiros?",
      answer: "Sim, temos uma rede de parceiros fabricantes e marceneiros qualificados em diferentes regiões. Podemos indicar profissionais de confiança que trabalham com nossos projetos e seguem nossas especificações técnicas."
    },
    {
      question: "Para quais regiões vocês atendem?",
      answer: "Atendemos 4 países, incluindo todo o Brasil. Como trabalhamos com projetos técnicos digitais, podemos atender clientes em qualquer localização, sempre indicando fabricantes locais quando necessário."
    },
    {
      question: "Como funciona o orçamento do projeto?",
      answer: "A consulta inicial é gratuita! Primeiro analisamos suas necessidades e espaço, depois apresentamos uma proposta detalhada com valores e prazos. O investimento no projeto técnico é separado do custo de fabricação."
    },
    {
      question: "Posso solicitar projeto para apenas uma peça?",
      answer: "Claro! Desenvolvemos projetos desde uma única peça especial até ambientes completos. Nossa especialidade é adaptar nossa expertise técnica às suas necessidades específicas, independente do tamanho do projeto."
    },
    {
      question: "Que tipo de suporte vocês oferecem após a entrega?",
      answer: "Oferecemos suporte técnico completo após a entrega do projeto. Isso inclui esclarecimentos sobre especificações, apoio durante a fabricação, e revisões técnicas quando necessário. Nosso compromisso é garantir que o projeto seja executado perfeitamente."
    }
  ];

  return (
    <section id="faq" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center px-4 py-2 bg-gray-100 rounded-full border border-gray-200 mb-6 transition-all duration-1000 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}>
            <HelpCircle className="w-4 h-4 text-black mr-2" />
            <span className="text-black font-medium">Perguntas Frequentes</span>
          </div>
          
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 font-playfair transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
            <span className="text-black">Dúvidas </span>
            <span className="text-black">Frequentes</span>
          </h2>
          
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}>
            Esclarecemos as principais dúvidas sobre nossos serviços de 
            <span className="text-black font-semibold"> desenvolvimento de projetos técnicos</span> para móveis personalizados.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gray-50 rounded-2xl border border-gray-200 px-6 py-2 hover:bg-gray-100 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-black hover:text-gray-700 hover:no-underline transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 pt-2 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
