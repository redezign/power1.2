import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'PowerAdda | Powering Mobility & Homes',
  description: 'Premium car, bike & inverter battery replacement services in Mumbai. Doorstep installation, solar energy solutions, lithium battery systems, and renewable energy infrastructure.',
  keywords: 'battery replacement mumbai, doorstep battery service, car battery near me, inverter battery mumbai, solar energy solutions, lithium battery systems, bike battery replacement',
  openGraph: {
    title: 'PowerAdda | Powering Mobility & Homes',
    description: 'Premium battery replacement and renewable energy solutions in Mumbai. Doorstep service for car, bike & inverter batteries.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'PowerAdda',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PowerAdda | Powering Mobility & Homes',
    description: 'Premium battery replacement and renewable energy solutions in Mumbai.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white font-sans antialiased">{children}</body>
    </html>
  );
}
