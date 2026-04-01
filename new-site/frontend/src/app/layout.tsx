import type { Metadata } from 'next'
import './globals.css'
import { ContentProvider } from '../contexts/ContentContext'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Brewtendo',
  description: 'Brewtendo Network — a Nintendo Network revival for the 3DS. eShop, Badge Arcade, SpotPass, and more.',
  openGraph: {
    url: 'https://brewtendonetwork.github.io',
    type: 'website',
    title: 'Brewtendo',
    description: 'Brewtendo Network — a Nintendo Network revival for the 3DS.',
    images: [{ url: 'https://raw.githubusercontent.com/BrewtendoNetwork/brewtendonetwork.github.io/main/new-site/frontend/public/images/imgbg.png', width: 1200, height: 630 }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.png" />
      </head>
      <body className="min-h-screen flex flex-col">
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
