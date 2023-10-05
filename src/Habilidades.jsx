import React from 'react'
import './assets/styles/styles-habilidades.scss'
import logoHtml from '/logo-html.svg'
import logoCss from '/logo-css.svg'
import logoReact from '/logo-react.svg'
import logoC from '/logo-c.svg'
import logoPython from '/logo-python.svg'
import logoNode from '/logo-node.svg'
import logoJs from '/logo-js.svg'
import logoFigma from '/logo-figma.svg'
import logoVisual from '/logo-visual.svg'
import logoSql from '/logo-sql.svg'
import logoBoot from '/logo-bootstrap.svg'
import logoRedux from '/logo-redux.svg'

class Habilidades extends React.Component{
    constructor(props){
        super(props);
        this.state={
            progressVal: 0,
            progressEndVal: 100,
            speed: 10,
            nombreHabi: ''
        }
    }
    handleClick=(finVal, nameVal, color)=>{
        this.setState((state)=>({
            nombreHabi: nameVal
        }));
        let progressBar = document.querySelector(".circular-ph");
        let valueContainer = document.querySelector(".porcentaje-ph");
        progressBar.style.boxShadow=`0 0 40px #${color}`;
        let progress = setInterval(() => {
            this.setState((state)=>({
                progressVal: this.state.progressVal+1
            }));
            valueContainer.textContent = `${this.state.progressVal}`;
            progressBar.style.background = `conic-gradient(
                #${color} ${this.state.progressVal * 3.6}deg,
                #161616 ${this.state.progressVal * 3.6}deg
            )`;
            
            if (this.state.progressVal == finVal) {
                this.setState((state)=>({
                    progressVal: 0
                }));
                clearInterval(progress);
            }
        }, this.state.speed);
    }
    render(){
        
        return (
            <section id='habilidades'>
                <h1>HABILIDADES y HERRAMIENTAS</h1>
                <div className="mas-h">
                    <div className="mas-general-h mas-primero">
                        <img src={logoFigma} alt="" className='logo-figma' onClick={()=>this.handleClick(90,'Figma','A341CC')}/>
                        <img src={logoVisual} alt="" className='logo-visual' onClick={()=>this.handleClick(95,'VS Code','1EB4F6')} />
                        <img src={logoNode} alt="" className='logo-nodeN' onClick={()=>this.handleClick(70,'Node JS','21A366')} />
                    </div>
                    <div className='principal-h'>                
                            <div className="first-container container-h" onClick={()=>this.handleClick(90,'HTML','ED8B01')}><img src={logoHtml} alt="" className='logo-html'/></div>
                            <div className="second-container container-h" onClick={()=>this.handleClick(95,'CSS','219BEE')}><img src={logoCss} alt="" className='logo-css' /></div>
                            <div className="third-container container-h" onClick={()=>this.handleClick(95,'React','80DEEA')}><img src={logoReact} alt="" className='logo-react' /></div>
                            <div className="fourth-container container-h" onClick={()=>this.handleClick(98,'C','545DC8')}><img src={logoC} alt="" className='logo-c' /></div>
                            <div className="fiveth-container container-h" onClick={()=>this.handleClick(80,'Python','FFC107')}><img src={logoPython} alt="" className='logo-python'/></div>
                            <div className="sixth-container container-h" onClick={()=>this.handleClick(90,'JavaScript','E9CA32')}><img src={logoJs} alt="" className='logo-node' /></div>
                            <div className='container-ph'>
                                <div className="circular-ph">
                                    <div className='contenido-ph'>
                                        <p className='porcentaje-ph'>50</p>
                                        <p className='nombre-ph'>{this.state.nombreHabi}</p>
                                    </div>
                                </div>
                            </div>                
                    </div>
                    <div className="mas-general-h mas-tercero">
                        <img src={logoSql} alt="" className='logo-sql' onClick={()=>this.handleClick(80,'SQL','216287')} />
                        <img src={logoBoot} alt="" className='logo-boot' onClick={()=>this.handleClick(90,'Bootstrap','6C19FF')} />
                        <img src={logoRedux} alt="" className='logo-redux' onClick={()=>this.handleClick(70,'Redux','7E57C2')} />
                    </div>

                </div>
            </section>
        )
    }
}
export default Habilidades
