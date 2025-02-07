'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface NavItem {
  name: string
  href: string
}

interface AnimatedNavProps {
  items: NavItem[]
  className?: string
}

export function AnimatedNav({ items, className }: AnimatedNavProps) {
  const pathname = usePathname()

  return (
    <div className={cn('flex items-center gap-1', className)}>
      {items.map((item) => {
        const isActive =
          pathname === item.href || pathname.startsWith(`${item.href}/`)

        return (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              'relative cursor-pointer text-sm font-medium px-3 py-2 rounded-md transition-colors',
              'text-muted-foreground hover:text-[#B31B1B] dark:hover:text-[#B31B1B]',
              isActive && 'text-[#B31B1B] dark:text-[#B31B1B]'
            )}
          >
            {item.name}
            {isActive && (
              <motion.div
                layoutId="nav-lamp"
                className="absolute inset-0 w-full bg-[#B31B1B]/5 dark:bg-[#B31B1B]/10 rounded-md -z-10"
                initial={false}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                }}
              >
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#B31B1B] dark:bg-[#B31B1B] rounded-t-full">
                  <div className="absolute w-12 h-6 bg-[#B31B1B]/20 dark:bg-[#B31B1B]/20 rounded-full blur-md -top-2 -left-2" />
                  <div className="absolute w-8 h-6 bg-[#B31B1B]/20 dark:bg-[#B31B1B]/20 rounded-full blur-md -top-1" />
                  <div className="absolute w-4 h-4 bg-[#B31B1B]/20 dark:bg-[#B31B1B]/20 rounded-full blur-sm top-0 left-2" />
                </div>
              </motion.div>
            )}
          </Link>
        )
      })}
    </div>
  )
}
