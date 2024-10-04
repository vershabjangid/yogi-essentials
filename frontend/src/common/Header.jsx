import React from 'react'
import logo from '../images/dreamstime_275357470.png'
import { Link } from 'react-router-dom'

export function Header() {
    return (
        <>
            <section className='p-3  bg-[#332718] flex items-center justify-between'>
                <div className='logo flex items-center'>
                    <img src={logo} alt="" className='w-[80px] rounded-[50%]'/>
                    <p className='logo_heading ms-2 font-[500] text-[30px] text-[white]'>YOGI ESSENTIALS PRIVATE LIMITED</p>
                </div>

                <div className='header_options'>
                    <ul className='flex text-white'>
                       <Link to={"/"}> <li className='me-[30px] font-[500] text-white'>HOME</li></Link>
                       <Link to={"/about"}>  <li className='me-[30px] font-[500] text-white'>ABOUT</li></Link>
                       <Link to={"/products"}><li className='me-[30px] font-[500] text-white'>PRODUCTS</li></Link>
                       <Link to={"/contact"}>  <li className='me-[30px] font-[500] text-white'>CONTACT US</li></Link>
                    </ul>
                </div>
            </section>
        </>
    )
}
