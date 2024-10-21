import * as React from 'react'
import { ReactComponent as Logo } from '@/assets/icons/diamond.svg'
import { MenuHamBtn } from '@/components/Menu-Ham-Btn'
import { GlowBtn } from '@/components/ui/Glow-Btn'
import { ReactComponent as AltLogo } from '@/assets/icons/logo.svg'

export interface IHeaderSectionProps {}

export default function HeaderSection(props: IHeaderSectionProps) {
  return (
    <header className='sticky top-0 z-50 pb-2 pt-4 px-4 backdrop-blur-lg'>
      <div className='container'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            {/* <Logo className='size-11' /> */}
            <AltLogo />
            {/* <div className='flex flex-col items-center justify-center gap-1'>
              <h3 className='font-heading text-xl font-bold -translate-y-2 !m-0'>
                MasaByte
              </h3>
              <p className='text-xs font-body text-zinc-500 -mt-4 tracking-tighter'>
                Diamonds standards
              </p>
            </div> */}
          </div>
          <div className='flex items-center gap-3'>
            <GlowBtn className='hidden md:inline-flex'>Get Started</GlowBtn>
            <MenuHamBtn />
          </div>
        </div>
      </div>
    </header>
  )
}
