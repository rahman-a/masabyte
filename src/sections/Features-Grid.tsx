'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { CutCornerBtn } from '@/components/ui/CutCorner-Btn'
import { TextBtn } from '@/components/ui/Text-Btn'
import TorusKnot from '@/assets/images/torus-knot.png'
import Hemisphere from '@/assets/images/hemisphere.png'
import Cone from '@/assets/images/cone.png'

type Props = {}

const list = [
  'Experience unparalleled security and scalability',
  'fully benefit from scalable network effects',
  'unlock the potential of decentralized networks',
]

export default function FeaturesGrid({}: Props) {
  const torusKnotRef = useRef(null)
  const firstHemisphereRef = useRef(null)
  const coneRef = useRef(null)
  const secondHemisphereRef = useRef(null)
  const { scrollYProgress: torusScrollYProgress } = useScroll({
    target: torusKnotRef,
    offset: ['start end', 'end start'],
  })
  const { scrollYProgress: firstHemisphereScrollYProgress } = useScroll({
    target: firstHemisphereRef,
    offset: ['start end', 'end start'],
  })
  const { scrollYProgress: coneScrollYProgress } = useScroll({
    target: coneRef,
    offset: ['start end', 'end start'],
  })
  const { scrollYProgress: secondHemisphereScrollYProgress } = useScroll({
    target: secondHemisphereRef,
    offset: ['start end', 'end start'],
  })

  const torusRotate = useTransform(torusScrollYProgress, [0, 1], [0, 20])
  const coneRotate = useTransform(coneScrollYProgress, [0, 1], [0, 20])
  const firstHemisphereRotate = useTransform(
    firstHemisphereScrollYProgress,
    [0, 1],
    [-50, -20]
  )
  const secondHemisphereRotate = useTransform(
    secondHemisphereScrollYProgress,
    [0, 1],
    [20, 0]
  )
  return (
    <section className='mt-24 overflow-x-clip'>
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-3 xl:gap-40'>
          <div className='col-span-2'>
            <h2 className='text-4xl font-heading font-bold md:text-5xl'>
              Empowering the future of blockchain
            </h2>
            <p className='text-zinc-400 xl:text-lg mt-10'>
              Blockforge provides robust and secure infrastructure to support
              the next generation of decentralized application
            </p>
            <ul className='flex flex-col gap-4 mt-8'>
              {list.map((text) => (
                <li key={text} className='flex items-center gap-4'>
                  <div className='flex items-center justify-center flex-none size-5 rounded-full outline outline-zinc-500/50 outline-2'>
                    <div className='size-1.5 bg-indigo-900 rounded-full' />
                  </div>
                  <span className='text-white'>{text}</span>
                </li>
              ))}
            </ul>
            <div className='flex w-full items-center gap-10 mt-12'>
              <CutCornerBtn>Get Started</CutCornerBtn>
              <TextBtn className='text-indigo-500'>Learn more</TextBtn>
            </div>
          </div>
          <div className='relative hidden md:block z-0 xl:-top-10'>
            <motion.div ref={torusKnotRef} style={{ rotate: torusRotate }}>
              <Image
                src={TorusKnot}
                alt='cylinder'
                width={500}
                height={500}
                className='size-80 xl:size-96 max-w-none'
              />
            </motion.div>
            <motion.div
              ref={firstHemisphereRef}
              style={{ rotate: firstHemisphereRotate }}
              className='relative -mt-20 -scale-x-[1] -z-10'
            >
              <Image
                src={Hemisphere}
                alt='cubiod'
                width={500}
                height={500}
                className='relative size-64 xl:size-72 max-w-none '
              />
            </motion.div>
          </div>
        </div>
        <div>
          <div className='grid grid-cols-1 md:grid-cols-3 mt-24 xl:gap-40'>
            <div className='relative hidden md:block z-0'>
              <div className='absolute -top-20 -left-24 xl:-top-24'>
                <motion.div ref={coneRef} style={{ rotate: coneRotate }}>
                  <Image
                    src={Cone}
                    alt='cylinder'
                    width={500}
                    height={500}
                    className='size-80 xl:size-96 max-w-none'
                  />
                </motion.div>
                <motion.div
                  className='relative -mt-20  -z-10'
                  ref={secondHemisphereRef}
                  style={{ rotate: secondHemisphereRotate }}
                >
                  <Image
                    src={Hemisphere}
                    alt='cubiod'
                    width={500}
                    height={500}
                    className=' size-64 xl:size-72 max-w-none '
                  />
                </motion.div>
              </div>
            </div>
            <div className='col-span-2'>
              <h2 className='text-4xl md:text-5xl font-heading font-bold'>
                Blockforge leads the way
              </h2>
              <div className='flex flex-col gap-10 mt-10'>
                <p className='text-zinc-400 xl:text-lg'>
                  Blockforge is dedicated to supporting the evolution of web3
                  application by delivering the necessary infrastructure and
                  security for web3
                </p>
                <p className='text-zinc-400 xl:text-lg'>
                  Blockforge champions web3 for everyone. as decentralized
                  blockchain scaling platform blockforge enables, user-friendly
                  dApp with low transaction costs, all while ensuring robust
                  security
                </p>
              </div>
              <div className='flex w-full items-center gap-10 mt-12'>
                <CutCornerBtn>Get Started</CutCornerBtn>
                <TextBtn className='text-indigo-500'>Learn more</TextBtn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
