
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Building } from 'lucide-react';

const ProjectTypes = () => {
  const projectTypes = [
    {
      id: 'residential',
      title: 'Residencial',
      description: 'Projetos personalizados para sua casa, criando ambientes únicos e funcionais que refletem seu estilo de vida.',
      icon: Home,
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop',
      features: ['Móveis sob medida', 'Design personalizado', 'Ambientes funcionais', 'Acabamentos exclusivos']
    },
    {
      id: 'corporate',
      title: 'Corporativo',
      description: 'Soluções profissionais para escritórios e empresas, otimizando espaços de trabalho com design e funcionalidade.',
      icon: Building,
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
      features: ['Móveis corporativos', 'Ergonomia avançada', 'Otimização de espaço', 'Identidade visual']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 font-playfair">
            Tipos de Projetos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desenvolvemos projetos técnicos especializados para diferentes necessidades, 
            sempre com foco na qualidade e precisão dos detalhes.
          </p>
        </div>

        {/* Project Types Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projectTypes.map((type) => (
            <Card key={type.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-gray-200">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={type.image} 
                  alt={type.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4 p-3 bg-white rounded-full">
                  <type.icon className="w-6 h-6 text-black" />
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl text-black font-playfair">
                  {type.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-base">
                  {type.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {type.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-black rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6">
                  <a
                    href="https://www.instagram.com/movvibr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors font-semibold"
                  >
                    Solicitar Orçamento
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectTypes;
