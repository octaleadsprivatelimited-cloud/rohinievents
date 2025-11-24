import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Reviews - Rohini Decorations & Events | Testimonials | Venkateswara Nagar, Hyderabad',
  description: 'Read authentic client reviews and testimonials for Rohini Decorations & Events in Venkateswara Nagar, Vivekananda Nagar, Hyderabad-500072. See what our satisfied customers say about our event decoration and management services.',
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
