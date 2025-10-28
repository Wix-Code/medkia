import React from 'react'
import HeroPage from './components/home/HeroPage'
import Categories from './components/home/Categories'
import Banner from './components/home/Banner'
import WhyMedkia from './components/home/WhyMedkia'

const page = () => {
  return (
    <div>
      <HeroPage />
      <Categories />
      <Banner />
      <WhyMedkia />
    </div>
  )
}

export default page