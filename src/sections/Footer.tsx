import React from 'react'
import Link from 'next/link'
import { ReactComponent as Logo } from '@/assets/icons/logo.svg'
import { ReactComponent as Discord } from '@/assets/icons/discord.svg'
import { ReactComponent as XIcon } from '@/assets/icons/x.svg'
import { ReactComponent as Youtube } from '@/assets/icons/youtube.svg'

const socialIcons = [
  {
    id: '1',
    icon: <Discord />,
  },
  { id: '2', icon: <XIcon /> },
  { id: '3', icon: <Youtube /> },
]

type Props = {}

export default function Footer({}: Props) {
  return (
    <footer className=' bg-black'>
      <div className='container'>
        <div className='py-16 flex flex-col justify-between gap-10 md:gap-16'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <div>
              <Logo />
            </div>
            <nav className='hidden md:flex items-center justify-center gap-4 '>
              <Link href='#'>Home</Link>
              <Link href='#'>Blog</Link>
              <Link href='#'>Careers</Link>
              <Link href='#'>Contact</Link>
            </nav>
          </div>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p>&copy; 2024, all rights reserved</p>
            <div className='flex items-center gap-4 [&>a]:cursor-pointer'>
              {socialIcons.map((icon) => (
                <Link
                  key={icon.id}
                  href='#'
                  className='[&>svg]:fill-zinc-400 [&>svg]:size-6 size-10 bg-zinc-900 flex items-center 
                justify-center rounded-full hover:underline'
                >
                  {icon.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
