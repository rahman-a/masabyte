'use client'
import Image from 'next/image'
import * as React from 'react'
import IsoCubicImage from '@/assets/images/icosahedron.png'
import { cn } from '@/utils'
import { Hexagone } from './ui/Hexagone'

type IHeroImageProps = React.HTMLAttributes<HTMLDivElement>

export function HeroImage({ className }: IHeroImageProps) {
  return (
    <div className={cn('flex justify-center', className)}>
      <div className='inline-flex relative z-0'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0'>
          <Hexagone
            size={600}
            className='hidden md:block [&_svg]:rotate-[15deg]'
          />
          <Hexagone
            size={400}
            className='hidden sm:block md:hidden [&_svg]:rotate-[15deg]'
          />
          <Hexagone
            size={200}
            className='block sm:hidden [&_svg]:rotate-[15deg] [&_svg]:stroke-[0.5]'
          />
        </div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0'>
          <Hexagone
            size={800}
            className='hidden sm:block [&_svg]:rotate-[5deg] [&_svg]:stroke-[0.1]'
          />
        </div>
        <Image
          src={IsoCubicImage}
          alt='hero image'
          width={500}
          height={500}
          className='absolute w-[calc(100%+16px)] md:w-[calc(100%-10px)] max-w-none top-0 -left-4 md:-left-8
            saturate[10%] brightness-[4%] hue-rotate-[240deg] -z-10
            [mask-image:linear-gradient(transparent,rgba(0,0,0,0.7),transparent)] hero-image-rotation'
        />
        <Image
          src={IsoCubicImage}
          alt='hero image'
          width={500}
          height={500}
          unoptimized
          id='hero-image'
          className={cn(
            'w-[100px] lg:w-[450px] xl:w-[450px] max-w-none hero-image-rotation'
          )}
        />
      </div>
    </div>
  )
}
