import type { Metadata } from 'next';
import { Jost, JetBrains_Mono } from 'next/font/google';
import '@/styles/globals.css';

const jost = Jost({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Parth Mule — Robotics, Embedded & Software Engineer',
  description:
    'Portfolio of Parth Mule — a systems-oriented engineer working across robotics, embedded systems, electronics, and software engineering.',
  keywords: [
    'Parth Mule',
    'Robotics Engineer',
    'Embedded Engineer',
    'Software Engineer',
    'Electronics Engineer',
    'Portfolio',
  ],
  authors: [{ name: 'Parth Mule' }],
  openGraph: {
    title: 'Parth Mule — Robotics, Embedded & Software Engineer',
    description:
      'A systems-oriented engineer who enjoys working across hardware and software boundaries and turning ideas into things that work in the real world.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parth Mule — Robotics, Embedded & Software Engineer',
    description:
      'A systems-oriented engineer who enjoys working across hardware and software boundaries and turning ideas into things that work in the real world.',
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jost.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
