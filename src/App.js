import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {
  BrowserRouter ,
   Routes,
  Route,   
  Link, 
  NavLink 
} from "react-router-dom";

import { Home } from './component/home/Home'
 import { Client } from './component/client/index';
 import { Achievements } from './component/achievements/Achievements' ;
import { OurTeam } from './component/our_team/OurTeam';
import { Features } from './component/features/Features';
import { GetInTouch } from './component/get_in_touch/GetInTouch';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Triangle } from  'react-loader-spinner';
import logo from './img/logo.png';
function App() {
  window.onload = function(){
     var main_container = document.querySelector('.main_container');

     main_container.style.display = 'none';
     document.body.style.overflow = 'auto'
  }
  Aos.init(); 
  return (
    <div className='App'> 
    {/* spinner loading ↓↓↓ */}
      <div className="main_container">
  <Triangle className="loading" color="#0074e1" height={80} width={80} />
  </div> 

  
      <BrowserRouter>
      <Navbar className='nav' collapseOnSelect expand="lg" bg="dark" variant="dark"  sticky="top">
      <Container>
        <Navbar.Brand as ={Link} to ='/'><img className='logo' src={logo}  /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="ms-auto ">
            <Nav.Link as ={Link} to ='/' >Home</Nav.Link> 
            <Nav.Link as ={Link} to ='/features'>features</Nav.Link>
            <Nav.Link as ={Link} to ='/achievements'>achievements</Nav.Link>
            <Nav.Link as ={Link} to ='/client'>Clients</Nav.Link>
            <Nav.Link as ={Link} to ='/team' className="me-5 display-7 ">team</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
      <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/features' element={<Features />} />
        <Route path='/client' element={<Client />} />
        <Route path='/team' element={<OurTeam />} />
        <Route path='/achievements' element={<Achievements />} />
        <Route path='/contact' element={<GetInTouch />} />
      </Routes>
    </div>
    </BrowserRouter> 
  {/* end navbar block */}



{/* footer */}
<GetInTouch />
     </div>
  );
}                          
    
 export default App; 
 