'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FeatureCard } from '@/components/Feature-Card'
import { cards } from '@/data/feature-cards'
import { CardsSliderIndicator } from '@/components/Cards-Slider-Indicators'

type Props = {}

export default function FeaturesCardsSections({}: Props) {
  const [selectedCardIndex, setSelectedCardIndex] = React.useState(0)
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
              <div
                key={title}
                className='transition-all duration-500'
                style={{
                  transform: `translateX(calc((-100% - 2rem) * ${selectedCardIndex}))`,
                }}
              >
                <FeatureCard
                  title={title}
                  description={description}
                  image={image}
                  color={color}
                  className='max-w-[23rem] md:max-w-sm'
                />
              </div>
            ))}
          </div>
        </div>
        <div className='flex justify-center mt-10'>
          <CardsSliderIndicator
            selectedCardIndex={selectedCardIndex}
            setSelectedCardIndex={setSelectedCardIndex}
            cardsLength={cards.length}
          />
        </div>
      </div>
    </section>
  )
}
