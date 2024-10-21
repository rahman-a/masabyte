import { cn } from '@/utils'
import * as React from 'react'

type IGlowBtnProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const GlowBtn = React.forwardRef<HTMLButtonElement, IGlowBtnProps>(
  function GlowBtn({ className, children, ...props }, ref) {
    return (
      <button
        ref={ref}
        className={cn(
          'relative inline-flex h-10 overflow-hidden rounded-lg p-[1px] focus:outline-none',
          className
        )}
        {...props}
      >
        <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
        <span
          className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
               bg-slate-950 px-7 text-sm font-extrabold font-heading tracking-wide uppercase backdrop-blur-3xl gap-2'
        >
          {children}
        </span>
      </button>
    )
  }
)

GlowBtn.displayName = 'GlowBtn'

export { GlowBtn }
