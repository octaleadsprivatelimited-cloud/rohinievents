'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Priya & Rajesh Sharma',
      role: 'Wedding Couple',
      rating: 5,
      content: 'Rohini Decorations & Events made our wedding absolutely magical! From planning to execution, everything was flawless. The decorations were stunning, catering was delicious, and the coordination was perfect. Our guests are still talking about how beautiful everything was.',
      project: 'Royal Wedding Celebration'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      role: 'CEO, TechStart India',
      rating: 5,
      content: 'We needed a professional corporate event for 500+ attendees. Rohini Decorations & Events delivered beyond our expectations! The technical setup was perfect, catering was excellent, and everything ran smoothly. Our clients were impressed with the quality.',
      project: 'Annual Corporate Conference'
    },
    {
      id: 3,
      name: 'Anita Reddy',
      role: 'Restaurant Owner',
      rating: 5,
      content: 'The restaurant launch event they organized for us was absolutely perfect! The decorations captured our brand essence, the food presentation was outstanding, and the entertainment was fantastic. Our business has grown significantly since the launch.',
      project: 'Restaurant Launch Event'
    },
    {
      id: 4,
      name: 'Vikram Singh',
      role: 'Real Estate Developer',
      rating: 5,
      content: 'Working with Rohini Decorations & Events on our luxury project launch was a game-changer. Their expertise in creating memorable events helped us achieve record sales. They truly know how to create buzz and excitement for any event.',
      project: 'Product Launch Event'
    },
    {
      id: 5,
      name: 'Sneha Patel',
      role: 'Event Coordinator',
      rating: 5,
      content: 'As a fellow event professional, I can attest to the exceptional quality of work from Rohini Decorations & Events. Their innovative approach and flawless execution make them stand out in the industry. Truly professional team with creative ideas.',
      project: 'Collaborative Event Project'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonialData = testimonials[currentTestimonial];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Client Testimonials
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients
            <span className="block text-accent">Say About Rohini Decorations & Events</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say 
            about their experience working with Rohini Decorations & Events.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              {/* Quote Icon */}
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Quote className="w-8 h-8" />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="text-center mb-8">
                <p className="text-xl lg:text-2xl leading-relaxed mb-8 italic">
                  "{currentTestimonialData.content}"
                </p>
                
                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(currentTestimonialData.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Client Info */}
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="text-center">
                  <h4 className="text-xl font-bold mb-1">{currentTestimonialData.name}</h4>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-accent scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">10,000+</div>
            <div className="text-gray-600">Events Managed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">100%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">4.9</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">18+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
