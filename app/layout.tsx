import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './ui/Navbar';
import { Bugpilot } from "@bugpilot/next";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NextAuth.js Example App',
  description: 'An example app using NextAuth.js, Next.js v14.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Bugpilot
          workspaceId='2fa89212-ad87-4d1b-8a79-fbb965af7f41'
          user={null}
          enabled={true}
        >
          <Navbar />
          <div className="max-w-screen-md mx-auto">
            {children}
          </div>
        </Bugpilot>
      </body>
    </html>
  )
}
