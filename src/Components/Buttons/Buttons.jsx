import "./Buttons.css"


import React from 'react'

const PrimaryButton = ({text}) => {
  return (
    <div class="main-border-button">
     <a href="#">{text}</a>
     </div>
  )
}


const SecondaryButton = () => {
    return (
      <div>SecondaryButton</div>
    )
  }
  

export default PrimaryButton