import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Reviews - Rohini Decorations & Events | Testimonials | Venkateswara Nagar, Hyderabad',
  description: 'Read authentic client reviews and testimonials for Rohini Decorations & Events in Venkateswara Nagar, Vivekananda Nagar, Hyderabad-500072. See what our satisfied customers say about our event decoration and management services.',
  keywords: [
    'rohini decorations reviews',
    'event decoration reviews hyderabad',
    'event management reviews hyderabad',
    'rohini decorations testimonials',
    'event decoration company reviews hyderabad',
    'wedding decoration reviews hyderabad',
    'corporate event reviews hyderabad',
    'event decoration feedback hyderabad',
    'rohini decorations customer reviews',
    'best event decoration reviews hyderabad',
    'event management company reviews hyderabad',
    'hyderabad event decoration reviews',
    'event decoration testimonials hyderabad',
    'rohini decorations ratings',
    'event decoration company testimonials hyderabad'
  ],
  openGraph: {
    title: 'Client Reviews - Rohini Decorations & Events | Testimonials | Venkateswara Nagar, Hyderabad',
    description: 'Read authentic client reviews and testimonials for Rohini Decorations & Events in Venkateswara Nagar, Vivekananda Nagar, Hyderabad-500072. See what our satisfied customers say about our event decoration and management services.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
