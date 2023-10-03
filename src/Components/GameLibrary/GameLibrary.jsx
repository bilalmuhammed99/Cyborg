import { gameLibraryData } from "../../data/GamingLibraryData"
import GameLibrarCard from "../GameLibraryCard/GameLibrarCard"
import SectionHeader from "../SectionHeader/SectionHeader"
import SectionWrapper from "../SectionWrapper/SectionWrapper"
import "./gameLibrary.css"
import React from 'react'

const GameLibrary = () => {
    
    const _gameLibraryData =  gameLibraryData ; 
    const libraryGames = _gameLibraryData.map((singlGame,i)=>
    <GameLibrarCard key={i} image={singlGame.image} title={singlGame.title} Currntly={singlGame.Currntly} playingHours={singlGame.hours_played} dateAdedd={singlGame.date_added} category={singlGame.categoary}/> )
    
  return (
    <SectionWrapper>
    <SectionHeader>
        GAME LIBRARY
   </SectionHeader> 
    {libraryGames}
   </SectionWrapper>
   
  )
}

export default GameLibrary