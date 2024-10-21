import * as React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/utils'

export interface IHexagoneProps {
  className?: string
  size?: number
}

export function Hexagone({ className, size }: IHexagoneProps) {
  const pathRef = React.useRef<SVGPathElement>(null)
  const [totalPathLength, setTotalPathLength] = React.useState(0)

  React.useLayoutEffect(() => {
    if (pathRef.current) {
      const pathLength = pathRef.current.getTotalLength()
      const scaledPathLength = (pathLength * size!) / 82
      setTotalPathLength(scaledPathLength)
    }
  }, [])
  return (
    <div className={className}>
      <svg
        width='82'
        height='100%'
        viewBox='0 0 82 72'
        fill='none'
        strokeWidth='0.2px'
        stroke='currentColor'
        xmlns='http://www.w3.org/2000/svg'
        xmlSpace='preserve'
        preserveAspectRatio='none'
        className='text-fuchsia-500/10'
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <path
          ref={pathRef}
          d='M3.44337 38.5C2.55021 36.953 2.55021 35.047 3.44338 33.5L20.0566 4.72501C20.9498 3.178 22.6004 2.22501 24.3868 2.22501H57.6132C59.3996 2.22501 61.0502 3.178 61.9434 4.72501L78.5566 33.5C79.4498 35.047 79.4498 36.953 78.5566 38.5L61.9434 67.275C61.0502 68.822 59.3996 69.775 57.6132 69.775H24.3867C22.6004 69.775 20.9498 68.822 20.0566 67.275L3.44337 38.5Z'
        />
      </svg>
      <motion.svg
        width='82'
        height='100%'
        viewBox='0 0 82 72'
        fill='none'
        strokeWidth='0.2px'
        stroke='currentColor'
        xmlns='http://www.w3.org/2000/svg'
        xmlSpace='preserve'
        preserveAspectRatio='none'
        className='absolute inset-0 text-fuchsia-500/20'
        initial={{ strokeDashoffset: 0 }}
        animate={{ strokeDashoffset: totalPathLength! * -1 }}
        transition={{
          duration: 50,
          ease: 'linear',
          repeat: Infinity,
        }}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          strokeDasharray: `40 ${totalPathLength + 100}`,
        }}
      >
        <path d='M3.44337 38.5C2.55021 36.953 2.55021 35.047 3.44338 33.5L20.0566 4.72501C20.9498 3.178 22.6004 2.22501 24.3868 2.22501H57.6132C59.3996 2.22501 61.0502 3.178 61.9434 4.72501L78.5566 33.5C79.4498 35.047 79.4498 36.953 78.5566 38.5L61.9434 67.275C61.0502 68.822 59.3996 69.775 57.6132 69.775H24.3867C22.6004 69.775 20.9498 68.822 20.0566 67.275L3.44337 38.5Z' />
      </motion.svg>
    </div>
  )
}
