import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Advertisement from './advertisement.jsx'
import Header from './Header.jsx'
import Carousel from './Carousel.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <Header />
   <Carousel/>
    <Advertisement />
   
    </>

  </StrictMode>,
)
