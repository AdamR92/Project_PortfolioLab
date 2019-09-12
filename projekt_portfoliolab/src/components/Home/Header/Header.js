import  React, {Component} from 'react'
import './Header.scss'
import Navigation from "../../Navigation/Navigation"
import{Link} from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <>
                <div name="Header" className="header">
                    <div className="background"></div>
                    <div className="main"> <Navigation/>
                        <div className="home">
                            <article>
                            <h2>Zacznij pomagać!</h2>
                            <h2>Oddaj niechciane rzeczy w zaufane ręce </h2>
                            </article>
                        <div className="decoration"></div>
                            <div className="buttons">
                                <Link to="/logowanie" className="raise">Oddaj <br/> rzeczy</Link>
                                <Link to="/logowanie" className="raise">Zorganizuj zbiórkę</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Header;