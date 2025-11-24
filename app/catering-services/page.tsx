import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, UtensilsCrossed, ChefHat, Users, Clock, CheckCircle, Star, Quote, Award, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Catering Services in Venkateswara Nagar, Hyderabad | Premium Event Catering | Rohini Decorations & Events',
  description: 'Premium catering services in Venkateswara Nagar, Vivekananda Nagar, Hyderabad-500072. Professional catering for weddings, corporate events, parties, and celebrations with diverse menus and expert service. Best catering services in Hyderabad.',
  openGraph: {
    title: 'Catering Services in Venkateswara Nagar, Hyderabad | Premium Event Catering | Rohini Decorations & Events',
    description: 'Premium catering services in Venkateswara Nagar, Vivekananda Nagar, Hyderabad-500072. Professional catering for all types of events including weddings, corporate events, and celebrations.',
    type: 'website',
    locale: 'en_IN',
  },
};

const CateringServices = () => {
  const services = [
    {
      icon: Heart,
      title: 'Wedding Catering',
      description: 'Elegant wedding catering services with diverse menus and professional presentation for your special day.',
      features: ['Multi-Cuisine Menus', 'Live Counters', 'Professional Service', 'Custom Presentation']
    },
    {
      icon: Users,
      title: 'Corporate Catering',
      description: 'Professional corporate catering for meetings, conferences, and business events with timely service.',
      features: ['Business Lunch', 'Conference Meals', 'Coffee Breaks', 'Timely Delivery']
    },
    {
      icon: ChefHat,
      title: 'Party Catering',
      description: 'Fun and delicious party catering services for birthdays, anniversaries, and celebrations.',
      features: ['Finger Foods', 'Snacks & Appetizers', 'Desserts', 'Beverages']
    },
    {
      icon: Award,
      title: 'Premium Catering',
      description: 'Luxury catering services for high-end events with gourmet menus and impeccable service.',
      features: ['Gourmet Menus', 'Fine Dining', 'Wine Pairing', 'Premium Service']
    },
    {
      icon: Clock,
      title: 'Quick Service',
      description: 'Fast and efficient catering services for last-minute events and urgent requirements.',
      features: ['Quick Setup', 'Efficient Service', 'Quality Food', 'On-Time Delivery']
    },
    {
      icon: UtensilsCrossed,
      title: 'Custom Menus',
      description: 'Personalized menu planning and custom catering solutions tailored to your preferences.',
      features: ['Menu Planning', 'Dietary Requirements', 'Cultural Cuisines', 'Special Requests']
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh & Priya',
      event: 'Wedding',
      rating: 5,
      text: 'The catering service was absolutely fantastic! The food was delicious, presentation was beautiful, and service was impeccable. All our guests complimented the quality.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop'
    },
    {
      name: 'TechCorp India',
      event: 'Corporate Event',
      rating: 5,
      text: 'Professional catering service for our corporate event. The food was excellent, service was timely, and everything was well-organized. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=400&fit=crop'
    },
    {
      name: 'Anita Sharma',
      event: 'Birthday Party',
      rating: 5,
      text: 'Amazing catering for my daughter\'s birthday party! The kids loved the food and the presentation was perfect. Great value for money.',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop'
    }
  ];

  const features = [
    {
      icon: ChefHat,
      title: 'Expert Chefs',
      description: 'Our experienced chefs create delicious and innovative dishes for every occasion.'
    },
    {
      icon: Clock,
      title: 'Timely Service',
      description: 'We ensure all food is served fresh and on time, maintaining quality throughout the event.'
    },
    {
      icon: Users,
      title: 'Professional Staff',
      description: 'Well-trained and courteous staff providing excellent service to all your guests.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'We maintain the highest standards of hygiene and food quality in all our services.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/tejas catering.jpg"
            alt="Catering Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Premium <span className="text-accent">Catering</span>
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
            Delicious food, professional service, and memorable experiences. 
            We provide premium catering services for all your special occasions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-accent to-accent/90 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center justify-center group"
            >
              Book Catering
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href="https://wa.me/919000245521?text=Hi, I'm interested in your catering services. Can you help me plan the food for my event?"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-accent px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Excellence in <span className="text-accent">Every Bite</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We bring years of culinary expertise and professional service to every event, 
              ensuring your guests enjoy delicious food and exceptional hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-accent transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Complete Catering <span className="text-accent">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From intimate gatherings to grand celebrations, we provide comprehensive 
              catering services tailored to your event needs and preferences.
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
      <section className="section-padding bg-white">
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
              about their catering experience with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
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
            Ready to Book Your <span className="text-accent">Catering?</span>
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Let us provide delicious food and exceptional service for your special event. 
            Our expert catering team is ready to create a memorable dining experience.
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
              href="https://wa.me/919000245521?text=Hi, I'm interested in your catering services. Can you help me plan the food for my event?"
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

export default CateringServices;
