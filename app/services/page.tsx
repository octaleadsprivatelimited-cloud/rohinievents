import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Heart, Building2, Utensils, Sparkles, Camera, Music, CheckCircle, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Event Decoration & Management Services in Venkateswara Nagar, Hyderabad | Complete Event Solutions | Rohini Decorations & Events',
  description: 'Rohini Decorations & Events offers comprehensive event decoration and management services in Venkateswara Nagar, Vivekananda Nagar, Hyderabad-500072. Wedding decorations, corporate events, catering, photography, entertainment, DJ services, and complete event coordination. Expert event decorators for memorable celebrations.',
  openGraph: {
    title: 'Event Decoration & Management Services in Venkateswara Nagar, Hyderabad | Complete Event Solutions | Rohini Decorations & Events',
    description: 'Professional event decoration and management services in Venkateswara Nagar, Vivekananda Nagar, Hyderabad-500072. Wedding decorations, corporate events, catering, decoration, photography & entertainment. Expert coordination for perfect celebrations.',
    type: 'website',
    url: 'https://rohinievents.com/services',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Rohini Decorations & Events - Event Decoration & Management Services in Venkateswara Nagar, Hyderabad',
      },
    ],
  },
  alternates: {
    canonical: 'https://rohinievents.com/services',
  },
};

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Wedding Planning',
      description: 'Complete wedding solutions from engagement to reception with flawless coordination and unforgettable memories.',
      features: [
        'Complete wedding planning and coordination',
        'Venue selection and booking',
        'Vendor management and coordination',
        'Timeline and schedule management',
        'Wedding day coordination',
        'Guest management and RSVP handling'
      ],
      image: '/images/gallery-1.jpeg',
      link: '/wedding-planning',
      duration: '6-12 months'
    },
    {
      icon: Building2,
      title: 'Corporate Events',
      description: 'Professional business events that impress clients and motivate teams with expert event management.',
      features: [
        'Conference and seminar planning',
        'Product launch events',
        'Annual meetings and retreats',
        'Team building activities',
        'Trade show coordination',
        'Award ceremonies and galas'
      ],
      image: '/images/gallery-2.jpeg',
      link: '/corporate-events',
      duration: '2-8 weeks'
    },
    {
      icon: Utensils,
      title: 'Catering Services',
      description: 'Premium catering solutions with diverse menus and professional service for all types of events.',
      features: [
        'Custom menu planning and design',
        'Multi-cuisine catering options',
        'Professional chef services',
        'Event-specific food arrangements',
        'Dietary requirement accommodation',
        'Complete setup and cleanup'
      ],
      image: '/images/gallery-3.jpeg',
      link: '/catering-services',
      duration: '1-3 days'
    },
    {
      icon: Sparkles,
      title: 'Event Decoration',
      description: 'Stunning event decorations that create the perfect ambiance and atmosphere for your celebration.',
      features: [
        'Theme-based decoration design',
        'Floral arrangements and centerpieces',
        'Lighting design and setup',
        'Stage and backdrop decoration',
        'Table settings and place cards',
        'Custom prop and furniture rental'
      ],
      image: '/images/gallery-4.jpeg',
      link: '/event-decoration',
      duration: '1-2 days'
    },
    {
      icon: Camera,
      title: 'Photography Services',
      description: 'Professional event photography to capture every precious moment with artistic excellence.',
      features: [
        'Professional event photography',
        'Candid and posed shots',
        'High-quality equipment and lighting',
        'Photo editing and retouching',
        'Digital gallery delivery',
        'Print and album services'
      ],
      image: '/images/gallery-5.jpeg',
      link: '/photography-services',
      duration: 'Event day'
    },
    {
      icon: Music,
      title: 'Entertainment Services',
      description: 'DJ services and entertainment solutions to keep your guests engaged and create memorable experiences.',
      features: [
        'Professional DJ services',
        'Sound system and lighting setup',
        'Music playlist customization',
        'Live performance coordination',
        'Dance floor management',
        'Entertainment booking and coordination'
      ],
      image: '/images/gallery-6.jpeg',
      link: '/entertainment-services',
      duration: 'Event day'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We discuss your event vision, requirements, and budget to understand your celebration goals.'
    },
    {
      step: '02',
      title: 'Event Planning',
      description: 'Our team creates detailed event concepts, themes, and comprehensive planning strategies.'
    },
    {
      step: '03',
      title: 'Coordination Setup',
      description: 'We develop timelines, coordinate vendors, and handle all event logistics and details.'
    },
    {
      step: '04',
      title: 'Event Execution',
      description: 'Our experienced team manages the entire event day with flawless coordination and execution.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery-7.jpeg"
            alt="Our event management services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Our <span className="text-accent">Services</span>
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
            Complete event management solutions tailored to your unique celebration needs and vision.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              What We Offer
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Complete Event <span className="text-accent">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From concept to completion, we offer a full range of event management services 
              to transform your celebration into something extraordinary.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden card-hover"
                >
                  <div className="relative h-64 overflow-hidden">
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
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-accent transition-colors duration-200">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-sm text-gray-500">
                        <span className="font-medium">Duration:</span> {service.duration}
                      </div>
                      <div className="flex items-center text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-2 text-sm text-gray-600">5.0</span>
                      </div>
                    </div>
                    
                    <Link
                      href={service.link}
                      className="btn-primary w-full text-center inline-flex items-center justify-center group"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50 hidden md:block">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              Our Process
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How We Work <span className="text-accent">Step by Step</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our proven process ensures your event is executed flawlessly, 
              within budget, and exceeds your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-gray-300 hidden lg:block"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                Why Choose Us
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Experience the <span className="text-accent">Elite Difference</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With over 18 years of experience and 10,000+ successful events, 
                we bring unmatched expertise and attention to detail to every celebration.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Award-Winning Events</h3>
                    <p className="text-gray-600">Recognized for excellence with 15+ industry awards and certifications.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Guarantee</h3>
                    <p className="text-gray-600">We stand behind our work with comprehensive warranties and ongoing support.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Timely Execution</h3>
                    <p className="text-gray-600">We execute events on schedule without compromising on quality or attention to detail.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/gallery-8.jpeg"
                alt="Why choose us"
                width={600}
                height={700}
                className="rounded-2xl shadow-2xl object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container-custom text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Let's discuss your event and see how our services can transform your celebration. 
            We offer free consultations to help you get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-300 hover:to-yellow-400 px-10 py-5 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center group"
            >
              Get Free Consultation
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            
            <Link
              href="/portfolio"
              className="border-2 border-white text-white hover:bg-white hover:text-accent px-8 py-4 rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center text-lg"
            >
              View Our Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
