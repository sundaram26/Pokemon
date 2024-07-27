import React, { useContext, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { CardContext } from '../context/CardContext';

const Navbar = () => {
    const [isInputVisible, setIsInputVisible] = useState(false);

    const {search, setSearch} = useContext(CardContext);

    const hadleInputVisibility = () => (
        setIsInputVisible(prevState => !prevState)
    )

  return (
    <header>
        <nav className='w-full py-5 px-16 flex items-center justify-between bg-teal-600'>
            <h1 className='text-3xl font-bold tracking-tighter'>pMON</h1>
            <div className='h-10 w-[60%] flex items-center justify-end'>
                {isInputVisible ? (
                    <input 
                        type="text" 
                        placeholder="Pokemon name..." 
                        value={search}
                        className={`h-full w-[85%] px-5 rounded-full outline-none`}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                ): null}
                <FaSearch 
                    onClick={hadleInputVisibility} 
                    className='h-full w-[15%] p-1 cursor-pointer'
                />
            </div>
        </nav>
    </header>
  )
}

export default Navbar