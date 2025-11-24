'use client';

import Image from 'next/image';
import { Star, Quote, Calendar, MapPin } from 'lucide-react';

const Reviews = () => {

  const reviews = [
    {
      id: 1,
      name: 'Priya & Rajesh Sharma',
      role: 'Wedding Couple',
      project: 'Royal Wedding Celebration',
      rating: 5,
      date: '2024-01-15',
      category: 'wedding',
      content: 'Rohini Decorations & Events made our wedding absolutely magical! From planning to execution, everything was flawless. The decorations were stunning, catering was delicious, and the coordination was perfect. Our guests are still talking about how beautiful everything was. Thank you for making our special day unforgettable!',
      verified: true,
      helpful: 24
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      role: 'CEO, TechStart India',
      project: 'Annual Corporate Conference',
      rating: 5,
      date: '2024-01-10',
      category: 'corporate',
      content: 'We needed a professional corporate event for 500+ attendees. Rohini Decorations & Events delivered beyond our expectations! The technical setup was perfect, catering was excellent, and everything ran smoothly. Our clients were impressed with the quality of the event. Highly recommend for corporate events!',
      verified: true,
      helpful: 18
    },
    {
      id: 3,
      name: 'Anita Reddy',
      role: 'Restaurant Owner',
      project: 'Restaurant Launch Event',
      rating: 5,
      date: '2024-01-05',
      category: 'corporate',
      content: 'The restaurant launch event they organized for us was absolutely perfect! The decorations captured our brand essence, the food presentation was outstanding, and the entertainment was fantastic. Our business has grown significantly since the launch. Excellent event management!',
      verified: true,
      helpful: 22
    },
    {
      id: 4,
      name: 'Vikram Singh',
      role: 'Real Estate Developer',
      project: 'Product Launch Event',
      rating: 5,
      date: '2023-12-28',
      category: 'corporate',
      content: 'Working with Rohini Decorations & Events on our luxury project launch was a game-changer. Their expertise in creating memorable events helped us achieve record sales. The attention to detail and quality of service is unmatched. They truly know how to create buzz and excitement!',
      verified: true,
      helpful: 30
    },
    {
      id: 5,
      name: 'Sneha Patel',
      role: 'Event Coordinator',
      project: 'Collaborative Event Project',
      rating: 5,
      date: '2023-12-20',
      category: 'party',
      content: 'As a fellow event professional, I can attest to the exceptional quality of work from Rohini Decorations & Events. Their innovative approach and flawless execution make them stand out in the industry. Truly professional team with creative ideas and excellent coordination skills.',
      verified: true,
      helpful: 16
    },
    {
      id: 6,
      name: 'Arjun Mehta',
      role: 'Birthday Celebrant',
      project: '50th Birthday Celebration',
      rating: 5,
      date: '2023-12-15',
      category: 'party',
      content: 'Rohini Decorations & Events created an unforgettable 50th birthday celebration for me! Every detail was carefully planned, from the decorations to the entertainment. The DJ was amazing, food was delicious, and the coordination was perfect. The party was completed on time and within budget. Absolutely fantastic work!',
      verified: true,
      helpful: 28
    }
  ];



  const stats = [
    { label: 'Total Reviews', value: '127' },
    { label: 'Average Rating', value: '4.9/5' },
    { label: '5-Star Reviews', value: '100%' },
    { label: 'Would Recommend', value: '100%' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop"
            alt="Client reviews"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Client <span className="text-accent">Reviews</span>
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
            Hear what our satisfied clients have to say about their experience with us.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* All Reviews */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              All Client Reviews
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Browse through all our client reviews and see what makes us the preferred choice.
            </p>
          </div>


          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-gray-900">{review.name}</h3>
                    <p className="text-sm text-gray-600">{review.role}</p>
                  </div>
                  {review.verified && (
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                      Verified
                    </span>
                  )}
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">{review.rating}/5</span>
                </div>

                {/* Review Content */}
                <p className="text-gray-700 mb-4 leading-relaxed line-clamp-4">
                  {review.content}
                </p>

                {/* Project Info */}
                <div className="border-t pt-4">
                  <div className="flex items-center justify-end text-sm text-gray-500 mb-2">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{new Date(review.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-accent mb-2">{review.project}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {review.helpful} people found this helpful
                    </span>
                    <button className="text-sm text-accent hover:text-accent/80 font-medium">
                      Helpful
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Join Our Happy Clients?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Let's create something extraordinary together. Our track record speaks for itself, 
            and we're ready to add your project to our success stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-accent hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center group text-lg"
            >
              Start Your Project
            </a>
            
            <a
              href="/portfolio"
              className="border-2 border-white text-white hover:bg-white hover:text-accent px-8 py-4 rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center text-lg"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
