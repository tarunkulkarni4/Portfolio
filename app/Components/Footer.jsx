import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2'/> 
            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6'/>
                <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=tarunkulkarni4@gmail.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    tarunkulkarni4@gmail.com
                </a>
            </div>
        </div>
         
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>  © {new Date().getFullYear()} Tarun Kulakarni. All rights reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li>
                    <a target='_blank' href="https://github.com/tarunkulkarni4">
                        GitHub
                    </a>
                </li>
                <li>
                    <a target='_blank' href="https://x.com/TARUNKULKARNI5">
                        Twitter
                    </a>
                </li>
                <li>
                    <a target='_blank' href="https://leetcode.com/u/Tarun_kulakarni/">
                        Leetcode
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
