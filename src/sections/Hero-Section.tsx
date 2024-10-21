import * as React from 'react'
import { GlowBtn } from '@/components/ui/Glow-Btn'
import StarBackground from '@/components/Star-Background'
import { HeroImage } from '@/components/Hero-Image'
import { HeroLogoBadge } from '@/components/Hero-logo-Badge'

export interface IHeroSectionProps {}

export default function HeroSection(props: IHeroSectionProps) {
  return (
    <section className='relative py-24 overflow-x-clip'>
      <div className='pointer-events-none absolute inset-x-0 -bottom-20 h-1/3 bg-gradient-to-t from-black via-black to-transparent lg:h-1/4' />
      <StarBackground className='-top-12' />
      <div className='container max-w-[100rem]'>
        <div className='flex justify-center lg:hidden'>
          <HeroLogoBadge />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          <HeroImage className='flex lg:hidden' />
          <div>
            {/* <HeroLogoBadge className='max-w-fit hidden lg:flex mb-4' /> */}
            <div className='hidden lg:flex h-10 mb-4' />
            <h1 className='text-center lg:text-left text-5xl sm:text-6xl lg:text-7xl font-black font-heading capitalize'>
              the future of block chain is here
            </h1>
            <p className='text-center lg:text-left text-zinc-400 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 mt-4 capitalize'>
              block forge is pioneering smart contract integrity with cutting
              edge data solution
            </p>
            <div className='flex justify-center mt-6'>
              <GlowBtn className='inline-flex md:hidden'>Get Started</GlowBtn>
            </div>
          </div>
          <HeroImage className='hidden lg:flex' />
        </div>
      </div>
    </section>
  )
}
