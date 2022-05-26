import React from 'react'
import Carousel, { CarouselItem } from '../components/Carousel'

export default function Home() {
    return (
        <section className="w-full h-auto">
            <h1>Call to action</h1>
            <Carousel>
                <CarouselItem width={undefined}>Item 1</CarouselItem>
                <CarouselItem width={undefined}>item 2</CarouselItem>
                <CarouselItem width={undefined}>item 3</CarouselItem>
            </Carousel>

        </section >
    )
}

