import React from 'react'

import Socials from '../components/Socials'
import MobileNav from '../components/MobileNav'

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-pink-200 fixed w-full px-[30px] lg:px-[200px] z-30 h-[100px] lg:h-[140px] flex items-center'>
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        <Link to={'/'} className='max-w-[200px]'>
          <div className='text-[#696c6d] text-[40px] hover:text-primary transition'>BYRON</div>
        </Link>
        <nav className='hidden xl:flex gap-x-12 font-semibold'>
          <Link to={'/'} className='text-[#696c6d] text-3xl hover:text-primary transition'>Home</Link>
          <Link to={'/about'} className='text-[#696c6d] text-3xl hover:text-primary transition'>About</Link>
          <Link to={'/portfolio'} className='text-[#696c6d] text-3xl hover:text-primary transition'>Portfolio</Link>
          <Link to={'/contact'} className='text-[#696c6d] text-3xl hover:text-primary transition'>Contact</Link>
        </nav>
      </div>
        <Socials />
        <MobileNav />
    </header>
  )
}

export default Header