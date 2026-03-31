import type { Metadata } from 'next'
import './globals.css'
import { ContentProvider } from '../contexts/ContentContext'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Brewtendo',
  description: 'Brewtendo\'s website, which is more or less a guide on how to install it on your 3DS.',
  openGraph: {
    url: 'https://brewtendonetwork.github.io',
    type: 'website',
    title: 'Brewtendo',
    description: 'Brewtendo\'s website, which is more or less a guide on how to install it on your 3DS.',
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
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.png" />
      </head>
      <body>
        <ContentProvider>
          <Navbar />
          <main>
            <div id="content">{children}</div>
          </main>
          <Footer />
        </ContentProvider>
      </body>
    </html>
  )
}
