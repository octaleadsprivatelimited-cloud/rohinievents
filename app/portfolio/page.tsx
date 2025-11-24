'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const Portfolio = () => {

  const projects = [
    {
      id: 1,
      title: 'Royal Wedding Celebration',
      category: 'wedding',
      type: 'Complete Wedding Planning',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
      description: 'A grand wedding celebration with elegant decorations, premium catering, and flawless coordination.'
    },
    {
      id: 2,
      title: 'Tech Conference 2023',
      category: 'corporate',
      type: 'Corporate Event Management',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop',
      description: 'Professional corporate conference with 500+ attendees, complete technical setup and catering.'
    },
    {
      id: 3,
      title: 'Product Launch Event',
      category: 'corporate',
      type: 'Product Launch',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&h=600&fit=crop',
      description: 'Stunning product launch event with media coverage, live demonstrations, and entertainment.'
    },
    {
      id: 4,
      title: 'Birthday Celebration',
      category: 'party',
      type: 'Party Planning',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
      description: 'Colorful birthday celebration with decorations, entertainment, and delicious catering.'
    },
    {
      id: 5,
      title: 'Anniversary Celebration',
      category: 'party',
      type: 'Anniversary Event',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
      description: 'Elegant anniversary celebration with fine dining, entertainment, and beautiful decorations.'
    },
    {
      id: 6,
      title: 'Team Building Event',
      category: 'corporate',
      type: 'Team Building',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
      description: 'Fun and engaging team building activities with entertainment and catering services.'
    }
  ];


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=1080&fit=crop"
            alt="Rohini Decorations & Events Portfolio"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Our <span className="text-accent">Portfolio</span>
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
            Explore our carefully curated collection of successful event management projects.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Browse through our portfolio of successful interior design projects 
              that showcase our expertise and creativity.
            </p>
          </div>


          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden card-hover"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-accent text-white text-xs font-medium rounded-full">
                      {project.type}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-accent transition-colors duration-200">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-end text-sm text-gray-500 mb-4">
                    <span className="capitalize">{project.category}</span>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Let's create something extraordinary together. Our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-accent hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center group text-lg"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            
            <Link
              href="/gallery"
              className="border-2 border-white text-white hover:bg-white hover:text-accent px-8 py-4 rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center text-lg"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
