import './globals.css'
import {Inter} from 'next/font/google'
import {NavBar} from "@/app/components/NavBar";
import {Footer} from "@/app/components/footer/Footer";
import {Analytics} from '@vercel/analytics/react';


const inter = Inter({subsets: ['latin']})

export const metadata = {
    metadataBase: {
        title: 'Edgar Mejía Vásquez - Software Engineer | Backend & Frontend',
        description: 'Más de 4 años de experiencia en arquitectura de microservicios, liderazgo técnico y desarrollo full-stack. Cajamarca, Perú.',
        twitter: {
            title: 'Edgar Mejía Vásquez - Software Engineer | Backend & Frontend',
            description: 'Portafolio de Edgar Mejía Vásquez, ingeniero de software especializado en microservicios, arquitectura y liderazgo técnico.',
            image: 'https://avatars.githubusercontent.com/u/35704346?v=4',
            card: 'summary_large_image',
        },
        openGraph: {
            title: 'Edgar Mejía Vásquez - Software Engineer | Backend & Frontend',
            description: 'Más de 4 años de experiencia en arquitectura de microservicios, liderazgo técnico y desarrollo full-stack.',
            image: 'https://avatars.githubusercontent.com/u/35704346?v=4',
            url: 'https://edgarmejiav.vercel.app/',
            type: 'website',
        },
        category: 'Ingeniería de Software',
        keywords: 'ingeniero de software, microservicios, backend, frontend, Node.js, NestJS, Spring Boot, React, Next.js, PostgreSQL, Docker, AWS, Cajamarca Perú',
        icons: [
            {
                href: 'https://avatars.githubusercontent.com/u/35704346?v=4',
                sizes: '32x32',
                type: 'image/png',
            }
        ],
        canonicalUrl: 'https://edgarmejiav.vercel.app/',
        robots: 'index, follow',
        author: 'Edgar Mejía Vásquez',
    }
}


export default function RootLayout({children}) {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <meta name="google-site-verification" content="Jc5LmUKSElMYT4b1kjDK74v55G4yINhv9VoNuFM1Eh8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            {/* Descripción y palabras clave */}
            <meta name="description" content={metadata.metadataBase.description}/>
            <meta name="keywords" content={metadata.metadataBase.keywords}/>
            <meta name="author" content="Edgar Mejia"/>
            <meta name="robots" content="index, follow"/>
            <meta name="googlebot" content="index, follow"/>
            {/*  twitter*/}
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:site" content="@legaMejiav"/>
            <meta name="twitter:title" content={metadata.metadataBase.twitter.title}/>
            <meta name="twitter:description" content={metadata.metadataBase.twitter.description}/>
            <meta name="twitter:image" content={metadata.metadataBase.twitter.image}/>
            {/*  facebook*/}
            <meta property="og:title" content={metadata.metadataBase.openGraph.title}/>
            <meta property="og:description" content={metadata.metadataBase.openGraph.description}/>
            <meta property="og:image" content={metadata.metadataBase.openGraph.image}/>
            <meta property="og:url" content={metadata.metadataBase.openGraph.url}/>
            <meta property="og:site_name" content="EdgarMejiaV"/>
            <meta property="og:type" content="website"/>
            <meta property="og:locale" content="en_US"/>
            <meta property="og:locale:alternate" content="es_ES"/>
            <meta property="og:locale:alternate" content="es_MX"/>

            <link rel="icon" href="https://avatars.githubusercontent.com/u/35704346?v=4"/>
            <link rel="canonical" href={metadata.metadataBase.canonicalUrl}/>

            <title>Edgar Mejía Vásquez - Software Engineer | Backend &amp; Frontend</title>
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
