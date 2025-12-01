import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Camera, Video, Edit3, Album, CheckCircle, Star, Quote, Heart, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Photography Services in Venkateswara Nagar, Hyderabad | Professional Event Photography | Rohini Decorations & Events',
  description: 'Professional photography and videography services in Venkateswara Nagar, Vivekananda Nagar, Hyderabad-500072. Expert event photography for weddings, corporate events, parties, and celebrations with high-quality results. Best event photographers in Hyderabad.',
  keywords: [
    'event photography hyderabad',
    'photography services hyderabad',
    'wedding photography hyderabad',
    'corporate photography hyderabad',
    'event videography hyderabad',
    'photography services venkateswara nagar',
    'professional photographers hyderabad',
    'event photographers hyderabad',
    'wedding photographers hyderabad',
    'best photographers hyderabad',
    'photography services vivekananda nagar',
    'event photography company hyderabad',
    'hyderabad photography services',
    'photography for events hyderabad',
    'candid photography hyderabad',
    'professional videography hyderabad',
    'event photography telangana',
    'photo video services hyderabad'
  ],
  openGraph: {
    title: 'Photography Services in Venkateswara Nagar, Hyderabad | Professional Event Photography | Rohini Decorations & Events',
    description: 'Professional photography and videography services in Venkateswara Nagar, Vivekananda Nagar, Hyderabad-500072. Expert event photography for weddings, corporate events, and celebrations.',
    type: 'website',
    locale: 'en_IN',
  },
};

const PhotographyServices = () => {
  const services = [
    {
      icon: Heart,
      title: 'Wedding Photography',
      description: 'Beautiful wedding photography that captures all the special moments and emotions of your big day.',
      features: ['Pre-Wedding Shoots', 'Ceremony Photography', 'Reception Coverage', 'Candid Moments']
    },
    {
      icon: Users,
      title: 'Corporate Photography',
      description: 'Professional corporate photography for meetings, conferences, product launches, and business events.',
      features: ['Event Coverage', 'Group Photos', 'Product Photography', 'Documentation']
    },
    {
      icon: Video,
      title: 'Video Production',
      description: 'High-quality video production services including event videos, promotional content, and documentaries.',
      features: ['Event Videos', 'Promotional Videos', 'Live Streaming', 'Video Editing']
    },
    {
      icon: Edit3,
      title: 'Photo Editing',
      description: 'Professional photo editing and retouching services to enhance and perfect your images.',
      features: ['Color Correction', 'Retouching', 'Album Design', 'Digital Delivery']
    },
    {
      icon: Album,
      title: 'Album Design',
      description: 'Beautiful photo album design and printing services to preserve your precious memories.',
      features: ['Custom Albums', 'Premium Printing', 'Album Design', 'Delivery']
    },
    {
      icon: Camera,
      title: 'Event Coverage',
      description: 'Complete event coverage for parties, celebrations, and special occasions with professional photography.',
      features: ['Full Event Coverage', 'Candid Photography', 'Group Photos', 'Quick Delivery']
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh & Priya',
      event: 'Wedding',
      rating: 5,
      text: 'Amazing photography service! The photos are absolutely stunning and captured all our special moments beautifully. The photographer was professional and made us feel comfortable.',
      image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=400&h=400&fit=crop'
    },
    {
      name: 'TechCorp India',
      event: 'Corporate Event',
      rating: 5,
      text: 'Professional photography service for our product launch. The photos were excellent quality and captured the event perfectly. Great service and timely delivery.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=400&fit=crop'
    },
    {
      name: 'Anita\'s Birthday',
      event: 'Birthday Party',
      rating: 5,
      text: 'Wonderful photography for my daughter\'s birthday party! The photos are beautiful and captured all the fun moments. Highly recommended for any event!',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=1920&h=1080&fit=crop"
            alt="Photography Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Photography <span className="text-accent">Services</span>
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
            Capture your precious moments with professional photography and videography services. 
            High-quality images that preserve memories for a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-accent to-accent/90 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center justify-center group"
            >
              Book Photography
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href="https://wa.me/919032028704?text=Hi, I'm interested in your photography services. Can you help me with my event photography?"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-accent px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Professional <span className="text-accent">Photography</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From weddings to corporate events, we provide comprehensive photography and videography 
              services with professional equipment and expert skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                  <div className="p-8">
                    <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-accent transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              Client Reviews
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Our <span className="text-accent">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our clients have to say 
              about their photography experience with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.event}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <Quote className="w-6 h-6 text-accent mb-4" />
                <p className="text-gray-600 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container-custom text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Capture Your <span className="text-accent">Memories?</span>
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Let us capture your precious moments with professional photography and videography. 
            Our expert team is ready to create beautiful memories that last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-accent to-accent/90 text-black px-10 py-5 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center group"
            >
              Book Now
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href="https://wa.me/919032028704?text=Hi, I'm interested in your photography services. Can you help me with my event photography?"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-accent px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhotographyServices;
