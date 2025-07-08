import { promises as fs } from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // 获取文章目录路径
    const articlesDirectory = path.join(
      process.cwd(),
      'app',
      'thoughts',
      '_articles'
    )

    // 读取目录中的所有文件
    const articles = await fs.readdir(articlesDirectory)

    const items = []
    for (const article of articles) {
      if (!article.endsWith('.mdx')) continue
      
      try {
        // 动态导入文章模块以获取元数据
        const module = await import(`../../thoughts/_articles/${article}`)

        if (!module.metadata) continue

        items.push({
          slug: article.replace(/\.mdx$/, ''),
          title: module.metadata.title,
          date: module.metadata.date || undefined,
          sort: Number(module.metadata.date?.replaceAll('.', '') || 0),
        })
      } catch (error) {
        console.error(`Error importing ${article}:`, error)
      }
    }
    
    // 按日期排序（最新的在前）
    items.sort((a, b) => b.sort - a.sort)

    return NextResponse.json(items)
  } catch (error) {
    console.error('Error fetching articles:', error)
    return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 })
  }
}