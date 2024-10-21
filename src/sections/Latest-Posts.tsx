import React from 'react'
import { Post } from '@/components/Post'
import fs from 'fs'
import path from 'path'
import { cn, renderMDFile } from '@/utils'
import { CutCornerBtn } from '@/components/ui/CutCorner-Btn'

type Props = {}

const getPosts = async () => {
  const posts = []
  const allDirs = fs.readdirSync(
    path.join(process.cwd(), 'src/content', 'blog')
  )
  for (const dir of allDirs) {
    const blog = fs.readFileSync(
      path.join(process.cwd(), 'src/content', `blog/${dir}`),
      'utf-8'
    )
    const post = await renderMDFile(blog)
    posts.push(post)
  }
  return posts
}

export default async function LatestPosts({}: Props) {
  const posts = await getPosts()
  const sortedPosts = posts
    .sort((a, b) => {
      if (a.metadata.pubDate === b.metadata.pubDate) return 0
      return a.metadata.pubDate > b.metadata.pubDate ? -1 : 1
    })
    .slice(0, 4)
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
              {sortedPosts.map((post, postIndex) => (
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
            <div className='flex flex-col gap-8 mt-8'>
              {sortedPosts.map((post, postIndex) => (
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
            </div>
          </div>
          <div className='flex justify-center mt-24'>
            <CutCornerBtn>Read more</CutCornerBtn>
          </div>
        </div>
      </div>
    </section>
  )
}
