import { cn } from '@/utils'
import * as React from 'react'

type ITextBtnProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: string
}

export function TextBtn({
  className,
  children,
  color,
  ...props
}: ITextBtnProps) {
  return (
    <button
      className={cn(
        `text-fuchsia-500 text-sm uppercase font-extrabold tracking-wide`,
        {
          'text-lime-500': color === 'lime',
          'text-cyan-500': color === 'cyan',
          'text-violet-500': color === 'violet',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
