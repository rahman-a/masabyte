import * as React from 'react'
import Image from 'next/image'
import { cn } from '@/utils'
import { TextBtn } from './ui/Text-Btn'
import { Card } from './Card'

export interface IFeatureCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  image: string
  title: string
  description: string
  color: string
}

export function FeatureCard({
  image,
  title,
  description,
  color,
  className,
}: IFeatureCardProps) {
  return (
    <Card color={color} className={className}>
      <figure className='relative flex justify-center'>
        <div
          className='absolute rounded-[100%] h-4 w-[calc(100%-100px)] top-[calc(100%+16px)] 
        bg-zinc-800/70 group-hover:bg-zinc-800/30 transition duration-300 
        [mask-image:radial-gradient(closest-side,black,transparent)]'
        />
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className='size-40 -mt-24 group-hover:-translate-y-6 transition duration-300'
        />
      </figure>
      <div className='pt-16'>
        <h3 className='font-heading font-extrabold text-3xl'>{title}</h3>
        <p className='pt-2 pb-12 font-heading text-zinc-500'>{description}</p>
      </div>
    </Card>
  )
}
