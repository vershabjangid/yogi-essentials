import React from 'react'
import logo from '../images/dreamstime_275357470.png'
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";



export function Footer() {
    return (
        <>
            <section className='w-[100%] h-[300px] flex justify-center items-center bg-[#e5dcd2]'>
                <div className='w-[90%] flex justify-between items-center'>
                    <div className='w-[30%]'>
                        <img src={logo} alt="" className='w-[30%] rounded-[50%] m-auto' />
                        <h3 className=' font-[700] text-[30px] text-[#534931] text-center'>
                            YOGI ESSENTIALS PRIVATE LIMITED
                        </h3>
                    </div>
                    <div className='w-[30%]'>
                        <h3 className=' font-[700] text-[30px] text-[#534931] text-center'>Contact Info</h3>
                        <div className='text-[20px] text-center w-[100%]'>
                            <p className='footer_info flex justify-center items-center mt-3'> <MdOutlinePhoneIphone className='text-[25px] me-1' /> +91 94620 91611</p>
                            <p className='footer_info flex justify-center items-center mt-3'> <MdOutlineAlternateEmail className='text-[25px] me-1' /> avinash.march18@gmail.com</p>
                        </div>
                    </div>
                    <div className='w-[30%]'>
                        <h3 className=' font-[700] text-[30px] text-[#534931] text-center'>Location Info</h3>
                        <div className='text-[20px] text-center w-[100%]'>
                            <p className='footer_info flex justify-center items-center mt-3'> <IoLocationSharp className='text-[25px] me-1' /></p>
                            <p className='footer_info flex justify-center items-center mt-3'>house.no 434, 3rd C road, sardarpura jodhpur, rajasthan</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
