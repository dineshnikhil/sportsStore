import React from 'react'

function Footer() {
    return (
        <div className='w-full bg-black py-6 px-14'>
            <div className='flex flex-wrap p-6 border-b-1 border-gray-400'>
                <div className='flex flex-col w-44'>
                    <a className='text-white text-lg text-bold hover:cursor-pointer my-1'>Find A Store</a>
                    <a className='text-white text-lg text-bold hover:cursor-pointer my-1'>Become A Member</a>
                    <a className='text-white text-lg text-bold hover:cursor-pointer my-1'>Sign Up for Email</a>
                    <a className='text-white text-lg text-bold hover:cursor-pointer my-1'>Student Discounts</a>
                    <a className='text-white text-lg text-bold hover:cursor-pointer my-1'>Send Us Feedback</a>
                </div>
                <div>
                    <h1 className='text-white text-bold mb-6'>GET HELP</h1>
                    <p className='text-gray-400 text-sm hover:text-white hover:cursor-pointer my-1'>Order Status</p>
                    <p className='text-gray-400 text-sm hover:text-white hover:cursor-pointer my-1'>Delivery</p>
                    <p className='text-gray-400 text-sm hover:text-white hover:cursor-pointer my-1'>Returns</p>
                    <p className='text-gray-400 text-sm hover:text-white hover:cursor-pointer my-1'>Payment Options</p>
                    <p className='text-gray-400 text-sm hover:text-white hover:cursor-pointer my-1'>Contact Us</p>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Footer
