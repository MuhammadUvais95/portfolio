import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { easeInOut, motion } from 'framer-motion'
import { myImage } from '../assets/assets'
import myresume from '../assets/mdUvais454777.pdf'

function Hero() {
  return (
    <motion.div
    initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.6, ease:"easeOut"}}
    viewport={{once:true}}
    id='home'
    className='min-h-screen flex items-center pt-20 pb-16 pl-10 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]'>
      <div className='container mx-auto flex flex-col px-6 md:flex-row justify-center items-center'>

        {/* Left side content */}
        
        <div className='md:w-1/2 mb-10 md:mb-0'>
        <h1 className='text-4xl md:text-6xl font-bold mb-4  whitespace-nowrap'>
          Hi, I'm<span className='text-purple ml-1'>Muhammad Uvaish Akram</span></h1>

          <TypeAnimation
               sequence={[
                    "MERN Stack Developer",
                     2000,
                     "React Developer",
                      2000,
                      "Node.js Developer",
                      2000,
                     "Full Stack Developer",
                      2000,
                   ]}
                wrapper="h2"
                speed={50}
                 repeat={Infinity}
               className="text-2xl md:text-4xl mb-6 font-semibold text-purple"
               />

        <p className='text-ls text-gray-300 mb-8'>
          I build responsive and user-friendly web applications using modern technologies and clean design principles.
           </p>
        <div className='flex space-x-4'>
            <a href='#project' className='px-6 py-3 rounded-lg bg-purple font-medium
             hover:bg-purple transition duration-700'>View Work</a>
            <a href={myresume} target='_blank' rel='noopener noreferrer' className='px-6 py-3 rounded-lg font-medium border border-purple
             hover:bg-purple/20 transition duration-purple-300'>Resume</a>
        </div>

        </div>

        {/* Right side image */}

        <div className='md:w-1/2 flex justify-center'>
        <div className='relative w-64 h-64 md:w-80 md:h-80'>
          <div className='absolute insert-0 rounded-full bg-gradient-to-r from-purple to-pink opacity-70'>
            <motion.img
            animate={{y:[0, -20, 0]}}
            transition={{
              duration:4,
              repeat:Infinity,
              repeatType: "loop",
              ease: easeInOut
            }}
            className='relative w-64 h-64 rounded-full md:w-80 md:h-80 object-cover object-top z-10 '
            src={myImage}/>

          </div>

        </div>


        </div>

      </div>
      
    </motion.div>
  )
}

export default Hero
