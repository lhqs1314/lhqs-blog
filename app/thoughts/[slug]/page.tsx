import { promises as fs } from 'fs'
import path from 'path'
import cn from 'clsx'
import { notFound } from 'next/navigation';


export default async function Page(props: {
  params: Promise<{
    slug: string
  }>
}) {
  const params = await props.params
  try {
    const { default: MDXContent, metadata } = await import(
      '../_articles/' + `${params.slug}.mdx`
    )
    
    // 构建结构化数据
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: metadata.title,
      datePublished: metadata.date?.replace(/\./g, '-'),
      dateModified: metadata.lastModified?.replace(/\./g, '-') || metadata.date?.replace(/\./g, '-'),
      description: metadata.description,
      author: {
        '@type': 'Person',
        name: 'lhqs',
        url: 'https://blog.lhqs.ink',
      },
      keywords: metadata.keywords?.join(', '),
      url: `https://blog.lhqs.ink/thoughts/${params.slug}`,
      image: metadata.image || 'https://blog.lhqs.ink/og-image.jpg',
      publisher: {
        '@type': 'Person',
        name: 'lhqs',
        logo: {
          '@type': 'ImageObject',
          url: 'https://blog.lhqs.ink/icon.png'
        }
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://blog.lhqs.ink/thoughts/${params.slug}`
      }
    }
    
    return (
      <div
        className={cn(metadata.chinese && 'text-justify font-zh')}
        lang={metadata.chinese ? 'zh-Hans' : 'en'}
      >
        {/* 添加结构化数据 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd)
          }}
        />
        <MDXContent />
      </div>
    )
  } catch (error) {
    notFound()
  }
}

export async function generateStaticParams() {
  const articles = await fs.readdir(
    path.join(process.cwd(), 'app', 'thoughts', '_articles')
  )

  return articles
    .filter((name) => name.endsWith('.mdx'))
    .map((name) => ({
      params: {
        slug: name.replace(/\.mdx$/, ''),
      },
    }))
}

export async function generateMetadata(props: {
  params: Promise<{
    slug: string
  }>
}) {
  const params = await props.params
  const metadata = (await import('../_articles/' + `${params.slug}.mdx`))
    .metadata
  return {
    title: metadata.title,
    description: metadata.description,
  }
}
