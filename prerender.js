
import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Get routes from App.tsx
const appContent = fs.readFileSync(toAbsolute('src/App.tsx'), 'utf-8')
const routeMatches = appContent.match(/<Route\s+path=["'](.*?)["']/g) || []

// Extract paths from Route components, filtering out dynamic routes with :params
const routes = routeMatches
  .map(match => {
    const pathMatch = match.match(/path=["'](.*?)["']/)
    return pathMatch ? pathMatch[1] : null
  })
  .filter(route => route !== null && !route.includes(':')) // Exclude dynamic routes with params

// Add root route if not already included
if (!routes.includes('/')) {
  routes.push('/')
}

// Add 404 (catch-all) route
if (!routes.includes('*') && !routes.includes('/404')) {
  routes.push('/404')
}

// Normalize routes for filesystem paths
const routesToPrerender = routes.map(route => {
  // Convert * to 404
  if (route === '*') return '/404'
  return route
})

console.log('Routes to prerender:', routesToPrerender)

;(async () => {
  for (const url of routesToPrerender) {
    const appHtml = await render(url)
    const html = template.replace('<!--app-html-->', appHtml)

    // Create the proper file path
    const filePath = `dist${url === '/' ? '/index' : url}.html`
    
    // Ensure the directory exists
    const dirPath = path.dirname(toAbsolute(filePath))
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true })
      console.log('Created directory:', dirPath)
    }
    
    fs.writeFileSync(toAbsolute(filePath), html)
    console.log('Pre-rendered:', filePath)
  }
})()
