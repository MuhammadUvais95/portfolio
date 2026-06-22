import React from 'react'
import { motion } from 'framer-motion'
import { aboutInfo, myImage } from '../assets/assets'
import { data } from 'react-router-dom'

function About() {
    return (
        <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
            }}
            id='about'
            className='py-20 bg-dark-200 '
        >
            <div className='container mx-0 px-6 '>
                <h2 className='text-3xl font-bold text-center mb-4'>About <span className='text-purple'>Me</span></h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16 '>Get to know more about my background and passion</p>

                {/* image + Journey */}

                <div className='flex flex-col md:flex-row items-center gap-12'>

                    {/* Image */}
                   
                    <div className="relative md:w-1/2 flex justify-center">
                    <div className="absolute inset-0 bg-purple/20 blur-3xl rounded-full"></div>

                      <motion.img
                           src={myImage}
                           alt="My Image"
                           className="
                           relative
                           w-72
                           md:w-96
                           rounded-3xl
                           shadow-[0_20px_50px_rgba(168,85,247,0.3)]
                           border
                           border-purple/30
                           object-cover"/>
                           </div>

                    {/*Right side Text */}

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.2 }}
                        className='md:w-1/2'
                    >
                        <div className='rounded-2xl p-8'>
                            <h3 className='text-2xl font-semibold mb-6'>My Journey</h3>
                            <p className='text-gray-300 text-base text-lg leading-8 tracking-wide max-w-2xl '>I'm a passionate Full-Stack Developer focused on building modern, responsive, and user-friendly 
                                web applications. My journey began with learning core web technologies and has grown into developing
                                complete MERN stack projects with authentication, APIs, databases, and real-world features.
                                I enjoy solving complex problems, writing clean code, and continuously improving my development skills.
                                Currently, I'm expanding my expertise in React, Redux Toolkit, and scalable backend architectures.
                                I'm always eager to learn new technologies and build impactful digital experiences.
                            </p>

                            {/* Cards */}

                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                               { aboutInfo.map((data, index) =>(
                                 <div key={index} className='bg-dark-300 p-6 mt-4 rounded-2xl transition-transform
                                 duration-300 hover:-translate-y-2 cursor-pointer'>
                                    <div className='text-purple text-4xl mb-4'>
                                         <data.icon />
                                    </div>
                                    <h3 className='text-xl font-semibold mb-4'>{data.title}</h3>
                                    <p className='text-gray-400'>{data.description}</p>

                                </div>
                               ))}

                            </div>

                        </div>

                    </motion.div>

                </div>

            </div>
        </motion.div>
       
    )
}

export default About
