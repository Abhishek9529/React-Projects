import React, { useState } from 'react'
import Options from "../components/Options"
import CountryCard from './CountryCard'
import CountryList from '../../CountryList'



const CountryContainer = () => {
    const [input, setInput] = useState('')

    const filterCountry = CountryList.filter(
        (country) => country.name.common.toLowerCase().includes(input.toLowerCase())
    )
    // console.log(filterCountry);
    
    return (
        <>
            <div className="flex flex-row px-4 justify-between mt-4">
                <input className='w-[400px] p-2 rounded-md shadow-md'
                    type="text"
                    placeholder='Search'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <Options />
            </div>

            <div className='px-4 mt-5 flex flex-row flex-wrap justify-between items-center'>

                {
                    filterCountry.length > 0 &&
                    filterCountry.map(country => {
                        return <CountryCard
                            key={country.name.common}
                            name={country.name.common}
                            img={country.flags.png}
                            population={country.population}
                            region={country.region}
                            capital={country.capital && country.capital[0]}
                        />
                    })
                }

            </div>
        </>
    )
}

export default CountryContainer
