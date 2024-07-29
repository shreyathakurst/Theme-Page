import React from 'react'
import Navbar from '../Components/Navbar'
import Intro from './Intro'
import Theme from './Theme'
import Participate from './Participate'
import Card  from '../Components/Card'
import Competition from './Competition'
import { FooterWithLogo } from '../Components/Footer'


function Home() {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <Theme/>
      <Participate/> 
      <Competition/>
      <FooterWithLogo/>
    </div>
  )
}

export default Home