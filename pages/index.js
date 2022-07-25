import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import Hero from '@/components/Hero'
import OpenPage from '@/components/HeroLPVC'
import { Feature } from '@/components/LocationFeature'
import IntroMap  from "@/components/maps/IntroMap"
import DeckTest from '@/components/DeckTest'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <OpenPage />
      <Feature />
      <DeckTest />



    
    </>
  )
}
