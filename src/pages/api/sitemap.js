export default function handler(req, res) {
  // Set the appropriate header
  res.setHeader('Content-Type', 'text/xml');
  
  // Define the base URL of your website
  const baseUrl = 'https://riviera-stays.com';
  
  // Generate the current date in the format required for sitemaps
  const date = new Date().toISOString();
  
  // Define all the pages of your website
  const pages = [
    '',
    '/properties',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
    '/cookies',
    '/why-chose-us',
    '/services',
    '/services/drywall',
    '/services/flooring',
    '/services/kitchen-bath',
    '/services/mold',
    '/services/structural-drying',
  ];
  
  // Generate the sitemap XML content
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>
  `).join('')}
</urlset>`;
  
  // Send the sitemap
  res.status(200).send(sitemap);
} 