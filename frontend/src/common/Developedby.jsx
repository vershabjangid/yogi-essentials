import React from 'react'
import developed from '../images/Navy_and_Soft_Blue_Modern_Business_Card__YouTube_Icon__20240605_131831_0000-removebg-preview.png'
export function Developedby() {
    return (
        <>
            <section className='w-[100%] py-3 bg-[#332718] flex justify-evenly items-center'>
                <section className='flex justify-center items-center text-white'>
                    <img src={developed} alt="" className='w-[70px]' />
                    <div className='ms-2'>
                        <p> Designed and Developed By :</p>
                        <h3 className='font-[bold]'>BANSI IT SOLUTIONS</h3>
                    </div>
                </section>

                <section className='text-white'>
                    <h3 className='font-[bold]'>
                        Contact.no :- 9351858094
                    </h3>
                    <h3 className='font-[bold]'>
                    Email :- bansiitsolutions@gmail.com
                    </h3>
                </section>
            </section>
        </>
    )
}
