import { ReadingTools } from '@/components/ReadingTools';
import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { profile } from '@/data/profile';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: 'Himanshu Ranjan — Machine Learning & Robotics',
    template: '%s | Himanshu Ranjan',
  },
  description: profile.intro,
  openGraph: {
    title: 'Himanshu Ranjan — Machine Learning & Robotics',
    description: profile.intro,
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: new URL('/og.png', profile.siteUrl).toString(),
        width: 1731,
        height: 909,
        alt: 'Himanshu Ranjan — Machine Learning & Robotics Engineer',
      },
    ],
  },
  twitter: {
    images: [new URL('/og.png', profile.siteUrl).toString()],
    card: 'summary_large_image',
    title: 'Himanshu Ranjan — Machine Learning & Robotics',
    description: profile.intro,
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navbar />
        <ReadingTools />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
