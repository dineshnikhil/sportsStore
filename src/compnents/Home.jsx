import React from 'react'

function Home() {
    return (
        <div className='p-8'>
            <div className="w-full bg-black rounded-2xl py-12 px-24 ">

                <h1 className='text-slate-300 text-base text-bold [letter-spacing:10px]'>SPORTS</h1>
                <h1 className='text-white text-6xl text-bold w-1/2 my-6 [letter-spacing:2px] '>
                    Easy and reliable purchase
                </h1>
                <h2 className='text-stone-200 opacity-75 text-lg w-1/2 my-10'>
                    We provide various kinds of badminton equipment for you, ranging from rackets, shuttlecocks, shoes, nets, and racket strings
                </h2>
                <button className='bg-white text-black text-extrabold px-8 py-2 rounded-md'>Order</button>
            </div>
        </div>
    )
}

export default Home
