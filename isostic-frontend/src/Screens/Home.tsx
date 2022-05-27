import React from 'react'
import HeroCarousel from '../components/Carousel'
import BlendModeSlider from '../components/HeroSlider'

export default function Home() {
    return (
        <section className="w-full h-auto">
            <h1>Call to action</h1>
            <BlendModeSlider />
            <HeroCarousel />
        </section >
    )
}

