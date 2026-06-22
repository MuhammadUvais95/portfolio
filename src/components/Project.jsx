import React from 'react'
import{ motion } from 'framer-motion'
import { projects } from '../assets/assets'
import ProjectCard from './ProjectCard'

function Project() {
  return (
    <motion.div
    initial={{opacity:0, y: 50}}
    whileInView={{opacity: 1, y:0}}
    transition={{duration:1, ease: "easeOut"}}
    viewport={{once:false, amount:0.2}}
    id='project'
    className='py-20 bg-dark-200'
    >
        <div className='container mx-auto px-6'>
            <h1 className='text-3xl font-bold text-center mb-4'>My <span className='text-purple'>Projects</span></h1>
            <p className='text-gray-400 text-center mb-16'>A selection of my recent work</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map((project, index) => (
                    <div key={index} className='bg-dark-100 rounded-2xl p-3'>
                        <ProjectCard key={index} {...project} />
                       
                    </div>
                ))}

            </div>

        </div>
      
    </motion.div>
  )
}

export default Project
