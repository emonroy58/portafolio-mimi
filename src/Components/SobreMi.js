import React, { Component} from 'react';
import './../styles/About.css';
import Navigation from './Navigation';


class  About extends Component{
render (){

    return(
        <Navigation >   
        <body>
        <div class="container">
          
            <div className="box-text">
                           <h3>SOBRE MI</h3><br></br>
                           <span clasName="cita">
                            Reconocer  la  necesidad  es la principal condición para el diseño. 
                           </span><br></br>
                           <div className="cita-autor">
                           Charles Eames.    
                           </div> <br></br>
                           <div className="description">Por  favor,   llámame   Mimi,  estudié Diseño   y   Comunicación Visual 
                           en la   Facultad de   Artes y Diseño   UNAM,   finalmente el interés hacia 
                           la tecnología me llevo a Laboratoria, lugar donde me gradúe como UX Designer. 
                           Los conocimientos  como  diseñadora  y  UX me llevan a desarrollar propuestas
                           basadas en el usuario, la funcionalidad y elementos visuales con metodologías 
                           ágiles, artista  digital  e  ilustradora,  que está lista para hacer miles de 
                           diseños modernos, elegantes.                          
                          
                           </div> <br></br>
                           <div className="description-child"> Disfruto resolviendo problemas y nunca me rindo en el camino por la solución perfecta.</div>
       
             </div>
           
             <div className="box">
                <img src="https://i.ibb.co/fnRRW9y/FOTO-SOBRE-MI.png" alt="Image-About" className="img-about"></img>
            </div> 
           
        </div>    

        </body>
      
     </Navigation>     
    )
 }

}

export default About;
     
