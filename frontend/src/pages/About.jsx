import React from 'react'
import { Header } from '../common/Header'
import { Footer } from '../common/Footer'
import { Developedby } from '../common/Developedby'

export function About() {
    return (
        <>
            <section className=' w-[100%]'>
                <Header />
                <section className='about_banner w-[100%] h-[70vh] bg-[#e5dcd2]'>
                    <div className='overlay w-[100%] h-[100%] bg-[#0000008c] flex justify-center items-center'>
                        <h1 className='text-white font-[800] text-[50px]'>About Us</h1>
                    </div>
                </section>
                <section className='w-[100%] h-[70px] bg-[#332718] text-white flex justify-center items-center'>
                    <h2 className='text-[25px] font-[600]'>Home / About Us</h2>
                </section>

                <section className='p-[30px] text-[#332718] bg-[#e5dcd2]'>
                    <h3 className='text-[50px] font-[700] text-start'>
                        Our Story
                    </h3>

                    <p className='text-[#332718] text-start text-[18px] my-5'>
                        In the heart of the countryside, Yogi Essentials began as a dream fueled by a deep passion for healthy living and a profound respect for nature. Our journey started with a small plot of land and a simple vision: to grow food that nourishes both body and soul while preserving the earth for future generations.
                    </p>

                    <p className='text-[#332718] text-start text-[18px] my-5'>
                        Inspired by the traditional farming practices of our ancestors, we embraced organic methods from the very beginning. We believe that food should be pure, wholesome, and free from harmful chemicals. Our founder, a lifelong advocate for sustainable agriculture, spent countless hours researching and learning about organic farming techniques. With this knowledge, we cultivated our first crops, focusing on the rich biodiversity of the soil and the interconnectedness of all living things.
                    </p>

                    <p className='text-[#332718] text-start text-[18px] my-5'>
                        As we nurtured our land, word began to spread about the exceptional quality and flavor of our produce. Local markets welcomed our fresh vegetables and fruits, and soon we found ourselves not just as farmers, but as passionate educators. We began hosting workshops and farm tours, sharing our commitment to organic practices and the importance of supporting local ecosystems.
                    </p>

                    <p className='text-[#332718] text-start text-[18px] my-5'>
                        We source all our ingredients from trusted local farmers who share our commitment to organic practices, ensuring that every product reflects our dedication to sustainability. Our range has expanded to include not just fresh produce, but also delicious packaged goods that make healthy eating convenient and accessible for everyone.
                    </p>

                    <p className='text-[#332718] text-start text-[18px] my-5'>
                        Today, we are proud to serve a community of health-conscious consumers who understand the value of organic food. Our mission is to inspire others to join us on this journey toward a healthier lifestyle, one bite at a time. As we look to the future, we remain committed to innovation, education, and sustainability, continually striving to make a positive impact on the world around us.
                    </p>

                    <p className='text-[#332718] text-start text-[18px] my-5'>
                        At Yogi Essentials, we’re not just providing food; we’re cultivating a movement toward a healthier, more sustainable future for all.
                    </p>

                    <h3 className='text-[50px] font-[700] text-start mt-[20px]'>
                        Our Focus
                    </h3>

                    <p className='text-[#332718] text-start text-[18px] my-[10px]'>
                        At Yogi Essentials , our focus is on delivering high-quality, affordable products that enhance everyday life for consumers. We are committed to innovation and sustainability, continuously developing new solutions that meet the evolving needs of our customers while minimizing our environmental footprint. Our diverse portfolio spans categories such as food and beverages, personal care, and household essentials, all designed with convenience and accessibility in mind. We prioritize customer satisfaction, ethical sourcing, and community engagement, we aim to lead the industry in promoting a greener future.
                    </p>

                    <h3 className='text-[50px] font-[700] text-start mt-[20px]'>
                        Our Promises
                    </h3>
                    <ul className='text-[#332718] text-start list-disc text-[18px] leading-[45px] my-[10px]'>
                        <li>Quality Assurance: We promise to deliver only the highest quality products, rigorously tested to meet safety and performance standards.</li>
                        <li>Sustainability Commitment: We are dedicated to sustainable practices, ensuring our products are responsibly sourced and packaged to minimize environmental impact.</li>
                        <li>Innovation: We promise to continuously innovate, bringing new and exciting products to market that cater to the changing needs of our customers.</li>
                        <li>Affordability: We strive to provide exceptional value, ensuring our products remain affordable without compromising on quality.</li>
                        <li>Transparency: We commit to being open and honest about our ingredients, sourcing practices, and manufacturing processes, so you can make informed choices.</li>
                        <li>Customer Satisfaction: Your satisfaction is our priority. We promise to listen to your feedback and continuously improve our products and services.</li>
                        <li>Community Engagement: We are dedicated to giving back to the communities we serve, supporting local initiatives and promoting social responsibility.</li>
                        <li>Convenience: We promise to make your shopping experience easy and enjoyable, with accessible products available where you need them.</li>
                    </ul>
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
