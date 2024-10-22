import fs from 'fs'
import path from 'path'
import HeaderSection from '@/sections/Header-Section'
import HeroSection from '@/sections/Hero-Section'
import FeaturesCardsSections from '@/sections/Features-Cards-Sections'
import FeaturesGrid from '@/sections/Features-Grid'
import TeckStack from '@/sections/Teck-Stack'
import LatestPosts from '@/sections/Latest-Posts'
import CallToAction from '@/sections/CallToAction'
import Footer from '@/sections/Footer'
import { renderMDFile } from '@/utils'

export const metadata = {
  title: 'BlockForge for blockchain',
  description:
    'BlockForge is pioneering smart contract integrity with cutting edge technology',
}

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

export default async function Home() {
  const posts = await getPosts()
  const sortedPosts = posts
    .sort((a, b) => {
      if (a.metadata.pubDate === b.metadata.pubDate) return 0
      return a.metadata.pubDate > b.metadata.pubDate ? -1 : 1
    })
    .slice(0, 4)
  return (
    <>
      <HeaderSection />
      <HeroSection />
      <TeckStack />
      <FeaturesCardsSections />
      <FeaturesGrid />
      <LatestPosts posts={sortedPosts} />
      <CallToAction />
      <Footer />
    </>
  )
}
