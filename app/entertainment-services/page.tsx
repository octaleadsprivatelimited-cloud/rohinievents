import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Music, Mic, Volume2, Users, CheckCircle, Star, Quote, Heart, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Entertainment Services in Venkateswara Nagar, Hyderabad | Professional Event Entertainment | Rohini Decorations & Events',
  description: 'Professional entertainment services in Venkateswara Nagar, Vivekananda Nagar, Hyderabad-500072. Complete entertainment solutions including DJ services, live music, sound systems, and special performances for events. Best entertainment services in Hyderabad.',
  keywords: [
    'entertainment services hyderabad',
    'dj services hyderabad',
    'event entertainment hyderabad',
    'live music hyderabad',
    'sound system hyderabad',
    'entertainment services venkateswara nagar',
    'dj for events hyderabad',
    'event dj hyderabad',
    'party entertainment hyderabad',
    'wedding entertainment hyderabad',
    'corporate entertainment hyderabad',
    'best dj services hyderabad',
    'professional dj hyderabad',
    'entertainment services vivekananda nagar',
    'event entertainment company hyderabad',
    'hyderabad entertainment services',
    'music for events hyderabad',
    'event sound system hyderabad'
  ],
  openGraph: {
    title: 'Entertainment Services in Venkateswara Nagar, Hyderabad | Professional Event Entertainment | Rohini Decorations & Events',
    description: 'Professional entertainment services in Venkateswara Nagar, Vivekananda Nagar, Hyderabad-500072. Complete entertainment solutions including DJ services, live music, and sound systems.',
    type: 'website',
    locale: 'en_IN',
  },
};

const EntertainmentServices = () => {
  const services = [
    {
      icon: Music,
      title: 'DJ Services',
      description: 'Professional DJ services with the latest music and equipment to keep your guests entertained.',
      features: ['Latest Music', 'Professional Equipment', 'MC Services', 'Dance Floor Setup']
    },
    {
      icon: Mic,
      title: 'Live Music',
      description: 'Talented musicians and singers providing live entertainment for your special occasions.',
      features: ['Live Bands', 'Solo Artists', 'Classical Music', 'Folk Performances']
    },
    {
      icon: Volume2,
      title: 'Sound Systems',
      description: 'High-quality sound systems and audio equipment for crystal clear sound at your events.',
      features: ['Professional Audio', 'Wireless Microphones', 'Sound Mixing', 'Acoustic Setup']
    },
    {
      icon: Sparkles,
      title: 'Special Performances',
      description: 'Unique and entertaining performances including dance, magic, and cultural shows.',
      features: ['Dance Performances', 'Magic Shows', 'Cultural Shows', 'Interactive Entertainment']
    },
    {
      icon: Heart,
      title: 'Wedding Entertainment',
      description: 'Specialized entertainment services for weddings including traditional and modern performances.',
      features: ['Wedding DJ', 'Live Music', 'Cultural Performances', 'Reception Entertainment']
    },
    {
      icon: Users,
      title: 'Corporate Entertainment',
      description: 'Professional entertainment for corporate events including team building and client entertainment.',
      features: ['Corporate DJ', 'Background Music', 'Team Building Activities', 'Client Entertainment']
    }
  ];

  const testimonials = [
    {
      name: 'Suresh & Kavitha',
      event: 'Wedding',
      rating: 5,
      text: 'Amazing DJ service! The music was perfect and kept everyone dancing all night. The DJ was professional and took great requests from our guests.',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop'
    },
    {
      name: 'Global Tech Solutions',
      event: 'Corporate Event',
      rating: 5,
      text: 'Professional entertainment service for our annual conference. The sound system was excellent and the live music added great energy to the event.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=400&fit=crop'
    },
    {
      name: 'Priya\'s Birthday',
      event: 'Birthday Party',
      rating: 5,
      text: 'Fantastic entertainment for my daughter\'s birthday party! The DJ was great with kids and everyone had a wonderful time dancing and celebrating.',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=400&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&h=1080&fit=crop"
            alt="Entertainment Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Entertainment <span className="text-accent">Services</span>
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
            Bring life to your events with professional entertainment services. 
            DJ services, live music, and special performances that create unforgettable experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-accent to-accent/90 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center justify-center group"
            >
              Book Entertainment
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href="https://wa.me/919032028704?text=Hi, I'm interested in your entertainment services. Can you help me with entertainment for my event?"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-accent px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              View Services
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
              Complete <span className="text-accent">Entertainment</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From DJ services to live performances, we provide comprehensive entertainment 
              solutions that keep your guests engaged and create memorable experiences.
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
              about their entertainment experience with us.
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
            Ready to Entertain Your <span className="text-accent">Guests?</span>
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Let us bring the perfect entertainment to your event. 
            Our professional entertainment team is ready to create amazing experiences for your guests.
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
              href="https://wa.me/919032028704?text=Hi, I'm interested in your entertainment services. Can you help me with entertainment for my event?"
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

export default EntertainmentServices;
