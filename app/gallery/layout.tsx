import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Event Decoration Gallery - Rohini Decorations & Events | Venkateswara Nagar, Hyderabad',
  description: 'Explore our event decoration gallery showcasing wedding decorations, corporate events, and celebrations in Venkateswara Nagar, Vivekananda Nagar, Hyderabad-500072. View our portfolio of event management projects.',
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
