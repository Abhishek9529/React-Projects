import React from 'react'
import filpkart from '../assets/flipkart.png'
import amazon from '../assets/amazon.png'
import shoe_image from '../assets/shoe_image.png'

const Home = () => {
    return (
        <div className=' w-[1125px]  mx-auto mt-8 flex flex-row justify-center items-center '>
            <div className='w-[500px] flex flex-col gap-5'>
                <div className='text-6xl font-extrabold w-10/12'>YOUR FEET DESERVE THE BEST</div>

                <div className=' w-7/12 text-gray-500 font-semibold text-sm'>
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                </div>

                <div className='space-x-6'>
                    <button className='bg-red-500 text-white px-2 py-1 font-bold '>Shop Now</button>
                    <button className='border text-gray-500 px-2 py-1 font-bold'>Category</button>
                </div>

                <div>
                    <p className='text-gray-500'>Also Available On</p>
                </div>
                <div className='flex flex-row gap-2'>
                    <img src={filpkart}  alt="" />
                    <img src={amazon} alt="" />
                </div>
            </div>

            <div>
                <img src={shoe_image} width='430' alt="" />
            </div>
        </div>
    )
}

export default Home
