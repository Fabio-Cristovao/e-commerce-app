import React from 'react'
import HeroCarousel from '../components/HeroCarousel'

export default function Home() {
    return (
        <section className="w-full h-96 bg-orange-200">
            <h1 className="text-8xl">Produtos em destaque!</h1>
            <HeroCarousel />
        </section >
    )
}

