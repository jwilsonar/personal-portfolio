import React from "react";
import './assets/styles/styles-nav.scss'
import Logo from './assets/img/logo.png'

class NavBar extends React.Component{
    constructor (props){
        super(props);
        this.state={
            boton: false,
            isMobile: false
        }
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(){
        
        if(this.state.boton===true){
            this.setState({boton:false});
        }else{
            this.setState({boton:true});
        }
    }

    componentDidMount() {
        // Define un MediaQueryList para verificar si la pantalla es de un dispositivo móvil
        const mobileMediaQuery = window.matchMedia("(max-width: 768px)");
    
        // Registra un evento para escuchar cambios en el estado de la media query
        mobileMediaQuery.addListener(this.handleMobileChange);
    
        // Establece el estado inicial
        this.setState({ isMobile: mobileMediaQuery.matches });
    }
    
    componentWillUnmount() {
        // Limpia el evento cuando el componente se desmonta
        const mobileMediaQuery = window.matchMedia("(max-width: 768px)");
        mobileMediaQuery.removeListener(this.handleMobileChange);
    }
    
    handleMobileChange = (event) => {
        this.setState({ isMobile: event.matches });
    };

    render(){
        const estilos={
            position: 'fixed',
            left: 'calc(100vw - 10rem)',
            'flexDirection': 'column',
            height: '100vh',
            width: '10rem',
            'backgroundColor': 'black',
            padding: '2rem 1rem',
            transition: 'display 1s'
        }
        const estiloHide={
            display:'none',
            transition: 'display 1s'
        }
        let estilosGeneral={};
        
        if(this.state.isMobile){
            if(this.state.boton){
                estilosGeneral=estilos;
            }else{
                estilosGeneral=estiloHide;
            }
        }
        return(
            <>
            <nav style={estilosGeneral}>
                <a href="">
                    <img src={Logo} alt="Logo"/>
                </a>
                <ul>
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#educacion">Educación</a></li>
                    <li><a href="#habilidades">Habilidades</a></li>
                    <li><a href="#Proyectos">Proyectos</a></li>
                    <li><a href="#Contacto">Contacto</a></li>
                </ul>
                <div>
                    <a href="mailto:wilsonalbornozdev@gmail.com" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                    </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/wilson-albornoz-dev/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                    </a>
                </div>
                
            </nav>
            <div className="navigation-nav">
                <div className="nuevo-nav">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="black" viewBox="0 0 16 16" 
                onClick={this.handleChange}>
                <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
                    </svg>
                </div>
            </div>
            </>
        );
    }
}

export default NavBar