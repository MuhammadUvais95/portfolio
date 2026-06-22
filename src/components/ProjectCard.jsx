import React from 'react'
import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

function ProjectCard({title, description, image, tech, demo, code, icons}) {
  return (
    <div className='bg-dark-300 rounded-2xl overflow-hidden transition duration-300 hover:-translate-y-2 cursor-pointer'>
        <img src={image} alt={title} className='w-full h-full object-cover' />

        <div className='p-6'>
            <h3 className='text-xl font-semibold py-4'>{title}</h3>
            <p className='text-gray-400 mb-2'>{description}</p>
        </div>
        <div className='flex flex-wrap gap-2 mb-4 p-3'>
            {tech.map((item, index) => (
                <span key={index} className='bg-dark-400 rounded-full text-sm px-3 py-1'>{item}</span>
            ))}

        </div>

        <div className='flex justify-around items-center gap-4 mb-4 '>
                <a href={demo} className='flex items-center gap-2 bg-dark-100 rounded-xl text-purple text-sm px-4 py-2
                 hover:bg-dark-200 hover:text-purple-700 transition'>
                <TbWorld className='text-lg'/>
                <span>View Demo</span>
            </a>
           
           
             <a href={code} className='flex items-center gap-2 bg-dark-100 rounded-xl text-sm text-purple px-4 py-2
              hover:bg-dark-200 hover:text-purple-700 transition'>
               <FaGithub className='text-lg' />
               <span>code</span>
            </a>
           

        </div>
    

    </div>
  )
}

export default ProjectCard
