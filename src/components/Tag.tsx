import { cn } from '@/utils'
import * as React from 'react'

export interface ITagProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string
}

export function Tag({ children, className, color }: ITagProps) {
  return (
    <div
      className={cn(
        'text-sm uppercase text-fuchsia-500 bg-fuchsia-500/30 rounded-full py-0.5 px-3 shadow-md',
        {
          'text-lime-500 bg-lime-500/30': color === 'lime',
          'text-cyan-500 bg-cyan-500/30': color === 'cyan',
          'text-violet-500 bg-violet-500/30': color === 'violet',
        },
        className
      )}
    >
      {children}
    </div>
  )
}
