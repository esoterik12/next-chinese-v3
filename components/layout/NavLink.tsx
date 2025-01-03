'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

interface NavLink {
  href: string
  className?: string
  children: React.ReactNode
}

const NavLink = ({ href, children, className, ...props }: NavLink) => {
  const pathname = usePathname()
  const isActiveLink = href === pathname

  return (
    <Link
      {...props}
      href={href}
      className={clsx(
        className,
        isActiveLink && 'underline decoration-sky-500'
      )}
    >
      {children}
    </Link>
  )
}

export default NavLink
