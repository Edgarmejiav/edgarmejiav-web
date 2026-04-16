import './globals.css'
import { Inter } from 'next/font/google'
import { NavBar } from "@/app/components/NavBar";
import { Footer } from "@/app/components/footer/Footer";
import { Analytics } from '@vercel/analytics/react';


const inter = Inter({ subsets: ['latin'] })

const experienceYears = Math.floor((new Date() - new Date('2021-09-01')) / (1000 * 60 * 60 * 24 * 365.25));

export const metadata = {
    metadataBase: {
        title: 'Edgar Mejía Vásquez | Full-Stack Developer & Tech Lead',
        description: `Desarrollador Full-Stack con +${experienceYears} años de experiencia. Especialista en Node.js, React, Spring Boot y microservicios. Disponible para proyectos y contratación remota en LATAM.`,
        twitter: {
            title: 'Edgar Mejía Vásquez | Full-Stack Developer',
            description: `Desarrollador Full-Stack con +${experienceYears} años de experiencia. Especialista en backend, frontend y arquitectura en la nube.`,
            image: 'https://avatars.githubusercontent.com/u/35704346?v=4',
            card: 'summary_large_image',
        },
        openGraph: {
            title: 'Edgar Mejía Vásquez | Full-Stack Developer',
            description: `Buscando perfil tech? Desarrollador Full-Stack con +${experienceYears} años de experiencia en Node.js, React y Cloud (AWS/Vercel).`,
            image: 'https://avatars.githubusercontent.com/u/35704346?v=4',
            url: 'https://edgarmejiav.vercel.app/',
            type: 'profile',
        },
        category: 'Ingeniería de Software',
        keywords: 'contratar desarrollador full stack, hire full stack developer, ingeniero de software, tech lead remoto, especialista backend, frontend developer, experto Node.js, experto React, AWS, Perú, LATAM, Edgar Mejia',
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

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Edgar Mejía Vásquez",
    "jobTitle": "Full-Stack Developer",
    "url": "https://edgarmejiav.vercel.app/",
    "image": "https://avatars.githubusercontent.com/u/35704346?v=4",
    "alumniOf": "Universidad Nacional de Cajamarca",
    "description": `Desarrollador Full-Stack con +${experienceYears} años de experiencia en desarrollo Frontend y Backend.`,
    "knowsAbout": ["Desarrollo Backend", "Desarrollo Frontend", "Node.js", "React.js", "PostgreSQL", "AWS", "Microservicios", "Liderazgo Técnico"],
    "sameAs": [
        "https://www.linkedin.com/in/legamejiav/",
        "https://github.com/edgarmejiav",
        "https://www.tiktok.com/@legadev"
    ]
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="google-site-verification" content="Jc5LmUKSElMYT4b1kjDK74v55G4yINhv9VoNuFM1Eh8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/* Descripción y palabras clave */}
                <meta name="description" content={metadata.metadataBase.description} />
                <meta name="keywords" content={metadata.metadataBase.keywords} />
                <meta name="author" content="Edgar Mejia" />
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />
                {/*  twitter*/}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@legaMejiav" />
                <meta name="twitter:title" content={metadata.metadataBase.twitter.title} />
                <meta name="twitter:description" content={metadata.metadataBase.twitter.description} />
                <meta name="twitter:image" content={metadata.metadataBase.twitter.image} />
                {/*  facebook*/}
                <meta property="og:title" content={metadata.metadataBase.openGraph.title} />
                <meta property="og:description" content={metadata.metadataBase.openGraph.description} />
                <meta property="og:image" content={metadata.metadataBase.openGraph.image} />
                <meta property="og:url" content={metadata.metadataBase.openGraph.url} />
                <meta property="og:site_name" content="EdgarMejiaV" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:locale:alternate" content="es_ES" />
                <meta property="og:locale:alternate" content="es_MX" />

                <link rel="icon" href="https://avatars.githubusercontent.com/u/35704346?v=4" />
                <link rel="canonical" href={metadata.metadataBase.canonicalUrl} />

                <title>Edgar Mejía Vásquez | Full-Stack Developer</title>
                
                {/* Structured Data for SEO y RRHH */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={inter.className}>
                <Analytics />
                <NavBar />

                {children}
                <Footer />
            </body>

        </html>
    )
}
