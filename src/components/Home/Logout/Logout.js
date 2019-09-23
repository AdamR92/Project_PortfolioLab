import React, {Component} from 'react';
import './Logout.scss'
import Navigation from '../../Navigation/Navigation';
import{Link} from 'react-router-dom';



class Logout extends Component {
    render() {
        return(
            <>
                <div className="logout">
                    <Navigation/>
                </div>
                <div className="logout_view">
                    <h2>Wylogowanie nastąpiło pomyślnie!</h2>
                    <div className="decoration"></div>
                    <Link to="/#" className="border4Button">Strona główna</Link>
                </div>
            </>
        )
    }
}

export default Logout;