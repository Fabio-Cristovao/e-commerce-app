import React from 'react'
import HeroCarousel from '../components/Carousel'
import BlendModeSlider from '../components/HeroSlider'

export default function Home() {

    const bgStyle = {
        backgroundImage: "url(/img/img3.jpg)",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    return (
        <section className='w-full h-auto'
        >
            <div className='text-center mb-20'>
                <h1 className='text-6xl m-5 mt-7 text-sky-900 font-bold'>We have the best solutions for all your issues! Come visit us! </h1>
            </div>
            <div className=' m-5 md:flex md:gap-5 bg-stone-400 shadow rounded-lg md:justify-center md:align-center'>
                <div className='flex-col gap-3 m-6'>
                    <h1 className=' m-6 pt-6 text-6xl text-center text-sky-700 bold'>Custom Budgets!</h1>
                    <p className='m-6 text-lg text-red-50 font-bold text-center'>Contact us so we cand find the best option based on your case, for free!</p>
                </div>
                <div style={bgStyle} className=' h-96 w-full h-auto rounded-lg flex justify-center items-center'>
                    <div className=''>
                        <button className='bg-sky-900 h-10 px-5 py-3 text-2xl text-red-50 rounded-lg border-4 shadow'>Contact Us!</button>
                    </div>
                </div>
            </div>



            {/* <BlendModeSlider />
            <HeroCarousel /> */}
        </section >
    )
}

