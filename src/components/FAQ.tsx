
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
      question: "Quanto tempo leva para criar um projeto de móvel personalizado?",
      answer: "O serviço de design dura em até 3 semanas, variando de acordo com a complexidade do projeto. Projetos mais simples podem ser entregues em até 14 dias, enquanto designs mais elaborados podem levar até 3 semanas. Sempre fornecemos um cronograma detalhado após a consulta inicial."
    },
    {
      question: "Vocês fabricam os móveis ou apenas fazem o design?",
      answer: "Somos especializados em design de móveis personalizados. Criamos projetos detalhados e acompanhamos todo o processo de fabricação através de parcerias com empresas e profissionais qualificados próximos à sua região. Isso garante qualidade e reduz custos de transporte."
    },
    {
      question: "É possível ver o projeto antes da fabricação?",
      answer: "Absolutamente! Criamos renders 3D fotorrealísticos do seu projeto para que você possa visualizar exatamente como ficará o móvel em seu ambiente antes de iniciar a fabricação. Fazemos quantas alterações forem necessárias até que você esteja completamente satisfeito."
    },
    {
      question: "Como funciona o acompanhamento da fabricação?",
      answer: "Após aprovação do design, indicamos fabricantes ou marceneiros qualificados em sua região. Acompanhamos todo o processo através de relatórios e visitas técnicas, garantindo que o produto final esteja exatamente conforme o projeto aprovado."
    },
    {
      question: "Vocês atendem em quais regiões?",
      answer: "Atendemos 4 países na América do Sul, incluindo todo o Brasil. Para cada região, temos uma rede de parceiros fabricantes qualificados que seguem nossos padrões de qualidade e especificações técnicas."
    },
    {
      question: "Como funciona o processo de orçamento?",
      answer: "O orçamento de design é gratuito! Primeiro fazemos uma consulta para entender suas necessidades, depois criamos um projeto inicial com estimativa de custos de fabricação. Após aprovação, detalhamos o projeto completo com valores finais incluindo design e fabricação."
    },
    {
      question: "É possível fazer apenas parte de um ambiente?",
      answer: "Claro! Não é necessário mobiliar o ambiente inteiro. Podemos criar desde uma única peça especial até ambientes completos. Nossa especialidade é adaptar nossa criatividade ao seu orçamento e necessidades específicas."
    },
    {
      question: "Vocês dão suporte após a entrega do projeto de design?",
      answer: "Sim! Acompanhamos o processo até a entrega final do design e oferecemos suporte técnico para questões relacionadas ao projeto. Para a fabricação, nossos parceiros fabricantes oferecem garantia e assistência técnica adequada."
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
            <span className="text-movvi-yellow font-semibold"> design de móveis personalizados</span>. 
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
      </div>
    </section>
  );
};

export default FAQ;
