import React from 'react'

const CountryCard = ({name, img, population, region, capital}) => {
    
    
  return (
    <>
     

    <div className=' w-[220px] h-[300px] rounded-md overflow-hidden shadow-md mb-6'>
      <img src={img} alt="" />
      <div className='h-[140px] p-3 flex flex-col justify-between'>
        <div className='text-2xl font-bold'>{name}</div>
        <div>
            Population : {population}
        </div>
        <div>
            Region: {region}
        </div>
        <div>
            Capital: {capital ?  capital : name}
        </div>
      </div>
    </div>
    </>
  )
}

export default CountryCard
