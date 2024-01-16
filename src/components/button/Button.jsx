import React from 'react';
import { Link } from 'react-scroll';
import "./button.css"

const Button = ({data}) => {
  return (
    <div>
      <Link
       activeClass="active"
      to={data.url}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}><button  className="section-btn">{data.name}</button> </Link>
    </div>
  )
}

export default Button
