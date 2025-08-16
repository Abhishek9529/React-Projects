import React, { useState } from 'react'

const Input = ({ type, value, handleConverter }) => {

    return (
        <div>
            <label>
                {type}
                <input className='outline-none border rounded-md ml-4' type="number"
                    value={value}
                    onChange={(e) => handleConverter({ type: type, value: e.target.value })}
                />
            </label>
        </div>
    )
}

export default Input
