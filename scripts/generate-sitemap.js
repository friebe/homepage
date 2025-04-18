import fs from 'fs';

const baseUrl = 'https://jan-friebe.de';
const pages = ['/', '/about'];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <changefreq>monthly</changefreq>
    <priority>${page === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`;

fs.writeFileSync('dist/sitemap.xml', sitemap);
console.log('Sitemap generated successfully!');