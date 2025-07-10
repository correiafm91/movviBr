
import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-white text-black py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-4 text-center">
            <div className="flex justify-center space-x-4 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-600 text-sm">
              © {currentYear} Projetos de Móveis. Todos os direitos reservados.
            </div>
            <div className="flex gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-black transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gray-100 rounded-full border border-gray-200">
            <span className="text-black font-semibold mr-2">✓</span>
            <span className="text-gray-600 text-sm">
              Projetos profissionais com 5 anos de experiência
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
