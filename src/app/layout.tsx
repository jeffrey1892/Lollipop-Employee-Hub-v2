import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'
import { AnonymityBadge } from '@/components/AnonymityBadge'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Lolliop Employee Hub',
  description: 'Anonymous workplace and wellbeing support for employees.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${inter.variable} h-full antialiased`}><body className="min-h-full flex flex-col"><header className="header"><div className="container-wide header-inner"><Link href="/" className="logo"><span className="logo-mark">lp</span><span>Lolliop Employee Hub<small>Anonymous workplace + wellbeing support</small></span></Link><nav className="nav" aria-label="Primary"><Link href="/workplace">At work</Link><Link href="/wellbeing">For yourself</Link><Link href="/chat">Talk it through</Link></nav></div></header><main className="main">{children}</main><footer className="footer"><div className="container-wide stack"><AnonymityBadge compact /><p className="text-meta">This tool is informational support, not medical, legal, or therapeutic advice. For urgent safety or crisis concerns, contact emergency services or a qualified professional.</p></div></footer></body></html>
}
