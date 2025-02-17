import './globals.css'
import {Inter} from 'next/font/google'
import {NavBar} from "@/app/components/NavBar";
import {Footer} from "@/app/components/footer/Footer";
import {Analytics} from '@vercel/analytics/react';


const inter = Inter({subsets: ['latin']})

export const metadata = {
    metadataBase: {
        title: 'EdgarMejiaV - Software Engineer & Web Developer',
        description: 'Edgar Mejia es un ingeniero de software y desarrollador web con experiencia en aplicaciones web y tecnologías modernas. Explora su portafolio.',
        twitter: {
            title: 'EdgarMejiaV - Software Engineer & Web Developer',
            description: 'Descubre el portafolio de Edgar Mejia, un ingeniero de software y desarrollador web con experiencia en tecnologías modernas.',
            image: 'https://avatars.githubusercontent.com/u/35704346?v=4',
            card: 'summary_large_image', // Tipo de tarjeta para Twitter (grande)
        },
        openGraph: {
            title: 'EdgarMejiaV - Software Engineer & Web Developer',
            description: 'Explora el portafolio de Edgar Mejia, ingeniero de software y desarrollador web con habilidades en React, JavaScript, y Next.js.',
            image: 'https://avatars.githubusercontent.com/u/35704346?v=4', // Imagen compartida para Open Graph
            url: 'https://edgarmejiav.vercel.app/', // URL de la página
            type: 'website', // Tipo de contenido
        },
        category: 'Desarrollador Web',
        keywords: 'ingeniero de software, desarrollador web, portafolio de desarrollo, aplicaciones web, React, Next.js, JavaScript, TypeScript',
        icons: [
            {
                href: 'https://avatars.githubusercontent.com/u/35704346?v=4',
                sizes: '32x32', // Tamaño recomendado
                type: 'image/png', // Tipo de imagen
            }
        ],
        canonicalUrl: 'https://edgarmejiav.vercel.app/',
        robots: 'index, follow', // Asegura que la página se indexe
        author: 'Edgar Mejia', // Información del autor
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

            <title>{metadata.metadataBase.title}</title>
        </head>
        <body className={inter.className}>
        <Analytics/>
        <NavBar/>
        <div
            className="absolute top-0 z-[-999] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        {children}
        <Footer/>
        </body>

        </html>
    )
}
