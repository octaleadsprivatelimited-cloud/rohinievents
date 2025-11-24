import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Heart, Building2, UtensilsCrossed, Camera, Music, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Wedding Planning',
      description: 'Complete wedding coordination from engagement to reception with expert planning and flawless execution.',
      features: ['Venue Selection', 'Vendor Management', 'Timeline Planning', 'Day Coordination'],
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
      link: '/wedding-planning'
    },
    {
      icon: Building2,
      title: 'Corporate Events',
      description: 'Professional corporate event management including conferences, seminars, and team building events.',
      features: ['Conference Planning', 'Seminar Organization', 'Team Building', 'Product Launches'],
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop',
      link: '/corporate-events'
    },
    {
      icon: UtensilsCrossed,
      title: 'Catering Services',
      description: 'Premium catering solutions with diverse menus and professional service for all types of events.',
      features: ['Custom Menus', 'Professional Staff', 'Equipment Setup', 'Cleanup Services'],
      image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&h=600&fit=crop',
      link: '/catering-services'
    },
    {
      icon: Sparkles,
      title: 'Event Decoration',
      description: 'Stunning event decorations and floral arrangements that create the perfect ambiance for your celebration.',
      features: ['Floral Design', 'Theme Decoration', 'Lighting Setup', 'Stage Design'],
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
      link: '/event-decoration'
    },
    {
      icon: Camera,
      title: 'Photography Services',
      description: 'Professional event photography and videography to capture your special moments beautifully.',
      features: ['Event Photography', 'Video Production', 'Photo Editing', 'Album Design'],
      image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&h=600&fit=crop',
      link: '/photography-services'
    },
    {
      icon: Music,
      title: 'Entertainment Services',
      description: 'Complete entertainment solutions including DJ services, live music, and special performances.',
      features: ['DJ Services', 'Live Music', 'Sound Systems', 'Special Performances'],
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
      link: '/entertainment-services'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Complete Event Management
            <span className="block text-accent">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From planning to execution, we offer comprehensive event management services 
            with complete manpower organization for all types of celebrations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden card-hover"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-accent transition-colors duration-200">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-accent hover:text-accent/80 font-medium group-hover:translate-x-1 transition-all duration-200"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 lg:p-12 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Create Your Perfect Event?
            </h3>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Let's discuss your event and create something memorable together. 
              Our expert team is ready to organize and execute your celebration flawlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-300 hover:to-yellow-400 px-10 py-5 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center group"
              >
                Get Free Quote
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <Link
                href="/portfolio"
                className="border-2 border-white text-white hover:bg-white hover:text-accent px-8 py-4 rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center"
              >
                View Our Events
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
