import React from 'react'

const FailedTask = () => {
  return (
    <div className=' flex-shrink-0 h-full w-[300px]  bg-green-400 rounded-xl p-5'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>agni nemo tempore mollitia, libero itaque quas, ab veritatis ad. Quidem, facilis eum?
            </p>

            <div className='mt-4'>
                <button className='w-full bg-red-500  px-2 py-1 rounded-xl text-sm' > Failed </button>
            </div>
        </div>
  )
}

export default FailedTask
