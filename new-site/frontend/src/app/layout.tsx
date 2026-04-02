import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ContentProvider } from '../contexts/ContentContext'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brewtendo',
  description:
    'Brewtendo Network — a Nintendo Network revival for the 3DS. eShop, Badge Arcade, SpotPass, and more.',
  openGraph: {
    url: 'https://brewtendonetwork.github.io',
    type: 'website',
    title: 'Brewtendo',
    description:
      'Brewtendo Network — a Nintendo Network revival for the 3DS.',
    images: [
      {
        url: 'https://raw.githubusercontent.com/BrewtendoNetwork/brewtendonetwork.github.io/main/new-site/frontend/public/images/imgbg.png',
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Security headers */}
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: https://raw.githubusercontent.com https://cdn.discordapp.com; font-src 'self'; media-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests; block-all-mixed-content;" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />

        {/* General meta */}
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" type="image/x-icon" href="/images/favicon.png" />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ContentProvider>
          <Navbar />

          <main className="flex-1 w-full flex flex-col items-center pt-20 pb-8">
            <div id="content" className="w-full max-w-2xl px-4">
              {children}
            </div>
          </main>

          <Footer />
        </ContentProvider>
      </body>
    </html>
  )
}