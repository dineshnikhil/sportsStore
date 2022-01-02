import React from 'react'

function Nav() {
    return (
        <div className='flex justify-between px-8 py-4'>
            <div className='w-2/10'>
                <h1 className='text-2xl text-bold [letter-spacing:2px]'>DN59</h1>
            </div>
            <div className='flex w-6/10 justify-between'>
                <h1 className='mx-6 py-auto'>Collection</h1>
                <h1 className='mx-6 py-auto'>About</h1>
                <h1 className='mx-6 py-auto'>Shop</h1>
                <h1 className='mx-6 py-auto'>Download App</h1>
            </div>
            <div className='2/10'>
                <button className='mx-4'>Register</button>
                <button className='mx-4 bg-black rounded-md text-white text-sm text-bold px-6 py-2'>Login</button>
            </div>
        </div>
    )
}

export default Nav
