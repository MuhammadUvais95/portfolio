import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../assets/assets'
import { data } from 'react-router-dom'

function Skill() {
  return (
    <motion.div
       initial={{ opacity: 0, y: 50 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 1, ease: "easeOut" }}
       viewport={{ once: false, amount: 0.2}}
       id="skill"
       className='py-20 bg-dark-100'
    >
        <div className='container mx-auto px-6'>
            <h2 className='text-3xl text-center font-bold mb-4'>My <span className='text-purple'>Skills</span></h2>
            <p className='text-gray-400 mb-16 text-center '>Technologies I work with to bring ideas to life</p>

            <div className='grid grid-cols-1 p-2 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {skills.map((skill, index) => (
                <div key={index} className='bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer'>
                  <div className='flex items-center mb-4'>
                    <skill.icon className='w-12 h-12 text-purple mr-6'/>
                    <h3 className='text-xl font-semibold '>{skill.title}</h3>
                  </div>
                  <p className='text-gray-400'>{skill.description}</p>

                   <div className=' flex flex-wrap gap-2 mt-4'>
                    {skill.tags.map((tech) => (
                        <span className='px-3 py-1 bg-dark-400 rounded-full text-sm'>{tech}</span>
                      
                    ))}
                  </div>


                 



                </div>

          
              ))}


            </div>

        </div>
      
    </motion.div>
  )
}

export default Skill
