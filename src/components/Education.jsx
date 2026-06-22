import React from 'react'
import { degrees, motion } from 'framer-motion'
import { education } from '../assets/assets'
import { FaGraduationCap } from "react-icons/fa";



function Education() {
  return (
    <motion.div
    initial={{opacity:0, y:1}}
    whileInView={{y:0, opacity:1}}
    transition={{duration:1, ease: "easeInOut"}}
    viewport={{once:true, amount: 0.2}}
    id='education'
    className='py-20 bg-dark-100'
    >
        <div className='container mx-auto px-6'>
             <h1 className='text-3xl font-bold text-center mb-4'>My <span className='text-purple'>Education</span></h1>
             <p className='text-gray-400 text-center mb-16'>My educational background and continuous journey in software development.</p>

             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid cols-3 gap-8 mb-4'>
              {education.map((data, index) => (
                <div className='bg-dark-300 rounded-2xl border border-dark-200 transition-all duration-300 
                hover:border-purple-500 hover:-translate-y-2 cursor-pointer p-6'>
                  <div className='flex items-center gap-4 mb-4'>
                    <div className='w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center'>
                          <FaGraduationCap  className='text-white text-lg'/>
                    </div>
                    
                  <div>
                      <h3 className='text-xl font-bold'>{data.degree}</h3>
                      <p className='text-purple'>{data.institution}</p>
                  </div>
                  </div>
                   <span className="inline-block bg-purple-600/20 text-purple px-3 py-1
                    rounded-full text-sm mb-4">
                       {data.duration}
                       </span>
                       <p className='text-gray-400'>{data.description}</p>
                  
      

                </div>
              ))}

             </div>


        </div>
      
    </motion.div>
  )
}

export default Education
