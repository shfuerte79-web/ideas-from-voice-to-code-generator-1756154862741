import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Voice-to-Code Generator',
  description: '[
  {
    "title": "AI-Powered Voice-to-Code Generator Solution",
    "one_liner": "Revolutionary AI solution based on Voice-to-Code Generator",
    "execution_72h": {
      "mvp_scope": [
        "Landing page",
        "Core AI feature",
        "Payment integration"
      ],
      "tools": [
        "Next.js",
        "Supabase",
        "Stripe"
      ]
    }
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}