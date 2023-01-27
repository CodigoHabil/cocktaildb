import React from 'react'
import { GlobalContext } from './GlobalContext'
import {useFetch} from '../hooks/useFetch'

const initial = {
    'cocktails': [],
    'user': 'default',
}

const ContextWrapper = (props: any) => {

  const {data, hasError, isLoading} = useFetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka')

  return (
    <GlobalContext.Provider value={{...initial, data:data?data:{}, isLoading }}>
        { props.children }
    </GlobalContext.Provider>
  )
}

export default ContextWrapper