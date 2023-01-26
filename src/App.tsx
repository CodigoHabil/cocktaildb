import './styles/App.css'
import { Main } from './components/general'
import { Routes, Route } from 'react-router-dom'
import { Home, About, Cocktail, CocktailsList, NotFound } from './pages'

function App() {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cocktails" element={<CocktailsList/>}>
          <Route path=":id" element={<Cocktail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Main>
  )
}

export default App
