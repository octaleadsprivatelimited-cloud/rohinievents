import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import Process from '@/components/sections/Process';
// import Stats from '@/components/sections/Stats';

export const metadata: Metadata = {
  title: 'Rohini Decorations & Events - Best Event Decoration & Management in Venkateswara Nagar, Hyderabad | Wedding & Corporate Events',
  description: 'Rohini Decorations & Events - Leading event decoration and management company in Venkateswara Nagar, Vivekananda Nagar, Hyderabad-500072. Specializing in wedding decorations, corporate events, catering services, photography, and complete event coordination in Hyderabad, Telangana.',
  keywords: [
    'event decoration hyderabad',
    'event management hyderabad',
    'wedding decoration hyderabad',
    'corporate events hyderabad',
    'event decoration venkateswara nagar',
    'event management company hyderabad',
    'catering services hyderabad',
    'event photography hyderabad',
    'wedding planning hyderabad',
    'event decorators hyderabad',
    'rohini decorations events',
    'event coordination hyderabad',
    'party decoration hyderabad',
    'event organizers hyderabad',
    'best event management hyderabad',
    'hyderabad event decoration',
    'telangana event management',
    'vivekananda nagar event decoration',
    'hyderabad wedding decorators',
    'corporate event management hyderabad'
  ],
  openGraph: {
    title: 'Rohini Decorations & Events - Best Event Decoration & Management in Venkateswara Nagar, Hyderabad | Wedding & Corporate Events',
    description: 'Leading event decoration and management company in Venkateswara Nagar, Vivekananda Nagar, Hyderabad-500072. Specializing in wedding decorations, corporate events, catering, photography, and complete event coordination in Hyderabad, Telangana.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Rohini Decorations & Events',
    url: 'https://rohinievents.com',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Rohini Decorations & Events - Professional Event Management Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rohini Decorations & Events - Event Decoration & Management in Venkateswara Nagar, Hyderabad',
    description: 'Leading event management company offering wedding planning, corporate events, catering & decoration services in Hyderabad.',
    images: ['https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&h=630&fit=crop'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://rohinidecorationsandevents.com',
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Testimonials />
    </>
  );
}
