import React, { Component} from 'react';
import './../styles/About.css';
import Navigation from './Navigation';


class  About extends Component{
render (){

    return(
        <Navigation >   
       <div class="container">
        <main class= "container-text">
            <h1></h1>
                <p>
               <div className="title"><h1>SOBRE MI</h1> </div> <br></br>
                Reconocer la necesidad es la principal condición para el diseño.
                </p><br></br>
                <span className="Autor">Charles Eames</span>
                <p><br></br></p>
                <p>Por  favor,   llámame   Mimi,  estudié Diseño   y   Comunicación Visual 
                en la   Facultad de   Artes y Diseño   UNAM,   finalmente el interés hacia 
                la tecnología me llevo a Laboratoria, lugar donde me gradúe como UX Designer. 
                Los conocimientos  como  diseñadora  y  UX me llevan a desarrollar propuestas
                basadas en el usuario, la funcionalidad y elementos visuales con metodologías 
                ágiles, artista  digital  e  ilustradora,  que está lista para hacer miles de 
                diseños modernos, elegantes.
                </p>   
                <p><br></br>
                Disfruto resolviendo problemas y nunca me rindo en el camino por la solución perfecta.
                </p>
        </main>

        <aside className="sidebar">
            <img src="https://i.ibb.co/fnRRW9y/FOTO-SOBRE-MI.png" alt="Image-About" className="img-about"></img>
        </aside>

       </div>    
     </Navigation>     
    )
 }

}

export default About;
     