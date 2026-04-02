import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ContentProvider } from '../contexts/ContentContext'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

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
        url: 'https://raw.githubusercontent.com/BrewtendoNetwork/brewtendonetwork.github.io/main/meta/images/imgbg.png',
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
        <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: https://raw.githubusercontent.com https://cdn.discordapp.com; font-src 'self'; media-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests; block-all-mixed-content;" />
        <meta http-equiv="X-Content-Type-Options" content="nosniff" />
        <meta http-equiv="X-Frame-Options" content="DENY" />
        <meta http-equiv="X-XSS-Protection" content="1; mode=block" />
        <meta http-equiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link id="pagestyle" rel="stylesheet" href="/css/main.css" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.png" />
      </head>
      <body className={inter.className}>
        <ContentProvider>
          <main>
            <div id="content">{children}</div>
          </main>
          <Footer />
        </ContentProvider>
      </body>
    </html>
  )
}