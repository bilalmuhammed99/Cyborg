import "./sectionHeader.css"
import React from 'react'

const SectionHeader = (props) => {
  return (
    <div className="section-header">
        <h2>  {props.children} </h2>  
        </div>
  )
}

export default SectionHeader