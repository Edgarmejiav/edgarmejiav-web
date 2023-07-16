import './globals.css'
import { Inter } from 'next/font/google'
import {NavBar} from "@/components/NavBar";
import {Footer} from "@/components/footer/Footer";
import {Metadata} from "next";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'EdgarMejiav - Home',
  description: ' Software engineer & web Developer',
  image: 'https://avatars.githubusercontent.com/u/35704346?v=4',
  twitter: {
    title: 'EdgarMejiav - Home',
    description: ' Software engineer & web Developer',
    image: 'https://avatars.githubusercontent.com/u/35704346?v=4',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

    <body className={inter.className}>
    <NavBar/>

    {children}
    <Footer/>
    </body>

    </html>
  )
}
