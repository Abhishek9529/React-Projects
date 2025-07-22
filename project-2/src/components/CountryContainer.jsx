import CountryCard from './CountryCard'

const CountryContainer = ({isDark, filterCountry}) => {
    
    return (
        <>
            <div className={`${isDark ? 'bg-black text-white ' : ''} h-screen px-4 pt-5 flex flex-row flex-wrap justify-between items-center`}>
                {
                    filterCountry.length > 0 &&
                    filterCountry.map(country => {
                        return <CountryCard
                            isDark={isDark}
                            key={country.name.common}
                            name={country.name.common}
                            img={country.flags.png}
                            population={country.population.toLocaleString('en-IN')}
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
