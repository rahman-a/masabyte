'use client'
import Image from 'next/image'
import * as React from 'react'
import IsoCubicImage from '@/assets/images/icosahedron.png'
import { ReactComponent as Hexagone } from '@/assets/icons/hexagon.svg'
import { cn, rotate } from '@/utils'

type IHeroImageProps = React.HTMLAttributes<HTMLDivElement>

export function HeroImage({ className }: IHeroImageProps) {
  return (
    <div className={cn('flex justify-center', className)}>
      <div className='inline-flex relative z-0'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0'>
          <Hexagone className='size-[300px] lg:size-[600px] text-fuchsia-500/10 rotate-[15deg]' />
        </div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0'>
          <Hexagone className='size-[400px] lg:size-[800px] text-fuchsia-500/10 rotate-[5deg] stroke-[0.1]' />
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
            'w-[100px] lg:w-[450px] xl:w-[450px] hero-image-rotation'
          )}
        />
      </div>
    </div>
  )
}
