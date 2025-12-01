import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Building2, Presentation, Users, Calendar, CheckCircle, Star, Quote, Target, Award, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Corporate Events Decoration & Management in Venkateswara Nagar, Hyderabad | Business Event Planning | Rohini Decorations & Events',
  description: 'Rohini Decorations & Events provides professional corporate event decoration and management services in Venkateswara Nagar, Vivekananda Nagar, Hyderabad-500072. Expert business event planning including conferences, seminars, product launches, team building, corporate gala, meetings, and corporate celebrations. Best corporate event decorators in Hyderabad.',
  keywords: [
    'corporate events hyderabad',
    'corporate event decoration hyderabad',
    'corporate event management hyderabad',
    'business event planning hyderabad',
    'corporate event decorators hyderabad',
    'corporate events venkateswara nagar',
    'conference decoration hyderabad',
    'seminar decoration hyderabad',
    'product launch decoration hyderabad',
    'corporate event services hyderabad',
    'corporate event planning hyderabad',
    'business event decoration hyderabad',
    'corporate gala decoration hyderabad',
    'corporate meeting decoration hyderabad',
    'hyderabad corporate events',
    'corporate event organizers hyderabad',
    'professional corporate events hyderabad',
    'corporate event decoration company hyderabad'
  ],
  openGraph: {
    title: 'Corporate Events Decoration & Management in Venkateswara Nagar, Hyderabad | Business Event Planning | Rohini Decorations & Events',
    description: 'Professional corporate event decoration and management services in Venkateswara Nagar, Vivekananda Nagar, Hyderabad-500072. Complete business event solutions including conferences, seminars, product launches, and corporate celebrations.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://rohinievents.com/corporate-events',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Corporate Events Decoration & Management in Venkateswara Nagar, Hyderabad - Rohini Decorations & Events',
      },
    ],
  },
  alternates: {
    canonical: 'https://rohinievents.com/corporate-events',
  },
};

const CorporateEvents = () => {
  const services = [
    {
      icon: Presentation,
      title: 'Conferences & Seminars',
      description: 'Professional conference and seminar management with complete technical setup and coordination.',
      features: ['Technical Setup', 'Speaker Management', 'Registration', 'Event Coordination']
    },
    {
      icon: Target,
      title: 'Product Launch Events',
      description: 'Stunning product launch events that create buzz and excitement for your new products.',
      features: ['Launch Strategy', 'Media Coverage', 'Demo Setup', 'Marketing Support']
    },
    {
      icon: Users,
      title: 'Team Building Events',
      description: 'Engaging team building activities and events that boost morale and improve team dynamics.',
      features: ['Activity Planning', 'Venue Selection', 'Team Games', 'Catering Services']
    },
    {
      icon: Award,
      title: 'Awards & Recognition',
      description: 'Prestigious awards ceremonies and recognition events that celebrate achievements and excellence.',
      features: ['Ceremony Planning', 'Award Design', 'Stage Setup', 'Entertainment']
    },
    {
      icon: Calendar,
      title: 'Corporate Meetings',
      description: 'Professional corporate meeting management with complete setup and hospitality services.',
      features: ['Meeting Setup', 'AV Equipment', 'Catering', 'Documentation']
    },
    {
      icon: Building2,
      title: 'Corporate Galas',
      description: 'Elegant corporate galas and celebrations that impress clients and stakeholders.',
      features: ['Venue Decoration', 'Entertainment', 'Fine Dining', 'Photography']
    }
  ];

  const testimonials = [
    {
      name: 'Tech Solutions India',
      event: 'Annual Conference',
      rating: 5,
      text: 'Rohini Decorations & Events organized our annual tech conference flawlessly. The event was well-coordinated, professional, and exceeded our expectations. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=400&fit=crop'
    },
    {
      name: 'Global Finance Corp',
      event: 'Product Launch',
      rating: 5,
      text: 'Outstanding service for our product launch event. The team was professional, creative, and delivered a memorable event that impressed all our stakeholders.',
      image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=400&h=400&fit=crop'
    },
    {
      name: 'Innovation Labs',
      event: 'Team Building',
      rating: 5,
      text: 'Amazing team building event! Our employees loved the activities and the overall experience. Great planning and execution by Rohini Decorations & Events.',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop'
    }
  ];

  const features = [
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'We ensure all events are delivered on time with meticulous planning and execution.'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Every detail is carefully planned and executed to meet the highest quality standards.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our experienced team handles everything from planning to execution with professionalism.'
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Successfully organized 10,000+ corporate events with 100% client satisfaction.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920&h=1080&fit=crop"
            alt="Corporate Events Management"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Corporate <span className="text-accent">Events</span>
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
            Professional corporate event management for conferences, seminars, product launches, 
            and business celebrations. We deliver excellence in every event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-accent to-accent/90 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center justify-center group"
            >
              Plan Your Event
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href="https://wa.me/919032028704?text=Hi, I'm interested in your corporate event management services. Can you help me plan my business event?"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-accent px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              Get Free Quote
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
              Professional <span className="text-accent">Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We bring years of experience and professional expertise to every corporate event, 
              ensuring flawless execution and outstanding results.
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
              Complete Corporate <span className="text-accent">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From intimate board meetings to large-scale conferences, we provide 
              comprehensive corporate event management services tailored to your needs.
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
              Don't just take our word for it. Here's what our corporate clients have to say 
              about their event management experience with us.
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
            Ready to Plan Your <span className="text-accent">Corporate Event?</span>
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Let us help you create a professional and memorable corporate event. 
            Our expert team is ready to deliver excellence in every aspect of your event.
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
              href="https://wa.me/919032028704?text=Hi, I'm interested in your corporate event management services. Can you help me plan my business event?"
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

export default CorporateEvents;
