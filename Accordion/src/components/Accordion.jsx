import { useState } from "react"

const Accordion = ({ questionNum, answer }) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='space-y-2 border p-3'>
            <div className="flex space-x-2">
                <h1>{questionNum}. Question?</h1>
                <button onClick={() => setIsOpen(!isOpen)} className='border rounded-xl text-sm px-3 py-1'>
                    {isOpen ? 'Hide' : 'Show'}
                </button>
            </div>
            {
                isOpen && <p>{answer}</p>
            }
        </div>
    )
}

export default Accordion
