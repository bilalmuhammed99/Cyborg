import React from 'react'
import './container.css'
import Hero from '../Hero/Hero'
import MostPouplar from '../MostPopular/MostPouplar'
import GameLibrary from '../GameLibrary/GameLibrary'


const Container = (props) => {
  return (
    <div className='container main-container'>
         {props.children}
    </div>
  )
}

export default Container