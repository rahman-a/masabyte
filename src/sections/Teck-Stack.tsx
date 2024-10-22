import Image from 'next/image'
import React from 'react'
import { stack_logos } from '@/data/stack-logos'
import Link from 'next/link'

type Props = {}

export default function TeckStack({}: Props) {
  return (
    <section className='pt-32 md:pb-12'>
      <div className='container mx-auto px-4 md:px-8 py-12'>
        <h2 className='font-heading text-4xl text-gray-500 font-bold text-center'>
          Our Teck Stack
        </h2>
        <div className='relative mt-6'>
          <div className='absolute inset-0 bg-[#02091a] [mask-image:linear-gradient(90deg,transparent,transparent_5%,black_5%,transparent_100%)]' />
          <div className='group flex overflow-hidden p-2 [--gap:2.5rem] [gap:var(--gap)] flex-row max-w-full [--duration:40s]'>
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className='flex flex-none items-center justify-around [gap:var(--gap)] animate-marquee'
              >
                {stack_logos.map((logo) => (
                  <Link key={logo.id} href={logo.url} target='_blank'>
                    <Image
                      key={logo.id}
                      src={logo.src}
                      alt={logo.name}
                      width={100}
                      height={85}
                      className='h-auto max-w-28 dark:brightness-50 object-scale-down dark:invert grayscale hover:brightness-0 opacity-30'
                      style={{ color: 'transparent' }}
                    />
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
