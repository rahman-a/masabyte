'use client'
import { CutCornerBtn } from '@/components/ui/CutCorner-Btn'
import { Hexagone } from '@/components/ui/Hexagone'
import React from 'react'

type Props = {}

export default function CallToAction({}: Props) {
  return (
    <section className='py-32 md:py-60 overflow-hidden'>
      <div className='container'>
        <div className='relative'>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <Hexagone size={800} className='hidden md:block' />
            <Hexagone size={600} className='hidden sm:block md:hidden' />
            <Hexagone size={450} className='block sm:hidden' />
          </div>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <Hexagone size={1200} className='hidden md:block' />
            <Hexagone size={900} className='hidden sm:block md:hidden' />
            <Hexagone size={600} className='block sm:hidden rotate-45' />
          </div>
          <div className='flex flex-col gap-6 items-center'>
            <h2 className='font-heading text-4xl md:text-5xl xl:text-6xl text-center font-bold'>
              Ready to <span className='block'>get started?</span>
            </h2>
            <p className='font-heading text-sm md:text-base text-center text-zinc-400 max-w-sm mx-auto'>
              Start building with us using the latest technology of blockchain
            </p>
            <CutCornerBtn className='w-fit'>Get Started</CutCornerBtn>
          </div>
        </div>
      </div>
    </section>
  )
}
