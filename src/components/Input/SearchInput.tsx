import React from 'react'
import { SearchContainer } from './Components'
import { AiOutlineSearch } from 'react-icons/ai'

const SearchInput = (props: any) => {
  return (
    <SearchContainer>
        <input type={props.type} value={props.value} onChange={props.onChange} placeholder="Search any cocktail" />
        <AiOutlineSearch />
    </SearchContainer>
  )
}

export default SearchInput 