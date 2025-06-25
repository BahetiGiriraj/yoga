import React from 'react'
import NewsLetterBox from '../Components/NewsLetter'
import Hero from '../Components/Hero'
import HeroHome from '../Section/HeroHome'
import AlignmentSection from '../Section/AlignmentSection'
import Yoja from '../Components/Yoja'
import LeftAsana from '../Components/about/LeftAsana'
import RightAsana from '../Components/about/RightAsana'
import AsanaPage from '../Components/about/AsanaPage'
import Testimonials from '../Components/Testimonials'

const Home = () => {
  return (
    <div>
      <HeroHome/>
      <AlignmentSection/>
      <Yoja/>
      <Testimonials/>
      <AsanaPage/>
      <NewsLetterBox/>
    </div>
  )
}

export default Home
