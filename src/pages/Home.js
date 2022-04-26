import React from 'react'
import HomeSlide from '../components/HomeSlide'
import Trendigs from '../components/Trendigs'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import TopRated from '../components/TopRated'
function Home({movies}) {

    
  return (
    <div className='home'>
        <HomeSlide  movies={movies}/>
        <Trendigs movies={movies}/>
        {/* <TopRated/> */}
        <Footer/>
    </div>
  )
}

export default Home