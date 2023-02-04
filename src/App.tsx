import { Main } from './components/general'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home, About, Cocktail, CocktailsList, NotFound } from './pages'

function App() {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cocktails" element={<CocktailsList/>} />
        <Route path="/cocktails/:id" element={<Cocktail />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to='/404' />} />
      </Routes>
    </Main>
  )
}

export default App
