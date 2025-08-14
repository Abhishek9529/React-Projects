import React from 'react'

const AcceptTask = ({data}) => {
    console.log(data.taskTitle);
    return (
        <div className=' flex-shrink-0 h-full w-[300px] ml-12  bg-red-400 rounded-xl p-4'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>agni nemo tempore mollitia, libero itaque quas, ab veritatis ad. Quidem, facilis eum?
            </p>
            <div className='flex justify-between mt-4'>
                <button className='bg-green-500 rounded-xl  text-sm px-2 py-1 '>Mark as Completed</button>
                <button className='bg-red-500 rounded-xl text-sm px-2 py-1 '>Mark as Failed</button>
            </div>
        </div>
    )
}

export default AcceptTask
