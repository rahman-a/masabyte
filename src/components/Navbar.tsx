'use client'
import * as React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { MenuHamBtn } from './Menu-Ham-Btn'
import { Hexagone } from './ui/Hexagone'

export interface INavbarProps {}

const links = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'Blog',
    href: '#',
  },
  {
    name: 'Careers',
    href: '#',
  },
  {
    name: 'Contacts',
    href: '#',
  },
]

export function Navbar(props: INavbarProps) {
  const [isExpandable, setIsExpandable] = React.useState(false)

  React.useEffect(() => {
    if (isExpandable) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isExpandable])
  return (
    <>
      <MenuHamBtn
        isExpandable={isExpandable}
        setIsExpandable={setIsExpandable}
      />
      <AnimatePresence>
        {isExpandable && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              ease: 'linear',
            }}
            className='fixed inset-0 w-full h-screen z-10 '
          >
            <div
              className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            bg-zinc-950/95 opacity-95 w-11/12 h-[calc(100%-8rem)] rounded-lg overflow-hidden'
            >
              <Hexagone size={800} className='absolute z-0' />
              <Hexagone size={800} className='absolute right-0 z-0' />
              <div className='w-full h-full flex items-center justify-center'>
                <nav className='flex flex-col items-center gap-10'>
                  {links.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ translateY: 10, opacity: 0 }}
                      animate={{ translateY: 0, opacity: 1 }}
                      transition={{
                        ease: 'easeIn',
                        duration: 0.5,
                        delay: 0.2 * index,
                      }}
                      className='relative group'
                    >
                      <span
                        className='absolute -left-4 inset-0 bg-gradient-to-r from-sky-800 to-zinc-400 -z-10 rounded-md h-[calc(100%+0.5rem)]
                        w-[calc(100%+2rem)] transition duration-300 origin-left scale-0 group-hover:scale-100'
                      />
                      <Link
                        className='text-4xl md:text-5xl font-heading capitalize text-zinc-300 hover:text-zinc-200'
                        href={link.href}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
