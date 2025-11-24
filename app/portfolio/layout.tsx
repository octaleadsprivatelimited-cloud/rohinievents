import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio - Our Best Event Decoration Projects | Rohini Decorations & Events | Venkateswara Nagar, Hyderabad',
  description: 'View our portfolio of award-winning event decoration projects in Venkateswara Nagar, Vivekananda Nagar, Hyderabad-500072. Wedding decorations, corporate events, celebrations, and complete event management. See how we create memorable events.',
  openGraph: {
    title: 'Portfolio - Our Best Event Decoration Projects | Rohini Decorations & Events | Venkateswara Nagar, Hyderabad',
    description: 'View our portfolio of award-winning event decoration projects in Venkateswara Nagar, Vivekananda Nagar, Hyderabad-500072. Wedding decorations, corporate events, and celebrations.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
