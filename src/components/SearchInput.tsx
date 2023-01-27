import React from 'react'


const SearchInput = (props: any) => {
  return (
    <div>
        <input type={props.type} value={props.value} onChange={props.onChange} placeholder="Search" />
    </div>
  )
}

export default SearchInput