
const Box = ({ handleClose, isModelOpen, children }) => {

    return (
        // 2. This is your original Box component
        <div className={` w-3/12 border p-4 rounded-md space-y-4`}>
            <div className='w-full text-right'>
                <button onClick={handleClose} className='border px-3 py-1'>x</button>
            </div>
            {children}
        </div>
    )
}

export default Box