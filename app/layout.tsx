import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');

export const metadata: Metadata = {
        title: {
          default: 'Rohini Decorations & Events - Professional Event Solutions',
          template: '%s | Rohini Decorations & Events'
        },
        description: 'Rohini Decorations & Events - Professional event decoration and management services in Venkateswara Nagar, Vivekananda Nagar, Hyderabad-500072. Specializing in wedding decorations, corporate events, catering, photography, and complete event coordination in Hyderabad, Telangana.',
        keywords: [
          'rohini decorations events',
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
        authors: [{ name: 'Rohini Decorations & Events' }],
        creator: 'Rohini Decorations & Events',
        publisher: 'Rohini Decorations & Events',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
            title: 'Rohini Decorations & Events - Event Decoration & Management in Hyderabad',
            description: 'Professional event decoration and management services in Venkateswara Nagar, Vivekananda Nagar, Hyderabad-500072. Wedding decorations, corporate events, catering, photography, and complete event coordination in Hyderabad, Telangana.',
            siteName: 'Rohini Decorations & Events',
    images: [
      {
        url: 'https://placehold.co/1200x630?text=Rohini+Decorations+Events',
        width: 1200,
        height: 630,
        alt: 'Rohini Decorations & Events - Professional Event Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rohini Decorations & Events - Event Decoration & Management in Hyderabad',
    description: 'Professional event decoration and management services in Venkateswara Nagar, Vivekananda Nagar, Hyderabad-500072. Wedding decorations, corporate events, catering, and photography services.',
    images: ['https://placehold.co/1200x630?text=Rohini+Decorations+Events'],
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
  verification: {
    google: 'google-site-verification=your-actual-verification-code-here',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content="#402530" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Google Analytics 4 */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: document.title,
                page_location: window.location.href,
              });
            `,
          }}
        />
        {/* JSON-LD structured data for Organization and Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Rohini Decorations & Events',
              alternateName: ['Rohini Decorations & Events Hyderabad', 'Rohini Event Management', 'Rohini Decorations & Events Telangana', 'Rohini Event Decorations'],
              description: 'Professional event decoration and management company located in Venkateswara Nagar, Vivekananda Nagar, Hyderabad-500072, Telangana. Specializing in wedding decorations, corporate events, catering, photography, and complete event coordination services.',
              url: siteUrl,
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Venkateswara Nagar, Vivekananda Nagar',
                addressLocality: 'Hyderabad',
                addressRegion: 'Telangana',
                postalCode: '500072',
                addressCountry: 'IN'
              },
              telephone: ['+91-9032028704', '+91-9603210704'],
              areaServed: {
                '@type': 'City',
                name: 'Hyderabad'
              },
              geo: {
                '@type': 'GeoCoordinates',
                addressLocality: 'Hyderabad',
                addressRegion: 'Telangana',
                addressCountry: 'IN'
              },
              image: [
                'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&h=630&fit=crop',
                'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=630&fit=crop'
              ],
              sameAs: [],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Event Management Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Wedding Decoration & Planning',
                      description: 'Complete wedding decoration and planning services in Venkateswara Nagar, Hyderabad'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Corporate Event Decoration & Management',
                      description: 'Professional corporate event decoration and management services in Venkateswara Nagar, Hyderabad'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Catering Services',
                      description: 'Premium catering services for all types of events in Venkateswara Nagar, Hyderabad'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Event Decoration',
                      description: 'Professional event decoration and styling services in Venkateswara Nagar, Vivekananda Nagar, Hyderabad-500072'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Photography Services',
                      description: 'Professional event photography and videography services in Venkateswara Nagar, Hyderabad'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Entertainment Services',
                      description: 'DJ services and entertainment for events in Venkateswara Nagar, Hyderabad'
                    }
                  }
                ]
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '200',
                bestRating: '5',
                worstRating: '1'
              }
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              url: siteUrl,
              name: 'Rohini Decorations & Events',
              potentialAction: {
                '@type': 'SearchAction',
                target: `${siteUrl}/search?q={search_term_string}`,
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
