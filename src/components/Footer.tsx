
import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  const quickLinks = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#about' },
    { label: 'Galeria', href: '#gallery' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contact' }
  ];

  const services = [
    'Móveis Planejados',
    'Design de Interiores',
    'Móveis Corporativos',
    'Restauração',
    'Consultoria'
  ];

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-movvi-yellow rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">M</span>
              </div>
              <span className="text-2xl font-bold font-playfair">Movvi</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Líderes em design de móveis personalizados na América do Sul. 
              Transformamos espaços com criatividade, qualidade e inovação.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-movvi-yellow hover:text-black transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-movvi-yellow">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-movvi-yellow transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-movvi-yellow">Serviços</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-movvi-yellow">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-movvi-yellow mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+55 (11) 9999-9999</p>
                  <p className="text-sm text-gray-400">Seg - Sex: 8h às 18h</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-movvi-yellow mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">contato@movvi.com.br</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-movvi-yellow mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">São Paulo, SP - Brasil</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} Movvi. Todos os direitos reservados.
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-movvi-yellow transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-movvi-yellow transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-movvi-yellow transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gray-900 rounded-full border border-gray-800">
            <span className="text-movvi-yellow font-semibold mr-2">✓</span>
            <span className="text-gray-300 text-sm">
              Empresa certificada e líder na América do Sul
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
