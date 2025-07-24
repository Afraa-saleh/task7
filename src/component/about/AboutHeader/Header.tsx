import Navbar from '@/component/header/navbar/Navbar';
import React from 'react'
import HeroAbout from './Hero/Hero';
import { heroimagesabout } from '@/Data/data';




function HeaderAbout() {
  return (
    <div>
      {/* <Navbar/> */}
      <HeroAbout  images={heroimagesabout}
      title="Our team cares about your full relax"
      subtitle="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
/>
    </div>
  )
}

export default HeaderAbout
