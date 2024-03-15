import { type Metadata } from 'next'

import { montserrat } from './fonts'

import 'styles/globals.css'

export const metadata: Metadata = {
  title: 'Synoap',
  description: '- Portifolio created by Next.js'
}

function RootLayout ({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en" className={montserrat.className}>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
