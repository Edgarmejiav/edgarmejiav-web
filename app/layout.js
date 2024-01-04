import './globals.css'
import {Inter} from 'next/font/google'
import {NavBar} from "@/app/components/NavBar";
import {Footer} from "@/app/components/footer/Footer";
import {Analytics} from '@vercel/analytics/react';


const inter = Inter({subsets: ['latin']})

export const metadata = {
    metadataBase: {
        title: 'EdgarMejiav - Home',
        description: ' Edgar Mejia Software engineer & web Developer',
        twitter: {
            title: 'EdgarMejiav - Home',
            description: ' Software engineer & web Developer',
            image: 'https://avatars.githubusercontent.com/u/35704346?v=4',
        },
        category: "Software engineer & web Developer",
        keywords: "Software engineer & web Developer",
        icons: [
            {
                href: 'https://avatars.githubusercontent.com/u/35704346?v=4',
            }]
    }
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="description" content={metadata.metadataBase.description}/>
            <meta name="keywords" content={metadata.metadataBase.keywords}/>
            <meta name="author" content="Edgar Mejia"/>
            <meta name="robots" content="index, follow"/>
            <meta name="googlebot" content="index, follow"/>
            {/*  twitter*/}
            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:site" content="@legaMejiav"/>
            <meta name="twitter:title" content={metadata.metadataBase.twitter.title}/>
            <meta name="twitter:description" content={metadata.metadataBase.twitter.description}/>
            <meta name="twitter:image" content={metadata.metadataBase.twitter.image}/>
            {/*  facebook*/}
            <meta property="og:title" content={metadata.metadataBase.title}/>
            <meta property="og:description" content={metadata.metadataBase.description}/>
            <meta property="og:image" content="https://avatars.githubusercontent.com/u/35704346?v=4"/>
            <meta property="og:url" content="https://edgarmejiav.vercel.app/"/>
            <meta property="og:site_name" content="EdgarMejiav"/>
            <meta property="og:type" content="website"/>
            <meta property="og:locale" content="en_US"/>
            <meta property="og:locale:alternate" content="es_ES"/>
            <meta property="og:locale:alternate" content="es_MX"/>

            <link rel="icon" href="https://avatars.githubusercontent.com/u/35704346?v=4"/>
            <title>{metadata.metadataBase.title}</title>
        </head>
        <body className={inter.className}>
        <Analytics/>
        <NavBar/>

        {children}
        <Footer/>
        </body>

        </html>
    )
}
