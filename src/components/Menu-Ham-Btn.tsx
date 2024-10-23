'use client'
import * as React from 'react'
import { cn } from '@/utils'

export interface IMenuBtnHamProps {
  isExpandable: boolean
  setIsExpandable: React.Dispatch<React.SetStateAction<boolean>>
}

export function MenuHamBtn({
  isExpandable,
  setIsExpandable,
}: IMenuBtnHamProps) {
  return (
    <div
      className={cn('w-8 h-2 cursor-pointer space-y-1.5 z-20', {
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
    </div>
  )
}
