import React from 'react'

const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div className='search'>
        <div>
            <img src="./search.svg" alt="search" />
            <input 
                    type="text" 
                    value={searchTerm}
                    placeholder='Search throught thousands of movies'
                    onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
        
    </div>
  )
}

export default Search