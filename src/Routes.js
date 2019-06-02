import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from  'react-router-dom';
import Home from './Components/Home';
import About from './Components/SobreMi';
import Portafolio from './Components/Portafolio';
import Contact from './Components/Contacto';
import AlmasDulces from './Components/AlmasDulces';
import Finanzas from './Components/Finanzas';
import Dashboard from './Components/Dashboard';
import Transfiere from './Components/Transfiere';

const Routes =()=>(

         <div>
         <BrowserRouter>   
              <div>
              
                          
                    <Route path="/" component={Home} exact></Route>
                    <Route path="/About" component={About} ></Route>
                    <Route path="/Portafolio" component={Portafolio}></Route>
                    <Route path="/Contact" component={Contact}></Route>
                    <Route path="/AlmasDulces" component={AlmasDulces}></Route>
                    <Route path="/Finanzas" component={Finanzas}></Route>
                    <Route path="/Dashboard" component={Dashboard}></Route>
                    <Route path="/Transfiere" component={Transfiere}></Route>

              </div>
            </BrowserRouter>

            
         </div>   
            
     

)

export default Routes;
