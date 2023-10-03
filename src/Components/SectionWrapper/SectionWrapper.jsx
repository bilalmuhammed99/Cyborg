import React from 'react'
import "./sectionWrapper.css"

const SectionWrapper = (props) => {
  return (
    <div className="section-wrapper container">
           {props.children}
    </div>
  )
}

export default SectionWrapper