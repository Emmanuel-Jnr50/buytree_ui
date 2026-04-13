import React from 'react'
import Logo from './Logo'
import logo from '../assets/buytree-logo.png'
import ArrowRight from './ArrowRightIcon'
import Caret from './CaretDownIcon'
import MenuIcon from './MenuIcon'

const Navbar = () => {
  return (
    <nav className="font-family flex items-center justify-between py-6 px-25 max-xl:px-15 max-lg:px-10 max-md:px-5 fixed top-0 left-0 right-0 bg-white z-50 max-sm:py-5.5">
        <div className="left-nav flex items-center space-x-20 max-lg:space-x-10 max-[1440px]:space-x-12">
            <div className="flex items-center">
                <img src={logo} alt="BuyTree Logo" className='w-9'/>
                <h2 className="ml-2 text-xl font-[950]">buytree</h2>
            </div>
            <ul className='flex space-x-18 max-[1440px]:space-x-8 max-lg:hidden'>
                <li><a href="#features" className=' text-[15px] font-medium hover:text-brand duration-300 flex items-center space-x-4 cursor-pointer'><p>Features</p><Caret /> </a></li>
                <li><a href="#solutions" className=' text-[15px] font-medium hover:text-brand duration-300 flex items-center space-x-4 cursor-pointer'><p>Solutions</p><Caret /> </a></li>
                <li><a href="#pricing" className=' text-[15px] font-medium hover:text-brand duration-300 cursor-pointer'>Pricing</a></li>
                <li><a href="#services" className=' text-[15px] font-medium hover:text-brand duration-300 cursor-pointer'>Services</a></li>
            </ul>
        </div>
        <div className="right-nav flex space-x-20 items-center max-[1440px]:space-x-8 max-lg:space-x-6">
            <ul className='flex space-x-18 max-[1440px]:space-x-8  max-lg:hidden'>
                <li><a href="" className='text-[15px] font-medium hover:text-brand duration-300 cursor-pointer'>Get a Demo</a></li>
                <li><a href="" className='text-[15px] font-medium hover:text-brand duration-300 cursor-pointer'>Login</a></li>
            </ul>
            <div className="flex items-center space-x-6">
                <button className='font-medium flex space-x-4 items-center border border-[#d6d6d6] px-4 py-2 rounded-xl gap-1.5 shadow-default hover:shadow-hover duration-400 cursor-pointer max-md:hidden max-sm:hidden'>Get Started<ArrowRight className='invert' /></button>
                <span className='hidden max-lg:flex max-sm:flex max-md:flex  items-center '><MenuIcon /></span>
            </div> 
        </div> 

        <div className="absolute -bottom-10 left-0 right-0 h-10 bg-linear-to-b from-white to-[#ffffff00]"></div>
    </nav>
  )
}

export default Navbar
