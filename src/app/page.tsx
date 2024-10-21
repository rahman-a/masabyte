import HeaderSection from '@/sections/Header-Section'
import HeroSection from '@/sections/Hero-Section'
import FeaturesCardsSections from '@/sections/Features-Cards-Sections'
import FeaturesGrid from '@/sections/Features-Grid'
import TeckStack from '@/sections/Teck-Stack'
import LatestPosts from '@/sections/Latest-Posts'

export const metadata = {
  title: 'BlockForge for blockchain',
  description:
    'BlockForge is pioneering smart contract integrity with cutting edge technology',
}

export default function Home() {
  return (
    <>
      <HeaderSection />
      <HeroSection />
      <TeckStack />
      <FeaturesCardsSections />
      <FeaturesGrid />
      <LatestPosts />
    </>
  )
}
