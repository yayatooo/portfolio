import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rahmat Hidayat | Frontend Dev',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
  

    <html lang="en">
    <head>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Vina+Sans&display=swap" rel="stylesheet"/>
    <link href="https://fonts.cdnfonts.com/css/shellhead" rel="stylesheet"/>
                
    </head>
      <body className={inter.className}>{children}</body>
    </html>
    
  )
}