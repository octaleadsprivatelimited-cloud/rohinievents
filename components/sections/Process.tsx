import { ArrowRight, MessageCircle, Palette, Ruler, Hammer, CheckCircle, Star } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'We start with a detailed discussion about your event vision, requirements, and budget to understand your celebration goals.',
      icon: MessageCircle,
      details: [
        'Event scope discussion',
        'Budget planning',
        'Timeline establishment',
        'Theme and style preferences'
      ]
    },
    {
      number: '02',
      title: 'Event Planning',
      description: 'Our team creates comprehensive event plans and concepts to bring your celebration vision to life.',
      icon: Palette,
      details: [
        'Event concept creation',
        'Theme and decoration planning',
        'Vendor recommendations',
        'Event timeline visualization'
      ]
    },
    {
      number: '03',
      title: 'Coordination Setup',
      description: 'We develop detailed event coordination plans optimized for smooth execution and guest experience.',
      icon: Ruler,
      details: [
        'Detailed event layouts',
        'Vendor coordination',
        'Logistics optimization',
        'Contingency planning'
      ]
    },
    {
      number: '04',
      title: 'Event Execution',
      description: 'Our experienced team manages the entire event execution with real-time coordination and updates.',
      icon: Hammer,
      details: [
        'Event day management',
        'Vendor coordination',
        'Quality control',
        'Guest experience monitoring'
      ]
    }
  ];

  return (
    <section className="section-padding bg-gray-50 hidden md:block">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Our Process
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How We Work
            <span className="block text-accent">Step by Step</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our proven 4-step process ensures your event is executed flawlessly, 
            within budget, and exceeds your expectations with memorable experiences.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${isEven ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div className="flex items-center mb-4">
                    <span className="text-6xl font-bold text-accent/20 mr-4">
                      {step.number}
                    </span>
                    <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual Element */}
                <div className="flex-1">
                  <div className="relative">
                    <div className="w-full h-64 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center">
                      <div className="text-center text-white">
                        <Icon className="w-16 h-16 mx-auto mb-4 opacity-80" />
                        <h4 className="text-xl font-semibold">Step {step.number}</h4>
                        <p className="text-white/80">{step.title}</p>
                      </div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Rohini Decorations & Events?
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine creativity, expertise, and professional coordination to deliver 
              exceptional events that exceed your expectations and create lasting memories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Award-Winning Events</h4>
              <p className="text-gray-600">
                Recognized for excellence in event management with multiple industry awards and client satisfaction.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Quality Guarantee</h4>
              <p className="text-gray-600">
                We stand behind our event management services with a comprehensive quality guarantee and 100% client satisfaction.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Timely Execution</h4>
              <p className="text-gray-600">
                We execute events on schedule with flawless coordination without compromising on quality and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
