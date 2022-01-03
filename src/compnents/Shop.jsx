import React from 'react';
import img1 from '../images/img1.jpeg'
import img2 from '../images/img2.jpeg'
import img3 from '../images/img3.jpeg'
import img4 from '../images/img4.jpeg'
import img5 from '../images/img5.jpeg'


function Shop() {
    return (
        <div className='w-full my-9'>

            <h1 className='text-center text-4xl text-black text-black mb-5'>
                Best Selling Products
            </h1>

            <div className='w-full flex justify-center'>
                <div className='flex space-x-4'>
                    <button className='text-bold underline decoration-4 decoration-sky-400 underline-offset-8'>
                        Shoes
                    </button>

                    <button className='text-bold hover:underline decoration-4 decoration-sky-400 underline-offset-8	'>
                        T-Shirts
                    </button>

                    <button className='text-bold hover:underline decoration-4 decoration-sky-400 underline-offset-8	'>
                        Tracks
                    </button>

                    <button className='text-bold hover:underline decoration-4 decoration-sky-400 underline-offset-8	'>
                        All
                    </button>
                </div>
            </div>

            <div className='flex justify-center space-x-14 w-full my-6 py-4 px-14'>
                <div className='shadow-md hover:shadow-lg p-4 rounded-xl bg-[#F6F6F6]'>
                    <img className='w-3/4 h-auto mx-auto mb-4' src={img1} alt="" srcset="" />
                    <h1 className='text-center'>Nike Zoom Fly-40</h1>
                    <h1 className='text-center'>Unisex</h1>
                    <h1 className='text-center mt-3 text-sky-600'>$99.99</h1>
                </div>
                <div className='shadow-md hover:shadow-lg p-4 rounded-xl bg-[#F6F6F6]'>
                    <img className='w-3/4 h-auto mx-auto mb-4' src={img2} alt="" srcset="" />
                    <h1 className='text-center'>Nike Zoom Fly-40</h1>
                    <h1 className='text-center'>Unisex</h1>
                    <h1 className='text-center mt-3 text-sky-600'>$99.99</h1>
                </div> 
                <div className='shadow-md hover:shadow-lg p-4 rounded-xl bg-[#F6F6F6]'>
                    <img className='w-3/4 h-auto mx-auto mb-4' src={img3} alt="" srcset="" />
                    <h1 className='text-center'>Nike Zoom Fly-40</h1>
                    <h1 className='text-center'>Unisex</h1>
                    <h1 className='text-center mt-3 text-sky-600'>$99.99</h1>
                </div> 
                <div className='shadow-md hover:shadow-lg p-4 rounded-xl bg-[#F6F6F6]'>
                    <img className='w-3/4 h-auto mx-auto mb-4' src={img4} alt="" srcset="" />
                    <h1 className='text-center'>Nike Zoom Fly-40</h1>
                    <h1 className='text-center'>Unisex</h1>
                    <h1 className='text-center mt-3 text-sky-600'>$99.99</h1>
                </div> 
                <div className='shadow-md hover:shadow-lg p-4 rounded-xl bg-[#F6F6F6]'>
                    <img className='w-3/4 h-auto mx-auto mb-4' src={img5} alt="" srcset="" />
                    <h1 className='text-center'>Nike Zoom Fly-40</h1>
                    <h1 className='text-center'>Unisex</h1>
                    <h1 className='text-center mt-3 text-sky-600'>$99.99</h1>
                </div> 
            </div>
            
        </div>
    )
}

export default Shop
