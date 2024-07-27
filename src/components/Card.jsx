import React, { useContext } from 'react'
import { CardContext } from '../context/CardContext';


const Card = () => {

    const {data, loading, search} = useContext(CardContext)
    console.log(data)
    data.map((newData, i)=>(
      console.log(newData.index)
    ))
    // console.log(typeof(data))
    const searchData = data.filter((newData) => (
      newData.name.toLowerCase().includes(search.toLowerCase())
    ))

    if(loading){
      return <div>Loading...</div>
    }

    return (
      <div className='flex justify-center flex-wrap gap-5 pb-[50px]'>
        {searchData.map((newData, i) =>(
            <div key={newData.index} className="h-[350px] w-[300px] p-2 bg-teal-100 rounded-lg flex flex-col justify-between">
              <img 
                className=" object-cover h-[80%] w-full" 
                src={newData.details} 
                alt={newData.name} 
              />
              <h2 className="font-bold text-xl mb-[10%] text-center">{newData.name}</h2>
            </div>
        ))}
      </div>
    );
}

export default Card;
