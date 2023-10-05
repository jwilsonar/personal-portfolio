import React,{useState} from 'react'
import './assets/styles/styles-contacto.scss'
import animation from './animation_envio.json'
import Lottie from 'lottie-react';
import emailjs from '@emailjs/browser';

function Contacto() {
    const [form, setForm]=useState({
        nombre:'',
        correo:'',
        mensaje:''
    });
    const handleChangeInput=(event)=>{
        const {name, value}=event.target;
        setForm({...form,[name]:value});
    }
    const handleSubmit=(event)=>{
        event.preventDefault();

        emailjs.init('MdE3j9HTIcMUazYLe');
        emailjs.send('service_o5yzyer','template_yc66vb9', form)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(err) {
            console.log('FAILED...', err);
        });

        setForm({
            nombre:'',
            correo:'',
            mensaje: ''
        })
    }
    return (
        <section id='Contacto'>
            <h1>CONTACTO</h1>
            <div className='contenedor-c'>
                <div className="animacion-c">
                    <Lottie loop={true} animationData={animation} style={{height:'100%'}}/>
                </div>
                <div className="formulario">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" name="nombre" id="nombre" value={form.nombre} onChange={handleChangeInput} placeholder='e.j. Name Lastname' required/>
                        <label htmlFor="correo">Correo</label>
                        <input type="email" name="correo" id="correo" value={form.correo} onChange={handleChangeInput} placeholder='correo@example.com' required/>
                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea name="mensaje" id="mensaje" cols="30" rows="10" value={form.mensaje} onChange={handleChangeInput}></textarea>
                        <button className='boton-principal' type='submit'>Enviar</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contacto