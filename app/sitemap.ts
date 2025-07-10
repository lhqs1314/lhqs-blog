import { MetadataRoute } from 'next'
import { promises as fs } from 'fs'
import path from 'path'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 获取所有文章
  const articlesDirectory = path.join(
    process.cwd(),
    'app',
    'thoughts',
    '_articles'
  )
  
  const articles = await fs.readdir(articlesDirectory)
  const articleSlugs = articles
    .filter((name) => name.endsWith('.mdx'))
    .map((name) => name.replace(/\.mdx$/, ''))
  
  // 基础页面
  const routes = [
    {
      url: 'https://blog.lhqs.ink',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: 'https://blog.lhqs.ink/thoughts',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: 'https://blog.lhqs.ink/projects',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: 'https://blog.lhqs.ink/visuals',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]
  
  // 添加所有文章页面
  const articleRoutes = articleSlugs.map((slug) => ({
    url: `https://blog.lhqs.ink/thoughts/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))
  
  return [...routes, ...articleRoutes]
}