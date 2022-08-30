export async function GET() {

  // Links you do not want in sitemap..
  const blacklist = ['/contact/thank-you']
  
  // Getting raw links and cleaning them..
  const rawLinks = Object.keys(import.meta.glob('/src/routes/**/+page.svelte'))
  const links = rawLinks.map(el => el.replace('/src/routes', ''))
                        .map(el => el.replace('/+page.svelte', ''))
                        .filter(el => !el.includes(blacklist))
  
                        
  // Joining links to url tag for xml..
  const absoluteUrl = 'https://yosofiqbal.com'
  
  let urls = ''
  for (const link of links) {
    urls += `
    <url>
      <loc>${absoluteUrl + link}</loc>
    </url>`
  }

  // Genrating original response..
  let sitemap = `
  <?xml version="1.0" encoding="UTF-8" ?>
  <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="https://www.w3.org/1999/xhtml" xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0" xmlns:news="https://www.google.com/schemas/sitemap-news/0.9" xmlns:image="https://www.google.com/schemas/sitemap-image/1.1" xmlns:video="https://www.google.com/schemas/sitemap-video/1.1" >
    ${urls.trim()}
  </urlset>`
  
  // Responding..
  return new Response(sitemap.trim(), { headers: { 'Content-Type': 'application/xml' } });

}