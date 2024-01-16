import React from 'react'
import './projects.css'
import IMG1 from '../../assets/pr1.jpeg'
import IMG2 from '../../assets/pr2.jpeg';
import IMG3 from '../../assets/pr3.jpeg';
import IMG4 from '../../assets/pr4.jpeg';
import IMG5 from '../../assets/pr5.jpeg';
import IMG6 from '../../assets/pr6.jpeg';
import IMG7 from '../../assets/map2.jpeg';
import IMG8 from '../../assets/map1.png';
import Button from '../button/Button';



const data = [
  {
    id: 1,
    image: IMG1,
  },
  

  {
    id: 2,
    image: IMG2,
  },

  {
    id: 3,
    image: IMG3,
  },

  {
    id: 4,
    image: IMG4,
  },

  {
    id: 5,
    image: IMG5,
  },

  {
    id: 6,
    image: IMG6,
  },
  {
    id: 6,
    image: IMG7,
  },
  {
    id: 6,
    image: IMG8,
  },

]

const projects = () => {
  return (
    <section id='projects'>
     

      <div className="container projects__container">
      {
        data.map(({id,image,title,github,demo})=>{
          return(
          <article className="projects__item">
          <div className="projects__item-image">
            <img src={image} alt={title} />
          </div>
        </article>
          )
        })
      }
      </div>
      <div className='project_btn'><Button  data={{name:'Our Projects', url:'projectdetail'}}/></div>
    </section>
  )
}

export default projects
