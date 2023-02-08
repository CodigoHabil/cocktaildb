import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import ContextWrapper from './context/ContextWrapper'
import { DrinkContextWrapper } from './context/DrinksContext'
import './styles/scss/index.scss'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextWrapper>
        <DrinkContextWrapper>
          <App />
        </DrinkContextWrapper>
      </ContextWrapper>
    </BrowserRouter>
  </React.StrictMode>,
)
