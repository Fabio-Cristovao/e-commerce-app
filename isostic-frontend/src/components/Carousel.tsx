import React, { useState } from 'react';

export const CarouselItem = ({ children, width }) => {
    return (
        <div className="inline-flex items-center mt-5 justify-center h-96 bg-green-600 text-white" style={{ width: width }}>
            {children}
        </div>
    );
};

const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {
        console.log('hit')
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = React.Children.count(children) - 1;
        }
        setActiveIndex(newIndex)
    }
    return (
        <div className="carousel overflow-hidden h-70">
            <div className="whitespace-nowrap transition-transform " style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" });
                })}
            </div>
            <div className="arrow-indicators flex justify-center m-7
            ">
                <button className="m-3"
                    onClick={() => {
                        updateIndex(activeIndex - 1);
                    }}
                >
                    Prev
                </button>
                <button className="m-3"
                    onClick={() => {
                        updateIndex(activeIndex + 1);
                    }}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Carousel;


