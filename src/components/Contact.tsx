
import React, { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', project: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "+55 (11) 9999-9999",
      link: "tel:+5511999999999"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@movvi.com.br",
      link: "mailto:contato@movvi.com.br"
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "São Paulo, SP - Brasil",
      link: "#"
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Seg - Sex: 8h às 18h",
      link: "#"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 font-playfair transition-all duration-1000 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
            <span className="text-black">Vamos </span>
            <span className="text-gradient">Conversar</span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}>
            Pronto para transformar seu espaço? Entre em contato conosco e vamos criar algo 
            <span className="text-movvi-yellow font-semibold"> extraordinário</span> juntos!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'animate-slide-in-right opacity-100' : 'opacity-0'}`}>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-black">Solicite seu Orçamento</h3>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-movvi-yellow focus:border-transparent transition-all"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-movvi-yellow focus:border-transparent transition-all"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-movvi-yellow focus:border-transparent transition-all"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tipo de Projeto
                      </label>
                      <select
                        name="project"
                        value={formData.project}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-movvi-yellow focus:border-transparent transition-all"
                      >
                        <option value="">Selecione...</option>
                        <option value="sala">Sala de Estar</option>
                        <option value="quarto">Quarto</option>
                        <option value="escritorio">Escritório</option>
                        <option value="cozinha">Cozinha</option>
                        <option value="completo">Ambiente Completo</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Descreva seu Projeto
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-movvi-yellow focus:border-transparent transition-all resize-none"
                      placeholder="Conte-nos sobre seu projeto, estilo preferido, medidas aproximadas, orçamento, etc."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-movvi-yellow text-black py-4 px-6 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Enviar Solicitação
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-green-600 mb-2">Mensagem Enviada!</h4>
                  <p className="text-gray-600">
                    Obrigado pelo seu interesse! Entraremos em contato em até 24 horas.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-black">Informações de Contato</h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Nossa equipe está pronta para atendê-lo e transformar suas ideias em realidade. 
                  Entre em contato através de qualquer um dos canais abaixo.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.title}
                    href={info.link}
                    className="block p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-movvi-yellow/10 rounded-lg flex items-center justify-center group-hover:bg-movvi-yellow/20 transition-colors">
                        <info.icon className="w-6 h-6 text-movvi-yellow" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-1">{info.title}</h4>
                        <p className="text-gray-600">{info.content}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Additional Info */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="font-semibold text-black mb-3">Por que escolher a Movvi?</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-movvi-yellow flex-shrink-0" />
                    Orçamento gratuito e sem compromisso
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-movvi-yellow flex-shrink-0" />
                    Projeto 3D antes da produção
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-movvi-yellow flex-shrink-0" />
                    Garantia de 2 anos
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-movvi-yellow flex-shrink-0" />
                    Entrega e montagem incluídas
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
