import React from 'react'
import "./hero.css"
import PrimaryButton from '../Buttons/Buttons';

 const Hero = () => {

  // (async function getData() {
  //     const data = await axios.get("https://www.freetogame.com/api/games");
  //       console.log(data);
  //   })();
    
      
    
  
   
  return (
    <div className={" hero-main"}>
       <div className='hero-text'>
         <h6 className="her-subtitle">
          Welcom to Cyborg
         </h6>
         <h4 className='hero-title'> <em> Browse </em> Our Poupler Games Here </h4>
         <PrimaryButton  text={"Browse Now"}/>
        </div>
    </div>
  )
}

export default Hero ;