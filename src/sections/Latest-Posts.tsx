/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Post } from '@/components/Post'
import { cn } from '@/utils'
import { CutCornerBtn } from '@/components/ui/CutCorner-Btn'

type Props = {
  posts: any[]
}

export default function LatestPosts({ posts }: Props) {
  const postsRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: postsRef,
    offset: ['start end', 'start center'],
  })

  const marginTranslate = useTransform(scrollYProgress, [0, 1], [0, 64])

  return (
    <section className='pt-48 pb-28'>
      <div className='container mx-auto'>
        <div>
          <h2 className='font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-center mx-auto max-w-2xl'>
            Your portal to everything blockchain.
          </h2>
          <p className='text-zinc-400 text-center mx-auto max-w-lg xl:text-lg mt-8'>
            Keep up with newest trend, updates and insights in the blockchain
            world, uppdated weekly
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8 mt-24'>
            <div className='flex flex-col gap-8'>
              {posts.map((post, postIndex) => (
                <div
                  key={postIndex}
                  className={cn({
                    hidden: postIndex % 2 === 1,
                  })}
                >
                  <Post
                    category={post.metadata.category}
                    title={post.metadata.title}
                    description={post.metadata.description}
                  />
                </div>
              ))}
            </div>
            <motion.div
              className='flex flex-col gap-8'
              style={{
                marginTop: marginTranslate,
              }}
              ref={postsRef}
            >
              {posts.map((post, postIndex) => (
                <div
                  key={postIndex}
                  className={cn({
                    hidden: postIndex % 2 === 0,
                  })}
                >
                  <Post
                    category={post.metadata.category}
                    title={post.metadata.title}
                    description={post.metadata.description}
                  />
                </div>
              ))}
            </motion.div>
          </div>
          <div className='flex justify-center mt-24'>
            <CutCornerBtn>Read more</CutCornerBtn>
          </div>
        </div>
      </div>
    </section>
  )
}
