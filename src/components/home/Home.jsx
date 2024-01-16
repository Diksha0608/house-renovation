import React from 'react'
import './home.css'
import Button from '../button/Button'

const Home = () => {
  return (
    <>
    <section className='home-section' id='home'>

 
       <div className='text_container'><h1>Welcome to House Renovation!</h1>
                <p>We are reliable and solid contractor in the field of new contruction and rennovation </p>
                <div className='btn'><Button data={{name:'Get Started', url:'about'}}/></div>
</div>
            </section>
    </>
  )
}

export default Home
