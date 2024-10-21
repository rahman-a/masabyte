import * as React from 'react'
import { TextBtn } from './ui/Text-Btn'
import { cn } from '@/utils'

export interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string
  btnText?: string
}

export function Card({
  className,
  color,
  btnText,
  children,
  ...props
}: ICardProps) {
  return (
    <div
      className={cn('relative z-0 p-8 rounded-lg group shadow-md', className)}
      {...props}
    >
      <div
        className='absolute inset-0 rounded-2xl -z-10 bg-gray-950 
      [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]'
      />
      <div
        className={cn(
          `absolute bg-fuchsia-500 size-16 rounded-2xl top-1.5 right-1.5 -z-20`,
          {
            'bg-lime-500': color === 'lime',
            'bg-cyan-500': color === 'cyan',
            'bg-violet-500': color === 'violet',
          }
        )}
      />
      <div
        className={cn(
          `absolute bg-fuchsia-500 blur-lg opacity-0 group-hover:opacity-100 
      transition duration-300 size-16 rounded-2xl top-1.5 right-1.5 -z-20`,
          {
            'bg-lime-500': color === 'lime',
            'bg-cyan-500': color === 'cyan',
            'bg-violet-500': color === 'violet',
          }
        )}
      />
      <div>{children}</div>
      <div className='flex items-center justify-between'>
        <TextBtn color={color}>{btnText || 'Learn more'}</TextBtn>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='size-6 text-slate-700 -translate-x-6 group-hover:translate-x-0 
            transition duration-300 group-hover:text-slate-400 cursor-pointer'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
          />
        </svg>
      </div>
    </div>
  )
}
