import React, { Component } from 'react';
import './../styles/Footer.css'


class Footer extends Component{
    render(){
        return(
               <footer className="footer text-center">
               
                    <div className="contenido">
                             
                        <div className="footer-cont-redes">
                        
                            <div className="main-cont-redes">
                                
                            
                            <div className="colum">
                                <img src="https://i.ibb.co/CvQMK48/logo-mimi-version-blanco.png" alt="logo-mimi-version-blanco" className="img-logo-bn"></img>
                            </div>                        


                                <div className="footer-redes">
                                <div className="footer-descargar">
                                     <a><p className="desc-cv">Descargar CV</p></a>
                                </div>
                                <a href="#"><img src="https://i.ibb.co/4TR5tgr/icono-git-mimi.png" alt="icono-git-mimi" className="redes"></img></a>
                                <a href="#"><img src="https://i.ibb.co/qjJm898/icono-twitter-mimi.png" alt="icono-twitter-mimi" border="0" className="redes"></img></a>
                                <a href="#"><img src="https://i.ibb.co/TLjN4S6/icono-link-mimi.png" alt="icono-link-mimi" border="0" className="redes"></img></a>
                                </div>
                            </div>                        
                         
                        </div>                                               

                    </div>
                    
               </footer> 
        );
    }

}

export default Footer;
