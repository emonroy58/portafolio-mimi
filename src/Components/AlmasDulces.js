import React, {Component} from 'react';
import Navigation from './Navigation';
import './../styles/AlmasDulces.css'

class AlmasDulces extends Component{

    render(){
        return(
            <Navigation>
            
                <div  className="content">
                    <div className="content-sub-img">
                        <img src="https://i.ibb.co/GQTNGH1/ADportafolio.png" alt="almas-dulces" className="almas-dulces">

                        </img>
                    </div>


                    <div className="content-sub">
                        <strong><h3 className="content-title">ALM<span className="title-under">AS DU</span>LCES</h3></strong><br/>
                        <p className="content-text">
                        El mundo ha cambiado y tenemos oportunidades de crecimiento para la
                        generación de innovadores modelos de negocio, que permitan a los
                        emprendedores brindar soluciones por medio de la transformación de 
                        la industria. Es importante que los modelos de negocio tradicional
                        integren plataformas de e-commerce viceversa. <br/><br/>

                        El valor agregado se centra en ofrecer no solo dulces convencionales 
                        si no también dulces sin azúcar para complementar las mesas de dulces
                        y satisfacer los gustos de todo tipo de invitados. Aunado a ello, Almas
                        Dulces busca generar un impacto social a través de donar una mesa de
                        dulces a organizaciones sociales al haber vendido 10 mesas.<br/><br/>

                        Nuestro método de investigación partio de conceptos de Desing Thinking
                        para desarrollar una inovación centrada en las personas y conocer de
                        manera profunda las posibles soluciones de nuestro problema.<br/><br/>

                        Con la finalidad de mejorar la experiencia del usuario se realizó
                        un análisis del sector y del negocio para detectar áreas de oportunidad
                        y mejoras en la experiencia del usuario.<br/><br/>  
                        <a href="https://github.com/Mimilaos/UXEcommerceCDMX007" target="_blank" className="ref-almas">Leer mas...</a>
                        </p>
                    </div>
                </div>
            
            
            </Navigation> 
        )
    }
}

export default AlmasDulces;

