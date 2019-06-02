import React, {Component} from 'react';
import Navigation from './Navigation';
import './../styles/AlmasDulces.css'

class Finanzas extends Component{

    render(){
        return(
            <Navigation>
            
                <div  className="content">
                    <div className="content-sub-img">
                        <img src="https://i.ibb.co/GnXsY8B/tus-finanzas.png" alt="tus-finanzas"  className="almas-dulces">

                        </img>
                    </div>


                    <div className="content-sub">
                        <strong><h3 className="content-title">TUS <span className="title-under">FINAN</span>ZAS</h3></strong><br/>
                        <p className="content-text">
                        En base a la información brindada, se recabaron datos representativos con respecto 
                        al mercado en cuestión y así poder entender el problema y las necesidades que los 
                        usuarios actualmente enfrentan en México con respecto al ahorro y el manejo de sus 
                        finanzas de manera responsable, para ello tomamos tópicos representativos que me 
                        llevaran a entender el escenario que enfrenta el usuario ante el ahorro y su debida 
                        administración.<br/><br/>

                        El método de investigación partio de conceptos de Desing Thinking para desarrollar
                        una innovación centrada en las personas y conocer de manera profunda las posibles
                        soluciones de nuestro problema.<br/><br/>

                        Los objetivos del proyecto es re-diseñar la aplicación por medio de un diagnóstico,                            
                        analizar la data del producto, realizando una investigación de campo y pruebas de                              
                        usabilidad que me llevaran a proponer una propuesta de diseño que respondan a las
                        necesidades y la experiencia de usuario. <br/><br/>

                        <a href="https://github.com/Mimilaos/cdmx_2018_01_ux_financial_app.md" target="_blank" className="ref-almas">Leer mas...</a>
                        </p>
                    </div>
                </div>
            
            
            </Navigation> 
        )
    }
}

export default Finanzas;

