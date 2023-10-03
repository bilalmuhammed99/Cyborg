import React from 'react'
import "./card.css"
import { FaStar , FaDownload } from "react-icons/fa6";

const Card = ({cardImage,title,category,rate,download}) => {
  return (
    <> 
    <div className="section-card col-lg-4 border border-1 border-dark my-1 col-md-6 col-sm-12">
            <img className="section-image" src={cardImage}  />
            <div className="details">
                <h4>{title} <br /> <span className='text-secondary'>  {category} </span> </h4>
                <ul >
                    <li> <span className='text-warning'> <FaStar/></span>  {rate}  </li>
                    <li><span className='text-danger' >  <FaDownload/></span> {download} </li>

                </ul>
            </div>
        </div>
       
        </>
  )
}

export default Card