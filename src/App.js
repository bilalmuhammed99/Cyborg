import logo from './logo.svg';
import './App.css';
import { Header, Footer, Container, Hero } from "./Components/index"
import MostPouplar from './Components/MostPopular/MostPouplar';
import GameLibrary from './Components/GameLibrary/GameLibrary';
import { useEffect } from 'react';
import axios, { Axios } from 'axios';
import { instenecAxios } from './Services/Axios';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import Browse from './Pages/Brwose/Browse';
import Streming from './Pages/Streming/Streming';

function App() {



  return (

    <>
      <BrowserRouter >
        <Header />
        <Container>
          <Routes> 
            <Route path='/' element={<Home/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/Browse' element={<Browse/>}/>
            <Route path='/Streming' element={<Streming/>}/>
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </>

  );
}

export default App;
