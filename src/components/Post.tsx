import * as React from 'react'
import { Card } from './Card'
import { Tag } from './Tag'
import { getPostColorFromCategory } from '@/utils'

export interface IPostProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  category: string
}

export function Post({
  category,
  title,
  description,
  className,
  ...props
}: IPostProps) {
  return (
    <Card
      color={getPostColorFromCategory(category)}
      className={className}
      btnText='Read more'
      {...props}
    >
      <div>
        <Tag className='w-fit' color={getPostColorFromCategory(category)}>
          {category}
        </Tag>
        <h3 className='text-4xl font-heading tracking-wide font-extrabold mt-10'>
          {title}
        </h3>
        <p className='text-zinc-400 pt-8 pb-16'>{description}</p>
      </div>
    </Card>
  )
}
