/** @type { import('next-sitemap').IConfig } */
module.exports = {
  // Set this environment variable in ".env.local".
  siteUrl: process.env.SITE_URL || 'http://localhost:3000',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
};
