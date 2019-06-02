import React, {Component} from 'react';
import Navigation from './Navigation';
import './../styles/AlmasDulces.css'

class Transfiere extends Component{

    render(){
        return(
            <Navigation>
            
                <div  className="content">
                    <div className="content-sub-img-trans">
                        <img src="https://i.ibb.co/xf4RpyC/transfiere.png" alt="transfiere"  className="img-trans">

                        </img>
                    </div>


                    <div className="content-sub">
                        <strong><h3 className="content-title">TRANSFI<span className="title-under">ERE </span>DIRECTO</h3></strong><br/>
                        <p className="content-text">                        
                        Nuestro proyecto se quiere enfocar a la base de la pirámide encontramos
                        que de acuerdo a nuestros user persona ellos se encuentran en la clase 
                        “Baja-Baja” que son en total 39 millones de personas. 
                        Algunas de las características que encontramos es que ellos buscan
                        un lenguaje más informal debido a que los bancos tradicionales 
                        utilizan tecnicismos que no entienden, además que estamos hablando 
                        de nuestra user persona “Juan”, que recibe el dinero en Estados Unidos,
                        recordemos que se trata de una persona que se encuentra como
                        indocumentada en este país y que tiene a su familia en México debido 
                        a las adversidades que enfrentó. <br/><br/>

                        Al realizar la debida investigación encontramos los diferentes problemas
                        a los que se enfrenta la población más desfavorecida, por lo que nuestra
                        propuesta es desarrollar una App que permite realizar pagos, enviar y
                        recibir dinero. Dentro de la sección de pagos, la aplicación integrará la 
                        funcionalidad para pagos a través de código QR, utilizando el sistema de 
                        Cobro Digital (CoDi). Esto con la intención de facilitar la adopción de 
                        pagos digitales en nuestra población objetivo.<br/><br/>

                        <a href="https://docs.google.com/document/d/1Yvwxks5NvGFN6srtZ0XtbH-bbwevVFyBAUAX4YhhMSc/edit?usp=sharing" target="_blank" className="ref-almas">Leer mas...</a>
                        </p>
                    </div>
                </div>
            
            
            </Navigation> 
        )
    }
}

export default Transfiere;
