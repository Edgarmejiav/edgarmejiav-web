/**
 * sitemap.js — Next.js App Router dynamic sitemap
 * Accesible en: https://www.lega.dev/sitemap.xml
 *
 * Google Search Console lo utilizará para rastrear e indexar las páginas.
 * Añade nuevas rutas aquí cuando agregues secciones al sitio.
 */
export default function sitemap() {
    const baseUrl = 'https://www.lega.dev';
    const lastModified = new Date().toISOString();

    return [
        {
            url: baseUrl,
            lastModified,
            changeFrequency: 'monthly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/#about`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/#experience`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/#projects`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/#stack`,
            lastModified,
            changeFrequency: 'yearly',
            priority: 0.6,
        },
    ];
}
