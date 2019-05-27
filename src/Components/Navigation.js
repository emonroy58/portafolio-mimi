import React from 'react';
import { NavLink} from 'react-router-dom';
import {Nav, NavItem, Navbar,NavbarBrand} from 'reactstrap';
import './../styles/Navigation.css';


const  Navigation =(props)=>(

         <div>   
          <Navbar color="light" light expand="md">
          <NavbarBrand href="/"> <img src="https://i.ibb.co/SNpxVVx/LOGO-MIMI.png" alt= "Logo" className="logo"></img></NavbarBrand>
            <Nav className="ml-auto" navbar>
               
                
                <NavItem><NavLink to="/"><li>HOME</li></NavLink></NavItem>
                <NavItem><NavLink to="/About"><li>SOBRE MI</li></NavLink></NavItem> 
                <NavItem><NavLink to="/Portafolio"><li>PORTAFOLIO</li></NavLink></NavItem>
                <NavItem><NavLink to="/Contacto"><li>CONTACTAME</li></NavLink></NavItem>
                
                
            </Nav>         

          </Navbar>
           
           
           
            {props.children}
         </div>             
       
    

)


export default Navigation;
     