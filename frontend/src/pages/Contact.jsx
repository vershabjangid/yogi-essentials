import React from 'react'
import { Header } from '../common/Header'
import { Footer } from '../common/Footer'
import { Developedby } from '../common/Developedby'
import logo from '../images/dreamstime_275357470.png'
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify'

export function Contact() {

    const SignupSchema = Yup.object().shape({
        Name: Yup.string().required('Name required'),
        Email: Yup.string().required('Email Required'),
        Phone: Yup.string().required('Phone Number Required'),
    });

    let notifysuccess = (success) =>toast.success(success)

    let sendquery = (value) => {
        axios.post('http://localhost:5000/email', value)
            .then((res) => {
               notifysuccess(res.data.Message)
            })
            .catch((error) => {
                console.log(error)
            })


        axios.post('http://localhost:5000/email-receive', value)
            .then((res) => {
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <>
            <section className='w-[100%]'>
                <Header />
                <section className='w-[100%] h-[100vh] bg-[#e5dcd2] border-b-2 border-black flex justify-center items-center'>
                    <section className='w-[70%] border-[1px] border-black py-[50px] bg-[#332718] rounded-[15px] flex justify-between'>
                        <section className='w-[50%] flex justify-center items-center flex-col'>
                            <img src={logo} className=' w-[150px] rounded-[50%]' alt="" />
                            <h1 className='text-center text-[40px] font-[600] text-white'>Welcome To</h1>
                            <h2 className='text-center text-[45px] font-[600] text-white'>Yogi Essentials</h2>
                        </section>

                        <section className='w-[50%]'>
                            <Formik
                                initialValues={{
                                    Name: "",
                                    Email: "",
                                    Phone: ""
                                }}
                                validationSchema={SignupSchema}
                                onSubmit={(value) => {
                                    sendquery(value)
                                }}
                            >
                                <Form>
                                    <div className='text-center'>
                                        <h2 className='text-white text-[40px] '>Enquiry Form</h2>

                                        <div className='text-white w-[80%] m-auto'>
                                            <div className='text-start'>
                                                <label htmlFor="input" className='font-[600]'>Name</label>
                                            </div>
                                            <Field type="text" className='w-[100%] text-black py-3 rounded-[15px] my-2 p-2' name="Name" />
                                            <div className='text-[red] text-start'>
                                                <ErrorMessage name="Name" />
                                            </div>
                                        </div>

                                        <div className='text-white w-[80%] m-auto'>
                                            <div className='text-start'>
                                                <label htmlFor="input" className='font-[600]'>Email</label>
                                            </div>
                                            <Field type="email" className='w-[100%] py-3 rounded-[15px] text-black my-2 p-2' name="Email" />
                                            <div className='text-[red] text-start'>
                                                <ErrorMessage name="Email" className='mb-5' />
                                            </div>
                                        </div>

                                        <div className=' w-[80%] m-auto'>
                                            <div className='text-start text-white'>
                                                <label htmlFor="input" className='font-[600]'>Phone Number</label>
                                            </div>
                                            <Field type="number" className='w-[100%] py-3 rounded-[15px] my-2 p-2' name="Phone" />
                                            <div className='text-[red] w-[100%] text-start'>
                                                <ErrorMessage name="Phone" className='w-[100%]' />
                                            </div>
                                        </div>

                                        <div className='text-white w-[80%] m-auto'>
                                            <button type="submit" className='w-[100%] bg-[#e5dcd2] py-3 rounded-[15px] my-6 text-black font-[600]' >
                                                Send Enquiry
                                            </button>
                                        </div>
                                    </div>
                                </Form>
                            </Formik>

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
            <ToastContainer/>
        </>
    )
}
