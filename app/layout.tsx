import type { Metadata, Viewport } from 'next'

import { unstable_ViewTransition as ViewTransition } from 'react'

import cn from 'clsx'
import localFont from 'next/font/local'
import 'katex/dist/katex.min.css'

import Navbar from '@/components/navbar'
import SecondaryNavigation from '@/components/secondary-navigation'
import './globals.css'

const sans = localFont({
  src: './_fonts/InterVariable.woff2',
  preload: true,
  variable: '--sans',
})

const serif = localFont({
  src: './_fonts/LoraItalicVariable.woff2',
  preload: true,
  variable: '--serif',
})

const mono = localFont({
  src: './_fonts/IosevkaFixedCurly-ExtendedMedium.woff2',
  preload: true,
  variable: '--mono',
})

export const metadata: Metadata = {
  title: {
    template: '%s - lhqs',
    default: 'lhqs',
  },
  description: '一个极简、现代、内容驱动的个人博客，分享设计、开发和AI相关内容',
  keywords: ['设计', '全栈开发', 'UX', 'AI', '自动化', '效率工具'],
  authors: [{ name: 'lhqs' }],
  creator: 'lhqs',
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://blog.lhqs.ink/',
    siteName: 'blog.lhqs.ink',
    title: 'lhqs - 设计师和全栈开发工程师',
    description: '一个极简、现代、内容驱动的个人博客，分享设计、开发和AI相关内容',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@lhqs_gu',
    images: ['/og-image.jpg'],
  },
}

export const viewport: Viewport = {
  maximumScale: 1,
  colorScheme: 'only light',
  themeColor: '#fcfcfc',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <html lang='en' className='overflow-x-hidden touch-manipulation'>
      <body
        suppressHydrationWarning
        className={cn(
          sans.variable,
          serif.variable,
          mono.variable,
          'w-full p-6 sm:p-8 md:p-10',
          'text-sm leading-6 sm:text-[15px] sm:leading-7 md:text-base md:leading-7',
          'text-rurikon-500',
          'antialiased'
        )}
      >
        <div className='fixed sm:hidden h-6 sm:h-10 md:h-14 w-full top-0 left-0 z-30 pointer-events-none content-fade-out' />
        <div className='flex flex-col mobile:flex-row'>
          {/* 第一列：一级目录 */}
          <Navbar />
          
          {/* 第二列：二级目录 */}
          <div className='mobile:w-48 lg:w-80 mobile:mr-0 sm:mr-10 md:pl-6 md:mr-0 hidden md:block'>
            <div className='mobile:sticky top-6 sm:top-8 md:top-10 mobile:h-[calc(100vh-4rem)] overflow-y-auto pr-4 secondary-navigation'>
              {/* 这里将根据当前路径动态渲染二级目录 */}
              <SecondaryNavigation />
            </div>
          </div>
          
          {/* 第三列：内容区 */}
          <main className='relative flex-1 max-w-2xl [contain:inline-size]'>
            <div className='absolute w-full h-px opacity-50 bg-rurikon-border right-0 mobile:right-auto mobile:left-0 mobile:w-px mobile:h-full mobile:opacity-100' />
            <ViewTransition name='crossfade'>
              <article className='pl-0 pt-6 mobile:pt-0 mobile:pl-6 sm:pl-10 md:pl-14'>
                {children}
              </article>
            </ViewTransition>
          </main>
        </div>
      </body>
    </html>
  )
}
