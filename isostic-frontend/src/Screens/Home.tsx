import React from 'react'
import { Link } from 'react-router-dom'
import HeroCarousel from '../components/Carousel'
import BlendModeSlider from '../components/HeroSlider'

export default function Home() {

    return (
        <section className='w-full h-auto'>
            <div className=' m-5 md:flex md:gap-5 bg-stone-400 shadow rounded-lg md:justify-center md:align-center'>
                <div style={{
                    backgroundImage: `url('/img/img3.jpg')`
                }} className='w-full rounded-lg flex justify-center items-center bg-no-repeat bg-cover h-96'>
                    <div>
                        <Link to='/budgets'>
                            <button className='bg-sky-900 px-5 py-2 text-2xl text-red-50 rounded-lg border-4 shadow'>
                                Get in touch!</button>
                        </Link>
                    </div>
                </div>
                <div className='flex-col gap-3 m-6'>
                    <h1 className=' m-6 pt-6 text-6xl text-center text-sky-700 bold'>Custom Budgets!</h1>
                    <p className='m-6 text-lg text-red-50 font-bold text-center'>Contact us so we cand find the best option based on your case, for free!</p>
                </div>
            </div>
            <div className=' m-5 md:flex md:gap-5 bg-stone-400 shadow rounded-lg md:justify-center md:align-center bg-cover bg-no-repeat h-96' style={{
                backgroundImage: `url('/img/hero.jpg')`
            }}>
                <div className='flex-col gap-3 m-6 ml-8'>
                    <h1 className=' m-6 pt-6 text-6xl text-center text-sky-700 bold'>Find out our products!</h1>
                    <p className='m-6 text-lg font-bold text-center text-sky-900'>
                        We have a variety of products that ensures the fullfillment of even the more demanding customer.
                    </p>
                </div>
                <div className='w-full rounded-lg flex justify-center items-center gap-5'>
                    <div className='mt-10'>
                        <Link to='/products'><button className='bg-sky-900 px-5 py-2 text-2xl text-red-50 rounded-lg border-4 shadow '>Our Products!</button></Link>
                    </div>
                </div>
            </div>
            <div className=' m-5 md:flex md:gap-5 bg-stone-400 shadow rounded-lg md:justify-center md:align-center'>
                <div style={{
                    backgroundImage: `url('/img/img2.jpg')`
                }} className='w-full rounded-lg flex justify-center items-center bg-no-repeat bg-cover h-96'>
                    <div>
                        <Link to='/contacts'> <button className='bg-sky-900 px-5 py-2 text-2xl text-red-50 rounded-lg border-4 shadow'>Contact Us!</button></Link>
                    </div>
                </div>
                <div className='flex-col gap-3 m-6'>
                    <h1 className=' m-6 pt-6 text-6xl text-center text-sky-700 bold'>We're here for you!</h1>
                    <p className='m-6 text-lg text-red-50 font-bold text-center'>Feel free to contact us if you have any doubt on our services, products or any other question related to our company.</p>
                </div>
            </div>



            {/* <BlendModeSlider />
            <HeroCarousel /> */}
        </section >
    )
}

