import { Inter } from 'next/font/google'
import localFont from "next/font/local"
import "./globals.css"
import customize from "./customize"
import ParticlesComponent from "@/components/particlescomponent"

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const localSansFont = localFont({
  src: "./fonts/GeistVF.woff",
  display: 'swap',
  variable: '--font-local-sans',
})

export const metadata = {
  metadataBase: new URL(customize.Weburl),
  title: {
    default: customize.Webtitle,
    template: `%s | ${customize.Webtitle}`,
  },
  description: customize.Webdesc,
  keywords: customize.Keywords,
  authors: [{ name: customize.Ownernick }],
  creator: customize.Servername,
  openGraph: {
    type: 'website',
    locale: customize.Serverlocale,
    url: customize.Weburl,
    title: customize.Webtitle,
    description: customize.Webdesc,
    siteName: customize.Webtitle,
    images: [
      {
        url: `${customize.Weburl}/img/logo.png`,
        width: 1200,
        height: 630,
        alt: `${customize.Servername} Logo`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: customize.Webtitle,
    description: customize.Webdesc,
    images: [`${customize.Weburl}/img/logo.png`],
    creator: customize.Servertwitter,
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${localSansFont.variable}`}>
      <body>
        <div className="relative bg-[url('/img/background.jpg')] bg-cover bg-center min-h-screen">
          <ParticlesComponent />
          {children}
        </div>
      </body>
    </html>
  )
}