import Layout from '../layouts'
import { GlobalContext } from '../context/GlobalContext'
import { useContext } from 'react'
import SearchInput from '../components/SearchInput'

const CocktailsList = () => {
  const {user, data, isLoading, search} = useContext(GlobalContext)
  //console.log("cocktails", data.drinks[0])
  return (
    <Layout>
      <div>CocktailsList</div>  
      <SearchInput type={search.value} value={search.value} onChange={search.onChange}/>
      {
        isLoading ? <div>Loading...</div> :
        data.drinks?.map((drink: any) => {
          return <div>Name: {drink.strDrink}</div>
        })}
    </Layout>
    )
}

export default CocktailsList