import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Advertisement from './advertisement.jsx'
import Header from './Header.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <Header />
    <Advertisement />
    </>

  </StrictMode>,
)
