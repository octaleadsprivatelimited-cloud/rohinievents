'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [openDropdowns, setOpenDropdowns] = useState({
    explore: false,
    services: false,
    connect: false
  });

  const toggleDropdown = (dropdown: keyof typeof openDropdowns) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [dropdown]: !prev[dropdown]
    }));
  };

  const mainLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const serviceLinks = [
    { name: 'Wedding Planning', href: '/wedding-planning' },
    { name: 'Corporate Events', href: '/corporate-events' },
    { name: 'Catering Services', href: '/catering-services' },
    { name: 'Event Decoration', href: '/event-decoration' },
    { name: 'Photography', href: '/photography-services' },
    { name: 'Entertainment', href: '/entertainment-services' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Reviews', href: '/reviews' },
  ];

  return (
    <footer className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
      <div className="container-custom py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <Link href="/" className="inline-block">
            <Image
              src="/images/logo.png"
              alt="Rohini Decorations & Events"
              width={200}
              height={70}
              className="h-16 w-auto object-contain mx-auto"
              priority
            />
          </Link>
          <p className="text-neutral-400 text-sm mt-2">Creating Memorable Events</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div>
            <button 
              onClick={() => toggleDropdown('explore')}
              className="md:hidden flex items-center justify-between w-full text-left mb-3"
            >
              <h4 className="text-lg font-semibold text-white">Explore</h4>
              {openDropdowns.explore ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
            <h4 className="hidden md:block text-lg font-semibold mb-3 text-white">Explore</h4>
            <ul className={`space-y-2 ${openDropdowns.explore ? 'block' : 'hidden md:block'}`}>
              {mainLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-neutral-300 hover:text-primary-400 transition-colors duration-200 flex items-center group text-sm font-medium">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <button 
              onClick={() => toggleDropdown('services')}
              className="md:hidden flex items-center justify-between w-full text-left mb-3"
            >
              <h4 className="text-lg font-semibold text-white">Services</h4>
              {openDropdowns.services ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
            <h4 className="hidden md:block text-lg font-semibold mb-3 text-white">Services</h4>
            <ul className={`space-y-2 ${openDropdowns.services ? 'block' : 'hidden md:block'}`}>
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-neutral-300 hover:text-primary-400 transition-colors duration-200 flex items-center group text-sm font-medium">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          <div>
            <button 
              onClick={() => toggleDropdown('connect')}
              className="md:hidden flex items-center justify-between w-full text-left mb-3"
            >
              <h4 className="text-lg font-semibold text-white">Legal</h4>
              {openDropdowns.connect ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
            <h4 className="hidden md:block text-lg font-semibold mb-3 text-white">Legal</h4>
            <div className={`${openDropdowns.connect ? 'block' : 'hidden md:block'}`}>
              <div className="space-y-1">
                {legalLinks.map((item) => (
                  <Link key={item.name} href={item.href} className="text-neutral-400 hover:text-primary-400 text-sm font-medium transition-colors duration-200 block">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-700/50 pt-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
            <p className="text-neutral-400 text-sm font-medium">
              © {currentYear} Rohini Decorations & Events. All rights reserved. 
              <span className="ml-2">
                Developed by{' '}
                <a 
                  href="https://octaleads.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-300 transition-colors duration-200 font-semibold"
                >
                  OctaLeads
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


