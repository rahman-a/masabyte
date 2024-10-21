import * as React from 'react'
import { cn } from '@/utils'
import { ReactComponent as CutCorner } from '@/assets/icons/cut-corner.svg'

type ICutCornerBtnProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const CutCornerBtn = React.forwardRef<HTMLButtonElement, ICutCornerBtnProps>(
  function GlowBtn({ className, children, ...props }, ref) {
    return (
      <button
        className={cn(
          `relative font-extrabold font-heading tracking-wide uppercase text-sm cta-btn 
          shadow-sm overflow-hidden`,
          className
        )}
        {...props}
        ref={ref}
      >
        <div
          className='absolute inset-0 outline outline-[3px] outline-sky-900 -outline-offset-[3px] 
          [mask-image:linear-gradient(225deg,transparent,transparent_10px,black_10px)] '
        />
        <CutCorner className='absolute top-0 right-0 text-sky-900' />
        <span
          className='inline-flex px-4 py-2 items-center justify-center 
        h-full w-full bg-sky-500/10 leading-6 text-white'
        >
          {children}
        </span>
      </button>
    )
  }
)

CutCornerBtn.displayName = 'CutCornerBtn'

export { CutCornerBtn }
