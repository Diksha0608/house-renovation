import React from 'react'
import './about.css'
import about from '../../assets/about-company.jpg'


const About = () => {
  return (
    <section className='section aboutwrap' id='about'>
      <div className='scroll_watcher'></div>
      <div className='about-container'>
        <div className='about-left'>
          <div className='about-img'>
            <img src={about} alt="about" />
          </div>

        </div>
        <div className='about-right'> <h2 className='subtitle'>Welcome to</h2> <h3>House Rennovation company</h3>Welcome to House Renovation, a contractor and renovator with local and worldwide experience you can trust.

          Our competent and customer-friendly construction company uses current working methods, which has earned us a reputation as a dependable and strong contractor in the field of new construction and renovations. The company's founders have professional roots that date back to 1995.

          <h2 className='range_service'>Range of Services</h2>
          <ul className='ul_list'>
            <li>Performing dismantling and installation work.</li>
            <li>Installing floor heating.</li>
            <li>Carpentry work.</li>
            <li>Plumbing installation.</li>
            <li>Carrying forth communications.</li>
            <li>Expansion of living space.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
