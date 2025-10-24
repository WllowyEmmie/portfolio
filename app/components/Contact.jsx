import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Connect = () => {
    return (
        <div className='w-full px-[12%] py-12 scroll-mt-20 bg-[url(/footer-bg-color.png)] bg-no-repeat bg-center bg-[length:90%_auto]' id='contact'>
            <h4 className='text-center mb-2 text-lg font-ovo'>Contact me</h4>
            <h2 className='text-center text-5xl font-ovo'>Get in touch</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
                Let's build something great together. I'm available for junior developer roles, internships, or freelance projects — drop me a message and let's talk!
            </p>
            <form className='max-w-2xl mx-auto'>
                <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                    <input type="text" placeholder='Enter your Name or Company' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' />
                    <input type="email" placeholder='Enter your email' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' />
                </div>
                <textarea rows={6} placeholder='Enter your message' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6'></textarea>
                <button type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'>Submit Now <Image className='w-4' src={assets.right_arrow_white} alt='submit arrow'/></button>
                <p>sending.....</p>
            </form>
        </div>
    )
}

export default Connect
