import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Event Decoration Gallery - Rohini Decorations & Events | Venkateswara Nagar, Hyderabad',
  description: 'Explore our event decoration gallery showcasing wedding decorations, corporate events, and celebrations in Venkateswara Nagar, Vivekananda Nagar, Hyderabad-500072. View our portfolio of event management projects.',
  keywords: [
    'event decoration gallery hyderabad',
    'event decoration photos hyderabad',
    'wedding decoration gallery hyderabad',
    'corporate event gallery hyderabad',
    'event decoration images hyderabad',
    'event decoration portfolio hyderabad',
    'rohini decorations gallery',
    'event decoration pictures hyderabad',
    'hyderabad event decoration gallery',
    'event decoration showcase hyderabad',
    'event management gallery hyderabad',
    'event decoration examples hyderabad',
    'best event decoration gallery hyderabad',
    'event decoration work hyderabad',
    'hyderabad event decoration photos'
  ],
  openGraph: {
    title: 'Event Decoration Gallery - Rohini Decorations & Events | Venkateswara Nagar, Hyderabad',
    description: 'Explore our event decoration gallery showcasing wedding decorations, corporate events, and celebrations in Venkateswara Nagar, Vivekananda Nagar, Hyderabad-500072.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
