import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, Flower2, Lightbulb, Palette, CheckCircle, Star, Quote, Heart, Camera } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Event Decoration Services in Venkateswara Nagar, Hyderabad | Beautiful Event Decorations | Rohini Decorations & Events',
  description: 'Professional event decoration services in Venkateswara Nagar, Vivekananda Nagar, Hyderabad-500072. Stunning decorations for weddings, corporate events, parties, and celebrations with floral arrangements and theme decorations. Best event decorators in Hyderabad.',
  keywords: [
    'event decoration hyderabad',
    'event decoration services hyderabad',
    'event decorators hyderabad',
    'event decoration venkateswara nagar',
    'wedding decoration hyderabad',
    'corporate event decoration hyderabad',
    'party decoration hyderabad',
    'floral decoration hyderabad',
    'theme decoration hyderabad',
    'event decoration company hyderabad',
    'best event decorators hyderabad',
    'professional event decoration hyderabad',
    'event decoration vivekananda nagar',
    'hyderabad event decoration',
    'event decoration telangana',
    'lighting decoration hyderabad',
    'stage decoration hyderabad',
    'venue decoration hyderabad'
  ],
  openGraph: {
    title: 'Event Decoration Services in Venkateswara Nagar, Hyderabad | Beautiful Event Decorations | Rohini Decorations & Events',
    description: 'Professional event decoration services in Venkateswara Nagar, Vivekananda Nagar, Hyderabad-500072. Beautiful decorations for all types of events including weddings, corporate events, and celebrations.',
    type: 'website',
    locale: 'en_IN',
  },
};

const EventDecoration = () => {
  const services = [
    {
      icon: Flower2,
      title: 'Floral Decorations',
      description: 'Beautiful floral arrangements and decorations that add elegance and freshness to your event.',
      features: ['Fresh Flowers', 'Floral Arrangements', 'Centerpieces', 'Bouquets']
    },
    {
      icon: Lightbulb,
      title: 'Lighting Design',
      description: 'Professional lighting setup that creates the perfect ambiance and mood for your celebration.',
      features: ['LED Lighting', 'Spotlights', 'Ambient Lighting', 'Color Effects']
    },
    {
      icon: Palette,
      title: 'Theme Decoration',
      description: 'Custom theme-based decorations that bring your vision to life with creative designs.',
      features: ['Custom Themes', 'Color Schemes', 'Creative Design', 'Brand Integration']
    },
    {
      icon: Heart,
      title: 'Wedding Decoration',
      description: 'Romantic and elegant wedding decorations that make your special day truly magical.',
      features: ['Mandap Decoration', 'Stage Design', 'Entrance Decor', 'Reception Setup']
    },
    {
      icon: Camera,
      title: 'Photo Booth Setup',
      description: 'Fun and interactive photo booth decorations with props and backdrops for memorable moments.',
      features: ['Custom Backdrops', 'Props & Accessories', 'Lighting Setup', 'Photo Prints']
    },
    {
      icon: Sparkles,
      title: 'Special Effects',
      description: 'Magical special effects and decorative elements that create wow moments at your event.',
      features: ['Confetti', 'Balloon Drops', 'Fog Effects', 'Special Props']
    }
  ];

  const testimonials = [
    {
      name: 'Suresh & Kavitha',
      event: 'Wedding',
      rating: 5,
      text: 'Absolutely stunning decorations! The floral arrangements were beautiful and the lighting created a magical atmosphere. Our wedding looked like a fairy tale.',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=400&fit=crop'
    },
    {
      name: 'Global Tech Solutions',
      event: 'Corporate Event',
      rating: 5,
      text: 'Professional decoration service for our product launch. The theme was perfectly executed and created the right atmosphere for our event.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=400&fit=crop'
    },
    {
      name: 'Priya\'s Birthday Party',
      event: 'Birthday Celebration',
      rating: 5,
      text: 'Amazing decorations for my daughter\'s birthday party! The kids loved the photo booth and all the colorful decorations. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&h=1080&fit=crop"
            alt="Event Decoration Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Event <span className="text-accent">Decoration</span>
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
            Transform your venue into a magical space with our professional decoration services. 
            Beautiful designs that create unforgettable experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-accent to-accent/90 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center justify-center group"
            >
              Book Decoration
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href="https://wa.me/919000245521?text=Hi, I'm interested in your event decoration services. Can you help me decorate my event?"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-accent px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              View Gallery
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
              Beautiful <span className="text-accent">Decorations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From elegant floral arrangements to stunning lighting designs, we create 
              beautiful decorations that make your event truly special and memorable.
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
              about their decoration experience with us.
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
            Ready to Decorate Your <span className="text-accent">Event?</span>
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Let us transform your venue into a beautiful and magical space. 
            Our expert decoration team is ready to create stunning designs for your event.
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
              href="https://wa.me/919000245521?text=Hi, I'm interested in your event decoration services. Can you help me decorate my event?"
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

export default EventDecoration;
