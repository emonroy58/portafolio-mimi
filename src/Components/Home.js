import React, {Component} from 'react'
import BackgroundImage from './../image/NOMBRE_dos.png'
import Navigation from './Navigation'
import './../styles/Navigation.css'

const coverStyle = {
    backgroundImage: `url( ${BackgroundImage} )`,
    height: '115vh',
    backgroundSize: 'cover' 
}

class CoverPage extends Component{

    render(){
        return(
            <Navigation>
            <header clasName="avatar"  style={coverStyle}>
                
            </header>
            </Navigation> 
        )
    }
}

export default CoverPage;