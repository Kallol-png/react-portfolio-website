import React from 'react'
import { LuHandshake } from 'react-icons/lu'
import { motion } from 'framer-motion'
import { fadeInUp, transitions } from '../utils/animations'

const Contact = () => {
  return (
    <section className='py-38 px-4 md:px-6 bg-[#0f0f0f]/80'>
        <div className='max-w-6xl mx-auto text-center'>
            <motion.div
            variants={fadeInUp}
            initial="initial" 
            animate="animate"
            transition={{...transitions.default}}
             className='mb-12'>
                <div className='size-24 bg-gray-900 mx-auto mb-8 rounded-full flex justify-center items-center'>
                 <LuHandshake className='text-5xl text-gray-400 text-center'/>
                </div>
                <h2 className='text-3xl md:text-4xl lg:text-5xl mb-12'>
                    <span className='bg-gradient-to-r from-white via-gray-300 to-gray-500 text-transparent bg-clip-text'>Tell me about your next</span>
                    <br className='md:block hidden' />
                    <span className='bg-gradient-to-r from-white via-gray-400 to-gray-500 text-transparent bg-clip-text'>project</span>
                </h2>
            </motion.div>
            <motion.div
            variants={fadeInUp}
            initial ="initial"
            animate ="animate"
            transition={{...transitions.default, delay:0.2}}
             className='flex flex-wrap justify-center gap-4'>
                <a href="mailto:help.yourassistant@gmail.com" className='inline-flex items-center px-8 py-3 font-medium bg-white text-black rounded-full hover:bg-gray-200 transition-colors'>Email Me</a>
                <a href="https://wa.me/01818176718" target='_blank' className='inline-flex items-center px-8 py-3 font-medium border border-gray-700 text-white rounded-full hover:border-gray-500 transition-colors'>WhatsApp</a>
            </motion.div>

        </div>
    </section>
  )
}

export default Contact