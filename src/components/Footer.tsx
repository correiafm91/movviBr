
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

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-4 text-center">
            <div className="flex justify-center mb-6">
              <img 
                src="https://i.postimg.cc/mkdfxx87/501473835-17853749343446467-3939770945407392987-n-removebg-preview.png" 
                alt="Movvi Logo" 
                className="w-16 h-16 object-contain bg-white rounded-lg p-2"
              />
            </div>
            <div className="flex justify-center space-x-4 mb-8">
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
              Empresa certificada e líder na América do Sul com 5 anos de experiência
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
