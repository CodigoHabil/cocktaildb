import Layout from '../layouts'
import { GlobalContext } from '../context/GlobalContext'
import { useContext } from 'react'

const CocktailsList = () => {
  const {user, data, isLoading} = useContext(GlobalContext)
  //console.log("cocktails", data.drinks[0])
  return (
    <Layout>
      <div>CocktailsList</div>  
      {
        isLoading ? <div>Loading...</div> :
        data.drinks?.map((drink: any) => {
          return <div>Name: {drink.strDrink}</div>
        })}
    </Layout>
    )
}

export default CocktailsList