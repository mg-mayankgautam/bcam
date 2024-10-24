import React, { useEffect } from 'react'
import Main from '../components/HomePage/Main/Main'
import TrendingProd from '../components/HomePage/TrendingProd/TrendingProd'
import Solutions from '../components/HomePage/Solutions/Solutions'

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <div>
      <Main />
      <TrendingProd />
      <Solutions />
    </div>
  )
}

export default Home