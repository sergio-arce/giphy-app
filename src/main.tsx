import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GifPage from './pages/GifPage'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GifPage />
  </StrictMode>
)
