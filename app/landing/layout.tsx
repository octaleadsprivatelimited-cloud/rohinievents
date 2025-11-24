import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Your Dream Event Organized - Free Consultation | Rohini Decorations & Events | Venkateswara Nagar, Hyderabad',
  description: 'Transform your events with professional event decoration and management services in Venkateswara Nagar, Vivekananda Nagar, Hyderabad-500072. Get free consultation for wedding decorations, corporate events, catering, and complete event coordination. Book your free consultation today!',
  openGraph: {
    title: 'Get Your Dream Event Organized - Free Consultation | Rohini Decorations & Events | Venkateswara Nagar, Hyderabad',
    description: 'Transform your events with professional event decoration and management services in Venkateswara Nagar, Vivekananda Nagar, Hyderabad-500072. Get free consultation for wedding decorations, corporate events, and complete event coordination.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
