import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Rohini Decorations & Events - Event Decoration Company in Venkateswara Nagar, Hyderabad | Free Consultation',
  description: 'Contact Rohini Decorations & Events in Venkateswara Nagar, Vivekananda Nagar, Hyderabad-500072. Get free consultation for wedding decorations, corporate events, catering, decoration & photography services. Call +91 9032028704 or +91 9603210704.',
  keywords: [
    'contact rohini decorations events',
    'event decoration contact hyderabad',
    'event management contact hyderabad',
    'rohini decorations phone number',
    'event decoration company contact',
    'hyderabad event management contact',
    'event decoration consultation hyderabad',
    'contact event decorators hyderabad',
    'rohini decorations address',
    'event management company contact hyderabad',
    'free event consultation hyderabad',
    'event decoration quote hyderabad',
    'hyderabad event organizers contact',
    'rohini decorations email',
    'event decoration venkateswara nagar contact'
  ],
  openGraph: {
    title: 'Contact Rohini Decorations & Events - Event Decoration Company in Venkateswara Nagar, Hyderabad | Free Consultation',
    description: 'Get in touch with Rohini Decorations & Events in Venkateswara Nagar, Vivekananda Nagar, Hyderabad-500072. Free consultation for wedding decorations, corporate events, catering, decoration & photography. Expert event coordination.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://rohinievents.com/contact',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Contact Rohini Decorations & Events - Event Management Company Hyderabad',
      },
    ],
  },
  alternates: {
    canonical: 'https://rohinievents.com/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
