import { useContext, useEffect, useState } from 'react'
import Hero from '../components/Hero/Hero'
import { SearchInput } from '../components/Input'
import { Loader } from '../components/Loader'
import Layout from '../layouts'
import { Container } from '../components/general'
import { GlobalContext } from '../context/GlobalContext'
import { Link } from 'react-router-dom'
import { ResultTitle } from '../components/Title'

/*
  Todo:
  [x] Add drink List 
  [x] Add SearchInput functionality
  [x] Print drinks
  [x] Add Loader
  [ ] Clean form every time render 
*/


const Home = () => {
  const { user, data, isLoading, search, setCurrentPost } = useContext(GlobalContext);
  const drinks = data.drinks

  return (
    <Layout>
      <Hero>
        <SearchInput type='text' value={search.value} onChange={search.onChange}/>
      </Hero>
      <Container>
        {
          search.value.length < 3 ? <ResultTitle>Popular drinks</ResultTitle> : <ResultTitle>Search results</ResultTitle>
        }

        {isLoading ? (
          <Loader />
        ) : (
          drinks?.map((drink: any) => {
            return <div key={drink.idDrink}>Name: <Link onClick={() => setCurrentPost(drink)} to={`cocktails/${drink.idDrink}`}> {drink.strDrink} </Link></div>;
          })
        )}
        
        {drinks?.length === 0 || drinks == null && <div>No results</div>}
      </Container>
    </Layout>
  )
}

export default Home