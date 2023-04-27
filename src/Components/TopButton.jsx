import React from 'react'

const TopButton = () => {

    const cities=[
        {
            id:1,
            title:"London"
        },
        {
            id:2,
            title:"New Delhi"
        },
        {
            id:3,
            title:"New York"
        },
        {
            id:4,
            title:"Tokyo"
        },
        {
            id:5,
            title:"Beijing"
        }
    ]
  return (
    <div className='flex items-center justify-around my-6'>
    {cities.map((city)=>(
        <button key={city.id} className='text-white text-lg font-medium'>{city.title}</button>
    ))}
</div>
  )
  
  
}

export default TopButton