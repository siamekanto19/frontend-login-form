import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'
import Navbar from '@/components/core/Navbar'

const clash = localFont({
  src: [
    {
      path: './fonts/ClashDisplay-Light.woff2',
      weight: '300',
      style: 'light',
    },
    {
      path: './fonts/ClashDisplay-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/ClashDisplay-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/ClashDisplay-Semibold.woff2',
      weight: '600',
      style: 'semibold',
    },
    {
      path: './fonts/ClashDisplay-Bold.woff2',
      weight: '700',
      style: 'bold',
    },
  ],
})

export const metadata: Metadata = {
  title: 'Drukland.de',
  description: 'Frontend Login Form',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${clash.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
