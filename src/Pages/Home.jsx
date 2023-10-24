import React, { useContext, useEffect } from 'react'
import AboutUs from '../About'
import CustomerReview from '../CustomerReview'
import Footer from '../Footer'
import HeroSection from '../HeroSection'
import HighLight from '../HighLight'
import Navbar from '../Navbar'
import { AppContext } from '../Context/AppContext'
import { useNavigate } from 'react-router-dom'
export default function Home() {

  const state = useContext(AppContext) ; 
  const [isLogged , setIsLogged] = state.isLogged 
  const navigate = useNavigate() ; 

  useEffect(() => {
    console.log("checking from home" , isLogged);
    if (isLogged===false) {
      navigate('/login');
    }
  }, [isLogged]);

  return (
    <div>
      <Navbar />
      <HeroSection />
      <HighLight />
      <AboutUs />
      <CustomerReview />
      <Footer />
    </div>
  );

 
}
