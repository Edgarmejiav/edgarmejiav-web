import './globals.css'
import { Inter } from 'next/font/google'
import { NavBar } from "@/app/components/NavBar";
import { Footer } from "@/app/components/footer/Footer";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

const experienceYears = Math.floor((new Date() - new Date('2021-09-01')) / (1000 * 60 * 60 * 24 * 365.25));

const siteUrl = 'https://www.lega.dev';
const ogImage = 'https://avatars.githubusercontent.com/u/35704346?v=4';

/**
 * Metadata exportada correctamente para Next.js App Router.
 * Next.js lee estas propiedades de primer nivel para generar
 * automáticamente las etiquetas <meta> en el <head>.
 *
 * IMPORTANTE: metadataBase solo debe ser la URL base del sitio
 * para que Next.js resuelva rutas relativas de imágenes.
 */
export const metadata = {
    metadataBase: new URL(siteUrl),

    title: {
        default: 'Edgar Mejía Vásquez | Software Engineer & Tech Lead',
        template: '%s | Edgar Mejía Vásquez',
    },
    description: `Software Engineer con +${experienceYears} años de experiencia en empresas multinacionales como Inetum (Europa) y Belcorp (LATAM). Especialista en Node.js, React, Spring Boot y microservicios. Disponible para contratación remota en LATAM.`,
    keywords: [
        'software engineer Peru',
        'contratar desarrollador full stack',
        'hire full stack developer',
        'ingeniero de software Peru',
        'tech lead remoto LATAM',
        'especialista backend Node.js',
        'frontend developer React',
        'AWS cloud developer',
        'Edgar Mejia Vasquez',
        'lega.dev',
        'legadev',
        'Inetum developer',
        'Belcorp engineer',
        'desarrollador web Peru',
        'microservicios Spring Boot',
        'empresa multinacional software',
    ],
    authors: [{ name: 'Edgar Mejía Vásquez', url: siteUrl }],
    creator: 'Edgar Mejía Vásquez',
    publisher: 'Edgar Mejía Vásquez',
    category: 'Ingeniería de Software',

    // ── Canonical & Robots ──────────────────────────────────────────────────
    alternates: {
        canonical: siteUrl,
        languages: {
            'es-PE': siteUrl,
            'es': siteUrl,
        },
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },

    // ── Open Graph ──────────────────────────────────────────────────────────
    openGraph: {
        type: 'profile',
        locale: 'es_PE',
        alternateLocale: ['es_MX', 'es_ES', 'en_US'],
        url: siteUrl,
        siteName: 'Edgar Mejía Vásquez · lega.dev',
        title: 'Edgar Mejía Vásquez | Software Engineer & Tech Lead',
        description: `Software Engineer con experiencia en multinacionales como Inetum (empresa europea de servicios digitales) y Belcorp. +${experienceYears} años desarrollando sistemas con Node.js, React, Spring Boot y Cloud (AWS/Vercel). Disponible para contratación remota.`,
        images: [
            {
                url: ogImage,
                width: 460,
                height: 460,
                alt: 'Edgar Mejía Vásquez — Full-Stack Developer',
            },
        ],
        firstName: 'Edgar',
        lastName: 'Mejía Vásquez',
        username: 'edgarmejiav',
        gender: 'male',
    },

    // ── Twitter / X Card ────────────────────────────────────────────────────
    twitter: {
        card: 'summary_large_image',
        site: '@legaMejiav',
        creator: '@legaMejiav',
        title: 'Edgar Mejía Vásquez | Software Engineer @ Inetum · Belcorp',
        description: `Software Engineer con trayectoria en multinacionales (Inetum, Belcorp). +${experienceYears} años de experiencia en backend, frontend y arquitectura cloud.`,
        images: [ogImage],
    },

    // ── Verification ────────────────────────────────────────────────────────
    verification: {
        google: ['Jc5LmUKSElMYT4b1kjDK74v55G4yINhv9VoNuFM1Eh8', 'fOWq2uZW4f3PoHz865_XFbWHoPcYAgUKOxJGp3xdN84'],
    },

    // ── Icons ───────────────────────────────────────────────────────────────
    icons: {
        icon: [
            { url: ogImage, type: 'image/png', sizes: '96x96' },
        ],
        shortcut: ogImage,
        apple: ogImage,
    },
};

// ── JSON-LD Structured Data ─────────────────────────────────────────────────
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Edgar Mejía Vásquez",
    "jobTitle": "Software Engineer & Tech Lead",
    "url": siteUrl,
    "image": ogImage,
    "email": "mailto:legamejiav@gmail.com",
    "worksFor": [
        {
            "@type": "Organization",
            "name": "Inetum",
            "description": "Empresa multinacional europea líder en servicios y soluciones digitales",
            "url": "https://www.inetum.com"
        },
        {
            "@type": "Organization",
            "name": "Belcorp",
            "description": "Corporación multinacional de belleza con presencia en más de 15 países de América Latina",
            "url": "https://www.belcorp.biz"
        }
    ],
    "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Universidad Nacional de Cajamarca"
    },
    "description": `Software Engineer con +${experienceYears} años de experiencia en empresas multinacionales como Inetum y Belcorp. Edgar Mejía Vásquez es un ingeniero de software peruano especializado en Node.js, React, Spring Boot, microservicios y cloud (AWS/Vercel). Desarrolla arquitecturas escalables de alto impacto para proyectos en América Latina.`,
    "knowsAbout": [
        "Desarrollo Backend",
        "Desarrollo Frontend",
        "Node.js",
        "React.js",
        "Spring Boot",
        "PostgreSQL",
        "AWS",
        "Microservicios",
        "Liderazgo Técnico",
        "TypeScript",
        "Kubernetes",
        "Docker"
    ],
    "sameAs": [
        "https://www.linkedin.com/in/legamejiav/",
        "https://github.com/edgarmejiav",
        "https://www.tiktok.com/@legadev"
    ],
    "knowsLanguage": ["es", "en"],
    "nationality": {
        "@type": "Country",
        "name": "Peru"
    },
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": siteUrl
    }
};

// ── WebSite schema para Sitelinks Search Box (Google) ──────────────────────
const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Edgar Mejía Vásquez · lega.dev",
    "url": siteUrl,
    "description": `Portafolio profesional de Edgar Mejía Vásquez, Full-Stack Developer con +${experienceYears} años de experiencia.`,
    "author": {
        "@type": "Person",
        "name": "Edgar Mejía Vásquez"
    },
    "inLanguage": "es"
};

export default function RootLayout({ children }) {
    return (
        // lang="es" correcto ya que el contenido es principalmente en español
        <html lang="es">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* JSON-LD — Person Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />

                {/* JSON-LD — WebSite Schema (habilita Sitelinks en Google) */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
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
