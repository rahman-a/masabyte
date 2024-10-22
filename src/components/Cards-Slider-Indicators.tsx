import { cn } from '@/utils'
import * as React from 'react'

export interface ICardsSliderIndicatorProps
  extends React.HTMLAttributes<HTMLDivElement> {
  selectedCardIndex: number
  setSelectedCardIndex: React.Dispatch<React.SetStateAction<number>>
  cardsLength: number
}

export function CardsSliderIndicator({
  selectedCardIndex,
  setSelectedCardIndex,
  cardsLength,
  className,
  ...props
}: ICardsSliderIndicatorProps) {
  return (
    <div
      className={cn(
        'w-fit bg-slate-900 flex items-center justify-between px-2 py-1 rounded-full',
        className
      )}
      {...props}
    >
      <button
        onClick={() =>
          setSelectedCardIndex((prev) =>
            selectedCardIndex <= 0 ? cardsLength - 1 : prev - 1
          )
        }
        disabled={selectedCardIndex <= 0}
        className='text-zinc-500 hover:text-zinc-300 disabled:text-zinc-800'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='size-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.75 19.5 8.25 12l7.5-7.5'
          />
        </svg>
      </button>
      <div className='relative bg-slate-900 flex items-center gap-4 px-2 py-1 rounded-md'>
        {[...Array(cardsLength).fill(0)].map((_, index) => (
          <button
            key={index}
            onClick={() => setSelectedCardIndex(index)}
            className={cn('size-2 rounded-full bg-zinc-500 cursor-pointer', {
              'bg-zinc-200': selectedCardIndex === index,
            })}
          />
        ))}
      </div>
      <button
        onClick={() =>
          setSelectedCardIndex((prev) =>
            selectedCardIndex >= cardsLength - 1 ? 0 : prev + 1
          )
        }
        disabled={selectedCardIndex >= cardsLength - 1}
        className='text-zinc-500 hover:text-zinc-300 disabled:text-zinc-800'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='size-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m8.25 4.5 7.5 7.5-7.5 7.5'
          />
        </svg>
      </button>
    </div>
  )
}
