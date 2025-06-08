import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

function page() {
  return (
    <html>
        <body className={inter.className}>
            <section className='min-h-screen w-full'>
              <h1>hola soy el login</h1>
            </section>
        </body>
    </html>
  )
}

export default page