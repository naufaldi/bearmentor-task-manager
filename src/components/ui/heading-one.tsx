import { cn } from '@/lib/utils'
import React from 'react'

export const HeadingOne = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className={cn('scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl')}>{children}</h1>
  )
}
