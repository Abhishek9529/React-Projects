import React from 'react'

const TaskList = () => {
    return (
        <div id='taskList' className='h-[250px] w-full rounded-xl flex flex-row flex-nowrap items-center justify-center gap-4  px-5 py-5  overflow-x-auto'>
           
            <div className=' flex-shrink-0 h-full w-[300px] ml-12  bg-red-400 rounded-xl p-4'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                    <h4 className='text-sm'>20 feb 2024</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
                <p className='text-sm mt-2'>agni nemo tempore mollitia, libero itaque quas, ab veritatis ad. Quidem, facilis eum?
                </p>
            </div>

            <div className=' flex-shrink-0 h-full w-[300px]  bg-yellow-400 rounded-xl p-5'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                    <h4 className='text-sm'>20 feb 2024</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
                <p className='text-sm mt-2'>agni nemo tempore mollitia, libero itaque quas, ab veritatis ad. Quidem, facilis eum?
                </p>
            </div>
            <div className=' flex-shrink-0 h-full w-[300px]  bg-green-400 rounded-xl p-5'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                    <h4 className='text-sm'>20 feb 2024</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
                <p className='text-sm mt-2'>agni nemo tempore mollitia, libero itaque quas, ab veritatis ad. Quidem, facilis eum?
                </p>
            </div>
            <div className=' flex-shrink-0 h-full w-[300px]  bg-blue-400 rounded-xl p-5'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                    <h4 className='text-sm'>20 feb 2024</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
                <p className='text-sm mt-2'>agni nemo tempore mollitia, libero itaque quas, ab veritatis ad. Quidem, facilis eum?
                </p>
            </div>

        </div>
    )
}

export default TaskList
