import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Heart, Calendar, Users, Camera, UtensilsCrossed, Music, Sparkles, CheckCircle, Star, Quote } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Wedding Decoration & Planning Services in Venkateswara Nagar, Hyderabad | Complete Wedding Coordination | Rohini Decorations & Events',
  description: 'Rohini Decorations & Events offers comprehensive wedding decoration and planning services in Venkateswara Nagar, Vivekananda Nagar, Hyderabad-500072. Expert wedding coordination from engagement to reception including venue selection, catering, decoration, photography, entertainment, and complete wedding management. Best wedding decorators in Hyderabad.',
  openGraph: {
    title: 'Wedding Decoration & Planning Services in Venkateswara Nagar, Hyderabad | Complete Wedding Coordination | Rohini Decorations & Events',
    description: 'Professional wedding decoration and planning services in Venkateswara Nagar, Vivekananda Nagar, Hyderabad-500072. Complete wedding coordination from engagement to reception with expert wedding decorators and coordinators.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://rohinievents.com/wedding-planning',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Wedding Decoration & Planning Services in Venkateswara Nagar, Hyderabad - Rohini Decorations & Events',
      },
    ],
  },
  alternates: {
    canonical: 'https://rohinievents.com/wedding-planning',
  },
};

const WeddingPlanning = () => {
  const services = [
    {
      icon: Calendar,
      title: 'Wedding Timeline',
      description: 'Complete timeline planning from engagement to reception with detailed scheduling and coordination.',
      features: ['Event Timeline', 'Vendor Coordination', 'Day-of Management', 'Timeline Execution']
    },
    {
      icon: Users,
      title: 'Guest Management',
      description: 'Professional guest management including invitations, RSVPs, seating arrangements, and hospitality.',
      features: ['Invitation Design', 'RSVP Management', 'Seating Arrangements', 'Guest Hospitality']
    },
    {
      icon: Camera,
      title: 'Photography & Videography',
      description: 'Complete photography and videography services to capture your special moments beautifully.',
      features: ['Wedding Photography', 'Video Production', 'Photo Editing', 'Album Design']
    },
    {
      icon: UtensilsCrossed,
      title: 'Wedding Catering',
      description: 'Premium catering services with diverse menus and professional service for your wedding celebration.',
      features: ['Custom Menus', 'Professional Staff', 'Equipment Setup', 'Cleanup Services']
    },
    {
      icon: Sparkles,
      title: 'Wedding Decoration',
      description: 'Stunning wedding decorations and floral arrangements that create the perfect romantic ambiance.',
      features: ['Floral Design', 'Theme Decoration', 'Lighting Setup', 'Stage Design']
    },
    {
      icon: Music,
      title: 'Wedding Entertainment',
      description: 'Complete entertainment solutions including DJ services, live music, and special performances.',
      features: ['DJ Services', 'Live Music', 'Sound Systems', 'Special Performances']
    }
  ];

  const testimonials = [
    {
      name: 'Priya & Rajesh',
      event: 'Wedding',
      rating: 5,
      text: 'Rohini Decorations & Events made our wedding absolutely perfect! From planning to execution, everything was flawless. Our guests are still talking about how beautiful everything was.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop'
    },
    {
      name: 'Anita & Suresh',
      event: 'Wedding',
      rating: 5,
      text: 'Professional, creative, and incredibly organized. Rohini Decorations & Events turned our dream wedding into reality. Highly recommend their services!',
      image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=400&h=400&fit=crop'
    },
    {
      name: 'Kavitha & Ravi',
      event: 'Wedding',
      rating: 5,
      text: 'Outstanding service from start to finish. The team was always available, professional, and made our special day truly memorable.',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=1080&fit=crop"
            alt="Wedding Planning Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Wedding <span className="text-accent">Planning</span>
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
            Complete wedding coordination from engagement to reception. 
            We make your special day absolutely perfect with expert planning and flawless execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-accent to-accent/90 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center justify-center group"
            >
              Plan Your Wedding
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href="https://wa.me/919000245521?text=Hi, I'm interested in your wedding planning services. Can you help me plan my special day?"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-accent px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              Get Free Quote
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
              Complete Wedding <span className="text-accent">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From intimate ceremonies to grand celebrations, we handle every detail 
              of your special day with expert coordination and flawless execution.
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
              What Our <span className="text-accent">Couples Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our couples have to say 
              about their wedding planning experience with us.
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
                    <div className="flex items-center">
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
            Ready to Plan Your <span className="text-accent">Dream Wedding?</span>
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Let us help you create the perfect wedding day. Our expert team is ready 
            to turn your vision into reality with professional planning and flawless execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-accent to-accent/90 text-black px-10 py-5 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center group"
            >
              Start Planning Now
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href="https://wa.me/919000245521?text=Hi, I'm interested in your wedding planning services. Can you help me plan my special day?"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-accent px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeddingPlanning;
