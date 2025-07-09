'use client'

import cn from 'clsx'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

function Item(props: React.ComponentProps<typeof Link>) {
  const pathname = usePathname()
  const href = props.href

  if (typeof href !== 'string') {
    throw new Error('`href` must be a string')
  }

  const isActive = pathname === href || pathname.startsWith(href + '/')

  return (
    <li
      className={cn(
        isActive
          ? 'text-rurikon-800'
          : 'text-rurikon-300 hover:text-rurikon-600',
        'transition-colors hover:transform-none',
        '-mx-2'
      )}
    >
      <Link {...props} className='inline-block w-full px-2' draggable={false} />
    </li>
  )
}

export default function Navbar() {
  return (
    <nav className='mobile:mr-4 sm:mr-8 md:mr-12 w-full mobile:w-12'>
      <ul className='lowercase text-right mobile:sticky top-6 sm:top-8 md:top-10 mb-6 mobile:mb-0 flex gap-2 justify-end mobile:block'>
        <Item href='/'>关于</Item>
        <Item href='/thoughts'>碎碎念</Item>
        <Item href='/visuals'>作品集</Item>
        <Item href='/projects'>项目</Item>
        <Item href='/quotes'>摘抄</Item>
        {/* <Item href='/guestbook'>留言板</Item> */}
      </ul>
    </nav>
  )
}
