
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
    <footer className="bg-blue-900 text-white py-16 border-t border-white/10">
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
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white hover:text-blue-900 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              © {currentYear} Projetos de Móveis. Todos os direitos reservados.
            </div>
            <div className="flex gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 rounded-full border border-white/20">
            <span className="text-white font-semibold mr-2">✓</span>
            <span className="text-white/80 text-sm">
              Projetos profissionais com 5 anos de experiência
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
