import React from 'react'
import Hero from '../components/Hero/Hero'
import { SearchInput } from '../components/Input'
import Layout from '../layouts'

const Home = () => {
  return (
    <Layout>
      <Hero>
        <SearchInput/>
      </Hero>
    </Layout>
  )
}

export default Home