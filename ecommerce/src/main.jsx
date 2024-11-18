import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Advertisement from './Advertisement.jsx'
import Header from './Header.jsx'
import Carousel from './Carousel.jsx'
import Cards from './Cards.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <Header />
  
    <Advertisement />
    <Carousel/>
   <Cards/>

   <App/>
    </>

  </StrictMode>,
)
