import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skill from '../components/Skill'
import Project from '../components/Project'
import Education from '../components/Education'
import Contact from '../components/Contact'

function home() {
  return (
    <div>
     <Hero />
     <About />
     <Skill />
     <Project />
     <Education />
     <Contact />
    </div>
  )
}

export default home
