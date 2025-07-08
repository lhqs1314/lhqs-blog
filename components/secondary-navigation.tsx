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
  const pathname = usePathname()
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
  
  // 如果没有二级导航项，则不显示
  if (items.length === 0) {
    return null;
  }
  
  // 根据当前路径显示不同的标题
  let sectionTitle = '';
  if (pathname.startsWith('/thoughts')) {
    sectionTitle = '文章';
  } else if (pathname.startsWith('/projects')) {
    sectionTitle = '项目';
  }
  
  return (
    <nav>
      {sectionTitle && <h2 className="text-rurikon-500 font-medium mb-4">{sectionTitle}</h2>}
      <ul className="text-sm">
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
              {item.title}
              {item.date && (
                <span className="text-xs text-rurikon-200 ml-2">{item.date}</span>
              )}
            </SecondaryItem>
          );
        })}
      </ul>
    </nav>
  );
}