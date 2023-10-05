import React from "react";
import './assets/styles/styles-proyectos.scss'
import fondoEjemplo from '/fondo-estrellas.jpg'
import fondoUno from '/imagen-01.png'
import fondoDos from '/imagen-02.png'
import fondoTres from '/imagen-03.png'
import fondoCuatro from '/imagen-04.png'
import fondoCinco from '/imagen-05.png'

class Proyectos extends React.Component{
    constructor(props){
        super(props);
        this.state={
            titulo:'',
            anio:'',
            descripcion:'',
            img: fondoUno
        }
    }
    handleChange=(titulo, anio, descripcion, img, posicion)=>{
        const etiqueta=document.getElementsByTagName('li');
        console.log(etiqueta);
        for(let i=5;i<9;i++){
            etiqueta[i].classList.remove('item-active-p');
        }
        etiqueta[posicion].classList.add('item-active-p');
        this.setState({
            titulo:titulo,
            anio:anio,
            descripcion:descripcion,
            img:img
        });
    }
    render(){
        return(
            <section id="Proyectos">
                <h1>PROYECTOS</h1>
                <div className="contenedor-pro">
                    <div className="contenedor-proUno">
                        <ul>
                            <li className="item-active-p" onClick={()=>this.handleChange("Producto Promocional", '2020','Página de promoción para un producto, enfocado en resaltar características',fondoUno,5)}>Proyecto 01</li>
                            <li onClick={()=>this.handleChange("Página de Agencia de viajes", '2021','Centrada en la promoción de viajes a diversos destinos, con contenido visual de alta calidad.',fondoDos,6)}>Proyecto 02</li>
                            <li onClick={()=>this.handleChange("News Landing Page", '2021','Página estilo blogger, para el lanzamiento de contenido informativo, especialmente, artículos.',fondoTres,7)}>Proyecto 03</li>
                            
                            <li  onClick={()=>this.handleChange("Museo Makap", '2021','Museo virtual, con arte contemporáneo',fondoCinco,8)}>Proyecto 04</li>
                        </ul>
                    </div>
                    <div className="contenedor-proDos">
                        <img src={this.state.img} alt="" />
                        <div>
                            <h2>{this.state.titulo}</h2>
                            <p>{this.state.anio}</p>
                            <p>{this.state.descripcion}</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Proyectos