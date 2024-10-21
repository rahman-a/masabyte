'use client'
import * as React from 'react'
import { cn } from '@/utils'

export interface IMenuBtnHamProps {}

export function MenuHamBtn(props: IMenuBtnHamProps) {
  const [isExpandable, setIsExpandable] = React.useState(false)

  return (
    <div
      className={cn('w-8 cursor-pointer space-y-1.5', {
        'space-y-0': isExpandable,
      })}
      onClick={() => setIsExpandable((prev) => !prev)}
    >
      <div
        className={cn(
          'h-0.5 bg-white rounded-sm rotate-0 transition-transform duration-300 ease-linear',
          {
            'rotate-45': isExpandable,
          }
        )}
      ></div>
      <div
        className={cn(
          'relative h-0.5 bg-white rounded-sm rotate-0 transition-transform duration-300 ease-linear',
          {
            '-rotate-45 -top-[2px]': isExpandable,
          }
        )}
      ></div>
      {/* <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
      <div className='w-8 h-0.5 -translate-y-1 bg-white rounded-sm'></div>
    </div>
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
      <div className='w-8 h-0.5 translate-y-1 bg-white rounded-sm'></div>
    </div>
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
      <div className='w-8 h-0.5 translate-y-3 bg-white rounded-sm'></div>
    </div> */}
    </div>
  )
}
