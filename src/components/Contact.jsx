import React from 'react'
import{motion} from 'framer-motion'
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import emailjs from '@emailjs/browser'
import {useRef} from 'react'

function Contact() {
const form = useRef();


const sendEmail = (e) => {
       e.preventDefault();

    emailjs
    .sendForm(
      "service_astmnej",
      "template_87bzk67",
      form.current,
      "vNIam02SMJEgXRgfU"
    )
    .then(
      () => {
        alert("Message sent successfully!");
         form.current.reset();
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send message.");
       
      }
    );
};


  return (
    <motion.div
     initial={{opacity:0, y:1}}
    whileInView={{y:0, opacity:1}}
    transition={{duration:1, ease: "easeInOut"}}
    viewport={{once:true, amount: 0.2}}
    id='contact'
    className='py-20 bg-dark-200'
    >
        <div className='container mx-auto px-6'>
            <h1 className='text-3xl font-bold text-center mb-4'>Get In <span className='text-purple'>Touch</span></h1>
             <p className='text-gray-400 max-w-2xl text-center
              mx-auto mb-16'>Have a project in mind or an opportunity to share? I'd love to connect and discuss how 
              I can contribute to your team.</p>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-4'>
                <div>
                    <form ref={form} onSubmit={sendEmail}>
                        <label htmlFor='name' className='block text-gray-300 mb-4' >Your Name</label>
                        <input
                        type='text'
                        name='name'
                        placeholder='Your good name'
                        required
                        id='name'
                        className='w-full bg-dark-400 rounded-lg px-4 py-3 mb-5 outline-none border border-dark-300
                        hover:border-purple-500'
                         />

                         <label htmlFor='email' className='block text-gray-300 mb-4' >Email Address</label>
                        <input
                        type='email'
                        name='email'
                        placeholder='email'
                        required
                        id='email'
                        className='w-full bg-dark-400 rounded-lg px-4 py-3 mb-5 outline-none border border-dark-300
                        hover:border-purple-500'
                         />

                         <label htmlFor='message' className='block text-gray-300 mb-4' >Your Message</label>
                        <textarea
                        name='message'
                        placeholder='write your message...'
                        required
                        id='message'
                        className='w-full h-30 bg-dark-400 rounded-lg px-4 py-3 mb-5 outline-none border border-dark-300
                        hover:border-purple-500'
                         />

                         <button type='submit' className='w-full bg-purple rounded-lg text-lg px-4 py-3 mb-5 cursor-pointer
                          transition-all duration-300 hover:bg-purple-500 hover:shadow-lg hover:-translate-y-1 '>
                            Send Message
                          </button>
                    </form>

                </div>

                <div className='space-y-8'>
                    <div className='flex items-start '>
                    <div className='text-purple text-2xl mr-4 '>
                        <CiLocationOn className='text-3xl' />
                    </div>
                    
                     <div>
                        <h3 className='text-lg font-semibold mb-2'>Location</h3>
                        <p className='text-gray-400'>Bijnor, Uttar Pradesh, India</p>
                     </div>
                     </div>



                     <div className='flex items-start '>
                    <div className='text-purple text-2xl mr-4 '>
                        <MdOutlineMail className='text-3xl' />
                    </div>
                    
                     <div>
                        <h3 className='text-lg font-semibold mb-2'>Email</h3>
                        <p className='text-gray-400'>uvaisakram95@gmail.com</p>
                     </div>
                     </div>



                     <div className='flex items-start '>
                    <div className='text-purple text-2xl mr-4 '>
                        <FaPhone className='text-3xl'/>
                    </div>
                    
                     <div>
                        <h3 className='text-lg font-semibold mb-2'>Phone</h3>
                        <p className='text-gray-400'>+91 9520045563</p>
                     </div>
                     </div>

                     <div className='mt-10'>
                        <h2 className='text-lg'>Follow me</h2>
                        <div className='flex flex-wrap gap-8'>
                        <div className='rounded-full text-xl p-3 mt-6 bg-dark-400 hover:bg-purple-400 hover:text-dark-100 transition duration-300'>
                            <a href="https://github.com/MuhammadUvais95"
                            target='_blank'
                            rel='noopener noreferrer'>
                            <FaGithub />
                            </a>
                        </div>

                        <div className='rounded-full text-xl p-3 mt-6 bg-dark-400 hover:bg-purple-400 hover:text-dark-100 transition duration-300'>
                            <a href="https://www.linkedin.com/in/muhammad-uvaish-akram-789266299"
                            target='_blank'
                            rel='noopener noreferrer'>
                            <FaLinkedin />
                            </a>
                        </div>

                        </div>

                     </div>

                </div>

              </div>

        </div>
      
    </motion.div>
  )
}

export default Contact
