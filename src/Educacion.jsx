import React from 'react'
import './assets/styles/styles-educacion.scss'
import fondoPucp from './assets/img/fondo-pucp.jpg'
import fondoCoar from './assets/img/fondo-coar.jpeg'
import fondoAcp from './assets/img/fondo-acp.jpg'

export default function Educacion() {
    return (
        <section id='educacion'>
            <h1>EDUCACIÓN</h1>
            <div className='contenedor-e'>
                
                <div className='card-e'>
                    <div>
                        <h2>ACP</h2>
                        <p>2015-2016</p>
                    </div>
                    <img src={fondoAcp} alt="" className='fondo-e' />
                </div>
                <div className='card-e'>
                    <div>
                        <h2>COAR HUÁNUCO</h2>
                        <p>2017-2019</p>
                    </div>
                    <img src={fondoCoar} alt="" className='fondo-e' />
                </div>
                <div className='card-e'>
                    <div>
                        <h2>PUCP</h2>
                        <p>2020-Actualidad</p>
                    </div>
                    <img src={fondoPucp} alt="" className='fondo-e' />
                </div>
            </div>
        </section>
    )
}
