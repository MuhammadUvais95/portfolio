import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

function Navbar() {

  const[showMenu, setShowMenu] = useState(false);

  return (
    <nav className='fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm shadow-lg px-8 py-4'>
        <div className='container mx-auto flex justify-between items-center'>

            <div>
               <a href='#' className='text-3xl font-bold text-white'>
                 Muhammad
                <span className='text-purple'>Uvaish</span>
                <div className='w-4 h-4 rounded-lg bg-purple'></div>
               </a>
            </div>


            <div className='hidden md:flex space-x-10'>
              <a href='#home' className='relative text-white/80 transition duration-300 hover:text-purple group'>
                <span>Home</span>
                <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'> </span>
              </a>

               <a href='#about' className='relative text-white/80 transition duration-300 hover:text-purple group'>
                <span>About</span>
                <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'> </span>
              </a>

               <a href='#skill' className='relative text-white/80 transition duration-300 hover:text-purple group'>
                <span>Skills</span>
                <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'> </span>
              </a>

               <a href='#project' className='relative text-white/80 transition duration-300 hover:text-purple group'>
                <span>Projects</span>
                <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'> </span>
              </a>

               <a href='#education' className='relative text-white/80 transition duration-300 hover:text-purple group'>
                <span>Education</span>
                <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'> </span>
              </a>

               <a href='#contact' className='relative text-white/80 transition duration-300 hover:text-purple group'>
                <span>Contact</span>
                <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'> </span>
              </a>

            </div>

            {/* For Mobile */}

            <div className='md:hidden'>
              {showMenu?<FaXmark onClick={() => setShowMenu(!showMenu)} className="text-3xl cursor-pointer" /> :
                <FaBars onClick={() => setShowMenu(!showMenu)} className="text-2xl cursor-pointer"/>}

            </div>

        </div>

        {/* For Mobile */}

        {showMenu && (
          <div className=' md:hidden h-screnn bg-dark-300 mt-4 p-4 rounded-lg flex flex-col justify-center items-center space-y-5 '>

            <a href='#home' className='relative text-white/80 transition duration-300'
            onClick={() => setShowMenu(!showMenu)}>
                <span>Home</span>
              </a>

               <a href='#about' className='relative text-white/80 transition duration-300'
               onClick={() => setShowMenu(!showMenu)}>
                <span>About</span>
              </a>

               <a href='#skills' className='relative text-white/80 transition duration-300'
               onClick={() => setShowMenu(!showMenu)}>
                <span>Skills</span>
              </a>

               <a href='#projects' className='relative text-white/80 transition duration-300'
                onClick={() => setShowMenu(!showMenu)}>
                <span>Projects</span>
              </a>

               <a href='#experience' className='relative text-white/80 transition duration-300'
               onClick={() => setShowMenu(!showMenu)}>
                <span>Experience</span>
              </a>

               <a href='#contact' className='relative text-white/80 transition duration-300'
                onClick={() => setShowMenu(!showMenu)}>
                <span>Contact</span>
              </a>

          </div>
        ) 
        }
      
    </nav>
  )
}

export default Navbar
