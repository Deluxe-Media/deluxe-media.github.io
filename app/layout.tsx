import type { Metadata, Viewport } from 'next';
import './globals.css';

const description =
  'A Deluxe Media a Kontroll sales house-a: display, natív, PR-cikk, videós és podcast hirdetések a kontroll.hu-n. Kérj egyedi médiaajánlatot, 24 órán belül jelentkezünk!';

export const metadata: Metadata = {
  metadataBase: new URL('https://deluxemedia.hu'),
  title: {
    default: 'Deluxe Media – Media Sales House | Hirdess a Kontrollon',
    template: '%s – Deluxe Media',
  },
  description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'hu_HU',
    url: '/',
    siteName: 'Deluxe Media',
    title: 'Deluxe Media – Hirdess a Kontroll felületein!',
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deluxe Media – Hirdess a Kontroll felületein!',
    description,
  },
};

export const viewport: Viewport = {
  themeColor: '#006fff',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="hu" className="antialiased">
      <head>
        <noscript>
          <style>{'[style*="opacity:0"] { opacity: 1 !important; transform: none !important; }'}</style>
        </noscript>
      </head>
      <body className="bg-tertiary text-tertiary-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, '\\u003c') }}
        />
        {children}
      </body>
    </html>
  );
}

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Deluxe Media Kft.',
  alternateName: 'Deluxe Media',
  url: 'https://deluxemedia.hu',
  logo: 'https://deluxemedia.hu/logo.png',
  description,
  email: 'sales@deluxemedia.hu',
  telephone: '+36203688282',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Budaörsi út 75.',
    addressLocality: 'Budapest',
    postalCode: '1118',
    addressCountry: 'HU',
  },
};
