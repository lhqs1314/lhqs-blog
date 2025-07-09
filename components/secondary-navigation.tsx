'use client'

import cn from 'clsx'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useEffect, useState } from 'react'

function SecondaryItem(props: React.ComponentProps<typeof Link> & { active?: boolean }) {
  const { active, ...rest } = props
  
  return (
    <li
      className={cn(
        active
          ? 'text-rurikon-800'
          : 'text-rurikon-300 hover:text-rurikon-600',
        'transition-colors hover:transform-none',
        'mb-2'
      )}
    >
      <Link {...rest} className='inline-block w-full' draggable={false} />
    </li>
  )

  
}

export default function SecondaryNavigation() {
  const pathname = usePathname();
  console.log("pathname =>", pathname);
  const [items, setItems] = useState<Array<{ title: string; slug: string; date?: string }>>([]);
  
  
  useEffect(() => {
    // 只在客户端加载数据
    const fetchData = async () => {
      if (pathname.startsWith('/thoughts')) {
        try {
          const response = await fetch('/api/articles');
          if (response.ok) {
            const data = await response.json();
            setItems(data);
          }
        } catch (error) {
          console.error('Failed to fetch articles:', error);
        }
      } else if (pathname.startsWith('/projects')) {
        // 项目页面的二级导航
        setItems([
          { title: 'Next.js', slug: '#nextjs' },
          { title: 'V0', slug: '#v0' },
          { title: 'SWR', slug: '#swr' },
          { title: 'Nextra', slug: '#nextra' },
          { title: 'AI SDK', slug: '#ai-sdk' },
          { title: 'Satori', slug: '#satori' },
          { title: 'COBE', slug: '#cobe' },
          { title: 'React Wrap Balancer', slug: '#react-wrap-balancer' },
          { title: 'Next View Transitions', slug: '#next-view-transitions' },
        ]);
      } else {
        // 其他页面暂无二级导航
        setItems([]);
      }
    };
    
    fetchData();
  }, [pathname]);
  
  // 根据当前路径显示不同的标题
  let sectionTitle = '';
  if (pathname === '/') {
    sectionTitle = '关于';
  } else if (pathname.startsWith('/thoughts')) {
    sectionTitle = '文章';
  } else if (pathname.startsWith('/projects')) {
    sectionTitle = '项目';
  } else if (pathname.startsWith('/guestbook')) {
    sectionTitle = '留言板';
  } else if (pathname.startsWith('/quotes')) {
    sectionTitle = '摘抄';
  } else if (pathname.startsWith('/visuals')) {
    sectionTitle = '作品集';
  } else {
    sectionTitle = '其他';
  }

  // if (items.length === 0) {
  //   return null;
  // }

  // 仅在 items 存在时输出日志，避免无意义输出
  // console.log("sectionTitle =>", sectionTitle);
  
  return (
    <nav className="pl-6 border-l border-zinc-200 inline-block w-fit ">
      {sectionTitle && <h2 className="text-rurikon-500 font-medium mb-1">{sectionTitle}</h2>}
      <ul className="text-sm ">
        {items.map((item) => {
          // 对于文章页面，检查当前路径是否匹配文章slug
          const isActive = pathname.startsWith('/thoughts/') 
            ? pathname === `/thoughts/${item.slug}`
            : pathname.includes(item.slug);
            
          return (
            <SecondaryItem 
              key={item.slug} 
              href={item.slug.startsWith('#') ? item.slug : `/thoughts/${item.slug}`}
              active={isActive}
            >
              <div className="flex justify-between items-center w-full">
                <span>{item.title}</span>
                {item.date && (
                  <span className="text-xs text-rurikon-200 ml-2 whitespace-nowrap">{item.date}</span>
                )}
              </div>
            </SecondaryItem>
          );
        })}
      </ul>
    </nav>
  );
}