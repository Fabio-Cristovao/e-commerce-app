import React from 'react'
import { BsFillCalculatorFill } from "react-icons/bs";

export default function Budgets() {
    return (
        <div className='container'>
            <div className='text-center my-8 space-y-7'>
                <h4 className='text-5xl text-sky-900'>
                    Custom Budget Calculator
                </h4>
                <h6 className='text-3xl text-sky-700'>
                    We just need some information that you can easily provide.
                </h6>
                <p>This is a simple calculation so that you can get an estimate value. We ALWAYS recommend you to get in touch to get a more realistic perspective. We are here to help you  </p>
            </div>
            <h5 className='text-2xl text-sky-700 uppercase ml-4'>Check it out!</h5>
            <div className=' my-8'>
                <div className="ml-4 text-sky-700 text-xl flex items-center space-x-2">
                    <span>Calculator</span>
                    <span><BsFillCalculatorFill /></span>
                </div>
                <form action="" className="flex flex-col justify-center items-center">
                    <label htmlFor="Product-type">Choose a product:</label>
                </form>
            </div>
        </div>

    )
}
