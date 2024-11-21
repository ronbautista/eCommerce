import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Advertisement from './Advertisement.jsx'
import Header from './Header.jsx'
import Carousel from './Carousel.jsx'
import Cards from './Cards.jsx'
import Footer from './Footer.jsx'
import ServiceCards from './ServiceCards.jsx'
import Services from './Services.jsx'
import BackgroundText from './BackgroundText.jsx'
import AboutMe from './AboutMe.jsx'
import BookingComponent from './BookingComponent.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <Header />
  
    <Advertisement />
    <Carousel/>
   <Cards/>
   <ServiceCards/>
<Services/>
<BackgroundText/>
<AboutMe/>
<BookingComponent/>
   <Footer/>

   <App/>
    </>

  </StrictMode>,
)
