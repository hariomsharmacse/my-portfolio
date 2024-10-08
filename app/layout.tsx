import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { ProvideTheme, ProvideNextUI } from './providers'
import { Toaster } from 'react-hot-toast'

// const inter = Inter({ subsets: ['latin'] })

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'] 
})

export const metadata: Metadata = {
  title: "Hariom's Portfolio",
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"  suppressHydrationWarning>
      <body className={`${poppins.className} `}>
        <ProvideTheme>
          <ProvideNextUI>
            {children}
            <Toaster />
          </ProvideNextUI>
        </ProvideTheme>
      </body>
    </html>
  )
}
