import React from 'react'
import Navbar from './navbar/Navbar'
import Hero from './hero/Hero';
import { heroimageshome } from '@/Data/data';



function Header() {
  return (
    <div>
      <Navbar/>
      <Hero  images={heroimageshome}
      title="Enjoy in the best way!"
      subtitle="Enjoy our services for your trip anytime"
/>
    </div>
  )
}

export default Header
