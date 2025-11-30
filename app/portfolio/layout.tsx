import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio - Our Best Event Decoration Projects | Rohini Decorations & Events | Venkateswara Nagar, Hyderabad',
  description: 'View our portfolio of award-winning event decoration projects in Venkateswara Nagar, Vivekananda Nagar, Hyderabad-500072. Wedding decorations, corporate events, celebrations, and complete event management. See how we create memorable events.',
  keywords: [
    'event decoration portfolio hyderabad',
    'event management portfolio hyderabad',
    'wedding decoration portfolio hyderabad',
    'corporate event portfolio hyderabad',
    'event decoration projects hyderabad',
    'rohini decorations portfolio',
    'event decoration work hyderabad',
    'best event decoration portfolio hyderabad',
    'event decoration case studies hyderabad',
    'hyderabad event decoration portfolio',
    'event decoration examples hyderabad',
    'event management projects hyderabad',
    'award winning event decoration hyderabad',
    'event decoration showcase hyderabad',
    'professional event decoration portfolio hyderabad'
  ],
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
