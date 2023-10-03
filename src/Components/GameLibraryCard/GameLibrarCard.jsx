import PrimaryButton from "../Buttons/Buttons"
import "./gameLibrarCard.css"

import React from 'react'

const GameLibrarCard = (props) => {
  return (
    <div className="game-Librar-Card "   >
        <ul>
            <li><img width={150} className="rounded rounded-3" src={props.image}/></li>
            <li> <h4>  {props.title}</h4> <span>{props.category}</span> </li>
            <li> <h4>Date Added</h4> <span>  {props.dateAdedd}</span> </li>
            <li><h4>playing Hours</h4> <span>  {props.playingHours}</span> </li>
            <li> <PrimaryButton  text={"Download"}/>  </li>
        </ul>
    </div>
  )
}

export default GameLibrarCard