import React from 'react'

export default function Contacts() {
    return (
        <>
            <h1 className='text-sky-600 text-6xl text-center bold'>We are here for you</h1>
            <div className="flex flex-col lg:flex-row w-96">
                <div className="phone-contact">
                    <h3>By phone:</h3>
                    <p>You can reach us by our phone contact wherever you want 24/7, because we know you need permanent backup</p>
                    <span>999999999</span>
                    <img src="/img/phone.jpg" className='w-full h-auto' alt="A person taking notes" />
                </div>
                <div className="email-contact w-96">
                    <h3>By phone:</h3>
                    <p>You can reach us by our phone contact wherever you want 24/7, because we know you need permanent backup</p>
                    <span>999999999</span>
                    <img src="/img/email.jpg" className='w-full h-auto' alt="A person taking notes" />
                </div>
                <div className="in-person-contact w-96">
                    <h3>By phone:</h3>
                    <p>You can reach us by our phone contact wherever you want 24/7, because we know you need permanent backup</p>
                    <span>999999999</span>
                    <img src="/img/in-person.jpg" className='w-full h-auto' alt="A person taking notes" />
                </div>
            </div>
        </>
    )
}
