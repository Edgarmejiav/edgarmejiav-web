/**
 * robots.js — Next.js App Router dynamic robots.txt
 * Accesible en: https://www.lega.dev/robots.txt
 */
export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/_next/'],
            },
        ],
        sitemap: 'https://www.lega.dev/sitemap.xml',
        host: 'https://www.lega.dev',
    };
}
