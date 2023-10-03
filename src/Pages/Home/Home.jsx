import { Hero } from "../../Components"
import GameLibrary from "../../Components/GameLibrary/GameLibrary"
import MostPouplar from "../../Components/MostPopular/MostPouplar"
import "./home.css"
import React from 'react'

const Home = () => {
  return (
    <> 
    <Hero />
    <MostPouplar />
    <GameLibrary />
  </>)
}

export default Home