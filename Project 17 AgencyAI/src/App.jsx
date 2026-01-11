import React, { useState } from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Services from './components/Services';
import OurWork from './components/OurWork';
import Teams from './components/Teams';
import ReachOut from './components/ReachOut';
import Footer from './components/Footer';

const App = () => {
  const [theme , setTheme] = useState('light');
  return (
    <div className='relative dark:bg-black'>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Teams />
      <ReachOut />
      <Footer theme={theme} />
    </div>
  )
}

export default App
