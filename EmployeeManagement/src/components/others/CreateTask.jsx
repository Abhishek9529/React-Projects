import React from 'react'

const CreateTask = () => {
  return (
    <div className='w-full flex items-center justify-center'>
                <form className='flex flex-row items-center justify-between gap-10 border w-full  p-5  '>
                    <div className='w-full space-y-2'>
                        <h2 className='text-2xl font-bold'> Create Task </h2>
                        <label className='flex flex-col gap-2' >
                            Task Title
                            <input className='border outline-none px-2 py-1 rounded-md ' type="text" />
                        </label>

                        <label className='flex flex-col gap-2'>
                            Date
                            <input className='border outline-none px-2 py-1 rounded-md ' type="date" />
                        </label>
                        <label className='flex flex-col gap-2'>
                            Assign To
                            <input className='border outline-none px-2 py-1 rounded-md ' type="text" placeholder='Employee name' />
                        </label>
                        <label className='flex flex-col gap-2'>
                            Categary
                            <input className='border outline-none px-2 py-1 rounded-md ' type="text" placeholder='Design, dev, etc' />
                        </label>
                    </div>

                    <div className='w-full space-y-2'>
                        <label className='flex flex-col gap-2'>
                            Description
                            <textarea className='border outline-none px-2 py-1 rounded-md ' cols={30} rows={5} name="" id=""></textarea>
                        </label>

                        <button className=' w-full rounded bg-blue-500 px-2 py-1 mt-2'>Create Task</button>
                    </div>


                </form>
            </div>
  )
}

export default CreateTask
