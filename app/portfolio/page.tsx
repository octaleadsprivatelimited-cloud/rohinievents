'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const Portfolio = () => {

  const projects = [
    {
      id: 1,
      title: 'Elegant Wedding Celebration',
      category: 'wedding',
      type: 'Wedding Planning',
      year: '2024',
      image: '/images/gallery-1.jpeg',
      description: 'A grand wedding celebration with elegant decorations, premium catering, and flawless coordination.'
    },
    {
      id: 2,
      title: 'Corporate Event Excellence',
      category: 'corporate',
      type: 'Corporate Event',
      year: '2024',
      image: '/images/gallery-2.jpeg',
      description: 'Professional corporate event with complete setup, catering, and event management services.'
    },
    {
      id: 3,
      title: 'Festive Celebration',
      category: 'party',
      type: 'Party Planning',
      year: '2024',
      image: '/images/gallery-3.jpeg',
      description: 'Colorful celebration with beautiful decorations, entertainment, and delicious catering.'
    },
    {
      id: 4,
      title: 'Special Occasion Event',
      category: 'party',
      type: 'Event Decoration',
      year: '2024',
      image: '/images/gallery-4.jpeg',
      description: 'Stunning event decoration with attention to detail and premium services.'
    },
    {
      id: 5,
      title: 'Grand Celebration',
      category: 'wedding',
      type: 'Complete Event Management',
      year: '2024',
      image: '/images/gallery-5.jpeg',
      description: 'A memorable celebration with elegant decorations and flawless execution.'
    },
    {
      id: 6,
      title: 'Luxury Event Design',
      category: 'corporate',
      type: 'Event Design',
      year: '2024',
      image: '/images/gallery-6.jpeg',
      description: 'Sophisticated event design with premium decorations and professional services.'
    },
    {
      id: 7,
      title: 'Celebration Event',
      category: 'party',
      type: 'Party Planning',
      year: '2024',
      image: '/images/gallery-7.jpeg',
      description: 'Beautiful celebration with stunning decorations and excellent catering services.'
    },
    {
      id: 8,
      title: 'Event Excellence',
      category: 'corporate',
      type: 'Corporate Event',
      year: '2024',
      image: '/images/gallery-8.jpeg',
      description: 'Professional event management with complete coordination and premium services.'
    },
    {
      id: 9,
      title: 'Special Event Celebration',
      category: 'party',
      type: 'Event Decoration',
      year: '2024',
      image: '/images/gallery-9.jpeg',
      description: 'Elegant event decoration with beautiful arrangements and professional setup.'
    },
    {
      id: 10,
      title: 'Memorable Celebration',
      category: 'wedding',
      type: 'Wedding Planning',
      year: '2024',
      image: '/images/gallery-10.jpeg',
      description: 'A beautiful wedding celebration with elegant decorations and flawless coordination.'
    },
    {
      id: 11,
      title: 'Corporate Gathering',
      category: 'corporate',
      type: 'Corporate Event',
      year: '2024',
      image: '/images/gallery-11.jpeg',
      description: 'Professional corporate event with complete setup and premium services.'
    },
    {
      id: 12,
      title: 'Festive Event',
      category: 'party',
      type: 'Party Planning',
      year: '2024',
      image: '/images/gallery-12.jpeg',
      description: 'Colorful festive event with beautiful decorations and entertainment.'
    },
    {
      id: 13,
      title: 'Elegant Event Design',
      category: 'wedding',
      type: 'Event Decoration',
      year: '2024',
      image: '/images/gallery-13.jpeg',
      description: 'Sophisticated event design with elegant decorations and premium services.'
    },
    {
      id: 14,
      title: 'Grand Event Celebration',
      category: 'party',
      type: 'Complete Event Management',
      year: '2024',
      image: '/images/gallery-14.jpeg',
      description: 'A grand celebration with stunning decorations and flawless execution.'
    },
    {
      id: 15,
      title: 'Luxury Celebration',
      category: 'corporate',
      type: 'Corporate Event',
      year: '2024',
      image: '/images/gallery-15.jpeg',
      description: 'Premium event management with elegant decorations and professional services.'
    },
    {
      id: 16,
      title: 'Special Occasion',
      category: 'party',
      type: 'Party Planning',
      year: '2024',
      image: '/images/gallery-16.jpeg',
      description: 'Beautiful special occasion celebration with excellent decorations and catering.'
    },
    {
      id: 17,
      title: 'Event Excellence',
      category: 'wedding',
      type: 'Wedding Planning',
      year: '2024',
      image: '/images/gallery-17.jpeg',
      description: 'A memorable wedding celebration with elegant decorations and premium services.'
    },
    {
      id: 18,
      title: 'Corporate Event',
      category: 'corporate',
      type: 'Corporate Event',
      year: '2024',
      image: '/images/gallery-18.jpeg',
      description: 'Professional corporate event with complete coordination and setup.'
    },
    {
      id: 19,
      title: 'Celebration Event',
      category: 'party',
      type: 'Event Decoration',
      year: '2024',
      image: '/images/gallery-19.jpeg',
      description: 'Stunning celebration with beautiful decorations and professional services.'
    },
    {
      id: 20,
      title: 'Grand Celebration',
      category: 'wedding',
      type: 'Complete Event Management',
      year: '2024',
      image: '/images/gallery-20.jpeg',
      description: 'A grand celebration with elegant decorations and flawless execution.'
    },
    {
      id: 21,
      title: 'Luxury Event',
      category: 'corporate',
      type: 'Event Design',
      year: '2024',
      image: '/images/gallery-21.jpeg',
      description: 'Sophisticated event design with premium decorations and services.'
    },
    {
      id: 22,
      title: 'Special Event',
      category: 'party',
      type: 'Party Planning',
      year: '2024',
      image: '/images/gallery-22.jpeg',
      description: 'Beautiful special event with excellent decorations and catering.'
    },
    {
      id: 23,
      title: 'Elegant Celebration',
      category: 'wedding',
      type: 'Wedding Planning',
      year: '2024',
      image: '/images/gallery-23.jpeg',
      description: 'An elegant wedding celebration with beautiful decorations and coordination.'
    },
    {
      id: 24,
      title: 'Corporate Excellence',
      category: 'corporate',
      type: 'Corporate Event',
      year: '2024',
      image: '/images/gallery-24.jpeg',
      description: 'Professional corporate event with complete setup and premium services.'
    },
    {
      id: 25,
      title: 'Festive Celebration',
      category: 'party',
      type: 'Event Decoration',
      year: '2024',
      image: '/images/gallery-25.jpeg',
      description: 'Colorful festive celebration with stunning decorations and entertainment.'
    },
    {
      id: 26,
      title: 'Memorable Event',
      category: 'wedding',
      type: 'Complete Event Management',
      year: '2024',
      image: '/images/gallery-26.jpeg',
      description: 'A memorable event with elegant decorations and flawless coordination.'
    },
    {
      id: 27,
      title: 'Grand Event',
      category: 'corporate',
      type: 'Corporate Event',
      year: '2024',
      image: '/images/gallery-27.jpeg',
      description: 'A grand corporate event with professional setup and premium services.'
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
