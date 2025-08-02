import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import localFont from 'next/font/local';

// Import PPF Formula font
const ppfFormula = localFont({
  src: [
    {
      path: './fonts/PPFormulaCondensed-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/PPFormulaCondensed-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-ppf',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rockhal | Music Venue & Cultural Center',
  description: 'Luxembourg\'s premier music venue and cultural center hosting international artists and local talent.',
  keywords: 'rockhal, music venue, concerts, luxembourg, live music, events, tickets',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ppfFormula.variable} font-ppf`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}