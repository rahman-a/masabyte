import * as React from 'react'
import { ReactComponent as Diamond } from '@/assets/icons/diamond.svg'
import { cn } from '@/utils'

type IHeroLogoBadgeProps = React.HTMLAttributes<HTMLDivElement>

export function HeroLogoBadge({ className }: IHeroLogoBadgeProps) {
  return (
    <div
      className={cn(
        `flex justify-center items-center gap-2 mb-12  text-zinc-00 shadow-sm outline outline-1 p-1 
          outline-zinc-700 rounded-full min-w-40`,
        className
      )}
    >
      <Diamond className='size-[20px] text-white translate-y-0.5' />
      <p
        className='w-fit uppercase tracking-wider text-sm font-bold 
          font-logirent translate-y-0.5'
      >
        Masa Byte
      </p>
    </div>
  )
}
