import "./MostPouplar.css"
import cardImage from '../../Assets/Images/popular-01.jpg'
import cardImage1 from '../../Assets/Images/popular-02.jpg'
import cardImage2 from '../../Assets/Images/popular-03.jpg'
import cardImage3 from '../../Assets/Images/popular-04.jpg'
import cardImage4 from '../../Assets/Images/popular-05.jpg'
import cardImage5 from '../../Assets/Images/popular-06.jpg'
import cardImage6 from '../../Assets/Images/popular-07.jpg'
import React from 'react'
import Card from "../sectionCard/SectionCard"
import SectionHeader from "../SectionHeader/SectionHeader"
import SectionWrapper from "../SectionWrapper/SectionWrapper"
import { mostPopularData } from "../../data/MostPopularData"

const MostPouplar = () => {
    const mostPopularGames =  mostPopularData ;
    const cards = mostPopularGames.map((singlCard,i)=>
        <Card key={i} cardImage={singlCard.image} title={singlCard.title} category={singlCard.categoary} download={singlCard.download} rate={singlCard.rate}/>
    )
  return ( <> 
    <SectionWrapper>
        <SectionHeader> Most Popular </SectionHeader>
        <div className="most-popular-items row ">
           {cards}
        </div>
    </SectionWrapper>
  </>
  )
}

export default MostPouplar