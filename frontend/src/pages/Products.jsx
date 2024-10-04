import React from 'react'
import { Header } from '../common/Header'
import { Footer } from '../common/Footer'
import { Developedby } from '../common/Developedby'
import tea from '../images/front-view-milk-tea-concept-with-copy-space.jpg'
import coffee from '../images/delicious-coffee-beans-cup.jpg'
import oils from '../images/vegetables-grey-wooden-surface.jpg'
import bakery from '../images/raisins-nuts-near-fresh-pastry.jpg'
import pulses from '../images/collection-common-food-allergens-people (1).jpg'
import confectionery from '../images/beautiful-delicious-sweet-table-wedding-celebration.jpg'


export function Products() {
    return (
        <>
            <section className='w-[100%]'>
                <Header />
                <div className='products_banner w-[100%] h-[70vh] bg-[#e5dcd2]'>
                    <div className='overlay w-[100%] h-[100%] bg-[#0000008c] flex justify-center items-center'>
                        <h1 className='text-white font-[800] text-[50px]'>Products</h1>
                    </div>
                </div>
                <section className='w-[100%] h-[70px] bg-[#332718] text-white flex justify-center items-center'>
                    <h2 className='text-[25px] font-[600]'>Home / Products</h2>
                </section>
                <section className='bg-black'>
                    <section className='p-[30px] text-[#332718] bg-[#e5dcd2]'>
                        <h3 className='text-[50px] font-[700] text-center'>
                            Our Products
                        </h3>

                        <section className='w-[100%] py-5  flex justify-between items-center flex-wrap'>
                            <div>
                                <div className=' w-[340px] h-[340px] rounded-[50%] overflow-hidden flex justify-center items-end  relative'>
                                    <img src={tea} alt="" className='w-[100%]' />
                                    <div className='overlay w-[100%] h-[100%] absolute bg-[#0000006b] transition-[1.5s] hover:bg-transparent'></div>
                                </div>

                                <div className='text-center'><h2 className='text-[30px] font-[600] my-3'>Tea</h2></div>
                            </div>

                            <div>
                                <div className=' w-[340px] h-[340px] rounded-[50%] overflow-hidden flex justify-center items-center  relative'>
                                    <img src={coffee} alt="" className='w-[100%]' />
                                    <div className='overlay w-[100%] h-[100%] absolute bg-[#0000006b] transition-[1.5s] hover:bg-transparent'></div>
                                </div>

                                <div className='text-center'><h2 className='text-[30px] font-[600] my-3'>Coffee</h2></div>
                            </div>

                            
                            <div>
                                <div className=' w-[340px] h-[340px] rounded-[50%] overflow-hidden flex justify-center items-start relative'>
                                    <img src={oils} alt="" className='w-[100%]' />
                                    <div className='overlay w-[100%] h-[100%] absolute bg-[#0000006b] transition-[1.5s] hover:bg-transparent'></div>
                                </div>

                                <div className='text-center'><h2 className='text-[30px] font-[600] my-3'>Fats And Oils</h2></div>
                            </div>

                            
                            <div>
                                <div className=' w-[340px] h-[340px] rounded-[50%] overflow-hidden flex justify-end items-center  relative'>
                                    <img src={pulses} alt="" className='w-[100%]' />
                                    <div className='overlay w-[100%] h-[100%] absolute bg-[#0000006b] transition-[1.5s] hover:bg-transparent'></div>
                                </div>

                                <div className='text-center'><h2 className='text-[30px] font-[600] my-3'>Pulses and Cereals</h2></div>
                            </div>


                            <div>
                                <div className=' w-[340px] h-[340px] rounded-[50%] overflow-hidden flex justify-end items-center  relative'>
                                    <img src={confectionery} alt="" className='w-[100%] h-[100%]' />
                                    <div className='overlay w-[100%] h-[100%] absolute bg-[#0000006b] transition-[1.5s] hover:bg-transparent'></div>
                                </div>

                                <div className='text-center'><h2 className='text-[30px] font-[600] my-3'>Confectionery</h2></div>
                            </div>


                            <div>
                                <div className=' w-[340px] h-[340px] rounded-[50%] overflow-hidden flex justify-end items-center  relative'>
                                    <img src={bakery} alt="" className='w-[100%] h-[100%]' />
                                    <div className='overlay w-[100%] h-[100%] absolute bg-[#0000006b] transition-[1.5s] hover:bg-transparent'></div>
                                </div>

                                <div className='text-center'><h2 className='text-[30px] font-[600] my-3'>Bakey Products</h2></div>
                            </div>


                            <div className='w-[340px]'></div>
                            <div className='w-[340px]'></div>
                            <div className='w-[340px]'></div>

                        </section>

                        
                    </section>

                </section>

                <div className='w-[100%] py-5 bg-[#332718]'>
                    <h2 className='my-5 text-center text-white text-[35px] font-[600]'>
                        Our Location
                    </h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d341.26838372982!2d73.00964917111507!3d26.27571872566099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c30bf4aaf7d%3A0x521965b595fc0cb8!2s434C%2C%20Patrakar%20Colony%2C%20Sardarpura%2C%20Jodhpur%2C%20Rajasthan%20342003!5e0!3m2!1sen!2sin!4v1727198931318!5m2!1sen!2sin" className='w-[100%] h-[550px]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <Footer />
                <Developedby />
            </section>
        </>
    )
}
