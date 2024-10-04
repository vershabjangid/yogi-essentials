import React from 'react'
import homebanner from '../images/adult-nature-coffee-harvesting.jpg'
import about_logo from '../images/latte-coffee.jpg'
import { Header } from '../common/Header'
import coffee from '../images/delicious-coffee-beans-cup.jpg'
import oils from '../images/vegetables-grey-wooden-surface.jpg'
import bakery from '../images/raisins-nuts-near-fresh-pastry.jpg'
import pulses from '../images/collection-common-food-allergens-people (1).jpg'
import { Footer } from '../common/Footer'
import { Developedby } from '../common/Developedby'


export function Home() {
  return (
    <>
      {/* <section className='home_main w-[100%] h-[100vh] bg-[#e5dcd2]'>
        <div className='w-[100%] h-[100%]'>
          <div className='banner_logo flex items-end justify-end pt-[150px] '>
            <img src={logo} alt="" className='w-[250px]' />
          </div>

          <div className='web_banner_content'>
            <h1 className='text-[120px] w-[99%]  text-right font-[bolder]'>Yogi Essentials</h1>
            <p className='text-right w-[98%] text-[30px]'>Start Your Day with Quality</p>
          </div>
        </div>
      </section> */}

      <section className=' w-[100%]'>
        <Header />

        <div className='welcome_banner w-[100%] h-[calc(100vh-107px)] bg-[#e5dcd2] flex '>
          <div className='w-[50%] h-[100%] flex items-center justify-center'>
            <div className=' text-[black] mx-3'>
              <h2 className='text-[35px] font-[600]'>WELCOME TO</h2>
              <h1 className='text-[70px] font-[700]'>YOGI ESSENTIALS</h1>
              <p className='text-end text-[30px] font-[500]'>Start Your Day With Quality</p>
            </div>
          </div>
          <div className='w-[60%] h-[100%] flex items-center justify-end'>
            <img src={homebanner} alt="" className='w-[100%] h-[100%]' />
          </div>
        </div>

        <div className='about_main w-[100%] bg-[#332718] flex items-center '>
          <div className='w-[50%] h-[100%] flex items-center justify-center '>
            <img src={about_logo} alt="" className='w-[100%]' />
          </div>
          <div className='w-[60%] h-[100%] flex items-center justify-center'>
            <div className=' text-[white] mx-3'>
              <h2 className='text-[35px] font-[600]'>ABOUT US</h2>
              <p className='text-start text-[18px] font-[500]'>Yogi essentials Private limited, a emerging food brand established in 2023, aims to provide
                wholesome Indian food products sourced from farmers and global partners. We offer a
                wide range of pure, organic grown spices, grains, cereals, pulses, tea and more. Our
                practices align with the principles of organic agriculture, particularly supporting smallscale and marginal farmers. By promoting organic food production, we contribute to
                reducing our carbon footprint and preserving ecosystem quality.</p>
            </div>
          </div>
        </div>


        <div className='about_main w-[100%] bg-[#e5dcd2] flex items-center py-5 '>
          <div className='w-[100%] h-[100%] flex items-center justify-center'>
          <div className=' text-[black] w-[100%]'>
              <h2 className='text-[35px] font-[600] text-center my-5'>OUR PRODUCTS</h2>
              <div className='w-[100%] flex justify-center'>
                <div className='w-[95%] flex justify-between'>
                  <div className='w-[24%] relative'>
                    <img src={coffee} alt="" className=' rounded-[5px]' />
                    <div className='w-[100%] h-[100%] absolute bg-[#00000096] top-0  rounded-[5px] hover:bg-transparent transition-[1s]'>
                      <h4 className='text-white m-2 absolute bottom-0 text-[40px]'>
                        Coffee
                      </h4>
                    </div>
                  </div>

                  <div className='w-[24%]  relative'>
                    <img src={oils} alt="" className=' rounded-[5px]' />
                    <div className='w-[100%] h-[100%] absolute bg-[#00000096] top-0  rounded-[5px] hover:bg-transparent transition-[1s]'>
                      <h4 className='text-white m-2 absolute bottom-0 text-[40px]'>
                        Fats and Oil
                      </h4>
                    </div>
                  </div>

                  <div className='w-[24%]  relative'>
                    <img src={bakery} alt="" className=' rounded-[5px]' />
                    <div className='w-[100%] h-[100%] absolute bg-[#00000096] top-0  rounded-[5px] hover:bg-transparent transition-[1s]'>
                      <h4 className='text-white m-2 absolute bottom-0 text-[40px]'>
                        Bakery products
                      </h4>
                    </div>
                  </div>

                  <div className='w-[24%]  relative'>
                    <img src={pulses} alt="" className=' rounded-[5px]' />
                    <div className='w-[100%] h-[100%] absolute bg-[#00000096] top-0  rounded-[5px] hover:bg-transparent transition-[1s]'>
                      <h4 className='text-white m-2 absolute bottom-0 text-[40px]'>
                        Cereal and Pulses
                      </h4>
                    </div>
                  </div>
                </div>


              </div>
            </div>

         </div>
        </div>


        {/* <div className='w-[100%] py-5 bg-[#332718]'>
          <h2 className='my-5 text-center text-white text-[35px] font-[600]'>
            Our Location
          </h2>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d341.26838372982!2d73.00964917111507!3d26.27571872566099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c30bf4aaf7d%3A0x521965b595fc0cb8!2s434C%2C%20Patrakar%20Colony%2C%20Sardarpura%2C%20Jodhpur%2C%20Rajasthan%20342003!5e0!3m2!1sen!2sin!4v1727198931318!5m2!1sen!2sin" className='w-[100%] h-[550px]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div> */}


        <Footer/>
        <Developedby/>
      </section>
    </>
  )
}
