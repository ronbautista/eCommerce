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
import Services1 from './Services1.jsx'
import Services2 from './Services2.jsx'
import Services3 from './Services3.jsx'
import Service4 from './Service4.jsx'
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
<Services2/>
<Footer/>
<Services1/>
<Footer/>
<Service4/>
<Footer/>
<Services3/>
   <Footer/>


   <App/>
    </>

  </StrictMode>,
)
