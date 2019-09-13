import React, {Component} from 'react'
import './SimpleSteps.scss'
import {Link} from "react-router-dom";




class SimpleSteps extends Component {
    render() {
        return (
            <div name="SimpleSteps" className="simplesteps">
                <div className="topstep">
                <h1> Wystarczą 4 proste kroki </h1>
                <div className="decoration"></div>
                </div>
                <div className="mainsteps">
                <div className="steps">
                    <div className="stepicon1"/>
                    <p>Wybierz rzeczy</p>
                    <hr/>
                    <span>ubrania, zabawki, <br/> sprzęt i inne</span>
                </div>
                <div className="steps">
                    <div className="stepicon2"/>
                    <p>Spakuj je</p>
                    <hr/>
                    <span>skorzystaj z <br/> worków na śmieci</span>
                </div>
                <div className="steps">
                    <div className="stepicon3"/>
                    <p>Zdecyduj komu <br/> chcesz pomóc</p>
                    <hr/>
                    <span>wybierz zaufane <br/> miejsce</span>
                </div>
                <div className="steps">
                    <div className="stepicon4"/>
                    <p>Zamów kuriera</p>
                    <hr/>
                    <span>kurier przyjedzie <br/> w dogodnym terminie</span>
                </div>
                </div>
                <div className="footstep">
                <Link to="/logowanie" className="raise">Oddaj <br/> rzeczy</Link>
                </div>

            </div>
        )
    }
}

export default SimpleSteps;