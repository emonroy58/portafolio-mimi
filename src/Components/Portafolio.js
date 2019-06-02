import React, {Component} from 'react'
import Navigation from './Navigation'
import { NavLink} from 'react-router-dom';
import { Card, CardLink, CardText, CardBody,
    CardTitle, Row, Col, Container } from 'reactstrap';
import './../styles/Portafolio.css';   



class Portafolio extends Component{

    render(){
        return(
            <Navigation>
             <div className= "cards" >
              
              <Row>
                    <Col md={3}>
                    <CardTitle className="title-almas">Almas Dulces</CardTitle>   
                    <Card className= "card">  
                    <NavLink to="/AlmasDulces"><img src="https://i.ibb.co/k3wRJdW/logo-version-a-color.png" alt="almas-dulces"  className="img-almas"/></NavLink>
                               
                            <CardText className="text-alamas">Almas Dulces es un proyecto creado por 
                                        tres mujeres mexicanas de la Ciudad de 
                                        México con el objetivo de brindar un 
                                        servicio de mesa de dulces para eventos 
                                        especiales de forma personalizada y 
                                        brindar atención durante todo el proceso.
                            </CardText>                                                         
                     </Card>
                    
                    </Col>

                    <Col md={3}>
                    <CardTitle className="title-almas">Tus Finanzas</CardTitle>   
                    <Card className= "card">                              
                                                 
                               
                    <NavLink to="/Finanzas"> <img width="100%" src="https://i.ibb.co/60k5014/img-tus-finanzas.jpg" alt="almas-finanzas"  className="img-finanzas"/></NavLink>
                               
                            <CardText className="text-finanzas">Luego de tener algunos meses en el mercado,
                                                 el equipo detrás de este nuevo producto ha decidido
                                                 contratar a una agencia/consultora de UX que los ayude 
                                                 a definir la dirección y evolución del producto. 
                            </CardText>                                                         
                     </Card>
                    
                    </Col>

                    <Col md={3}>
                    <CardTitle className="title-almas">Dashboard</CardTitle>   
                    <Card className= "card">                              
                                                 
                               
                             <NavLink to="/Dashboard"><img width="100%" src="https://i.ibb.co/F7PJZWj/dashboard.png" alt="dashboard"  className="img-dashboard"/></NavLink>
                               
                            <CardText className="text-dashboard">Diseño de dashboard para la administración de un negocio
                                                 para un freelance. Una manera en la que podemos controlar, medir y 
                                                 rastrear lo que sucede en el negocio de un freelance.
                            </CardText>                                                         
                     </Card>
                    
                    </Col>                 
                </Row> 

              
                 
              <Row>
                    <Col md={3}>
                    <CardTitle className="title-transfiere">Transfiere Directo</CardTitle>   
                    <Card className= "card">
                                
                                                 
                               
                    <NavLink to="/Transfiere"><img width="100%" src="https://i.ibb.co/cFjD6Fs/Transfiere.jpg" alt="transfiere"  className="img-transfiere"/></NavLink>
                               
                            <CardText className="text-alamas">
                            En este reto lo que busco es crear una app que apoye a las personas 
                            en la base de la pirámide a incrementar sus ingresos por medio de 
                            ofrecerles mecanismos de ahorro automático en productos financieros. 	
                            </CardText>                                                         
                     </Card>
                    
                    </Col>

                    <Col md={3}>
                    <CardTitle className="title-transfiere">Service Design</CardTitle>   
                    <Card className= "card">
                                
                                                 
                               
                             <img width="100%" src="https://i.ibb.co/k1Pw45s/Service-Design2.png" alt="Service-Design2"  className="img-Service-Design"/>
                               
                            <CardText className="text-Design">
                            Por medio del Diseño de servicios generamos el realizar una 
                            experiencia de usuario en los cajeros ATM. 
                            Para ello utilizamos diferentes herramientas UX. 	
                            </CardText>                                                         
                     </Card>
                    
                    </Col>
                </Row>    
              
                               
                                     
            </div>

            </Navigation> 
        )
    }
}

export default Portafolio;
