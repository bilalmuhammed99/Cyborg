import React from 'react'
import "./card.css"
import { FaStar , FaDownload } from "react-icons/fa6";

const Card = ({cardImage,title,category,rate,download}) => {
  return (
    <div className="section-card">
            <img className="section-image " src={cardImage}  />
            <div className="details">
                <h5>{title} <br /> <span>  {category} </span> </h5>
                <ul >
                    <li> <span className='text-warning'> <FaStar/></span>  {rate}  </li>
                    <li><span className='text-danger' >  <FaDownload/></span> {download} </li>

                </ul>
            </div>
        </div>
  )
}

export default Card