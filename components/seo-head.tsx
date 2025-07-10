'use client'

import Head from 'next/head'
import { usePathname } from 'next/navigation'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
  noindex?: boolean
  canonical?: string
}

export default function SEOHead({
  title,
  description,
  keywords,
  ogImage = '/og-image.jpg',
  noindex = false,
  canonical,
}: SEOHeadProps) {
  const pathname = usePathname()
  const siteUrl = 'https://blog.lhqs.ink'
  const pageUrl = canonical || `${siteUrl}${pathname}`
  
  return (
    <Head>
      {/* 基本元数据 */}
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      
      {/* 规范链接 */}
      <link rel="canonical" href={pageUrl} />
      
      {/* 索引控制 */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content="website" />
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@lhqs_gu" />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
    </Head>
  )
}