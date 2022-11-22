import React from 'react'

const SearchBar = () => {
  return (
    <div>
      <input 
        type='search'
        placeholder='Search'
        className='searchBar'
        onSubmit={e => e.preventDefault()}
      />
    </div>
  )
}

export default SearchBar