import React from 'react'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Projects from '../components/sections/Projects'
import Contact from '../components/sections/Contact'
import Timeline from '../components/sections/Timeline'

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Timeline />
      <Contact />
    </main>
  )
}

export default Home