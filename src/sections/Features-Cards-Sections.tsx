import React from 'react'
import { FeatureCard } from '@/components/Feature-Card'
import { cards } from '@/data/feature-cards'

type Props = {}

export default function FeaturesCardsSections({}: Props) {
  return (
    <section className='mt-16 py-12 overflow-x-clip'>
      <div className='container'>
        <div className='flex justify-center'>
          <h2 className='font-heading text-4xl font-bold text-center max-w-2xl'>
            Discover the future of the blockchain with blockforge.
          </h2>
        </div>
        <div className='mt-32 flex'>
          <div className='flex flex-none gap-8'>
            {cards.map(({ title, description, image, color }) => (
              <FeatureCard
                title={title}
                description={description}
                image={image}
                color={color}
                key={title}
                className='max-w-[23rem] md:max-w-sm'
              />
            ))}
          </div>
        </div>
        <div className='flex justify-center mt-10'>
          {/* <div className='bg-slate-900 flex md:hidden items-center gap-4 px-2 py-1 rounded-md'>
            <div className='size-2 rounded-full bg-zinc-200 cursor-pointer' />
            <div className='size-2 rounded-full bg-zinc-500 cursor-pointer' />
            <div className='size-2 rounded-full bg-zinc-500 cursor-pointer' />
            <div className='size-2 rounded-full bg-zinc-500 cursor-pointer' />
          </div> */}
          <div
            className='w-32 bg-slate-900 flex items-center 
          justify-between px-2 py-1 rounded-full'
          >
            <button className='text-zinc-500 hover:text-zinc-300'>
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
            <button className='text-zinc-500 hover:text-zinc-300'>
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
        </div>
      </div>
    </section>
  )
}
