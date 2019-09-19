import React, {Component} from 'react';
import './Register.scss'
import Navigation from '../../Navigation/Navigation';
import{Link} from 'react-router-dom';


class Register extends Component {
    state={
        border1: "border4Button",
        border2: ""

    };

    handleClickBorderOne = () => {
        this.setState({border1:"border4Button", border2: ""})
    };

    handleClickBorderTwo = () => {
        this.setState({border1:"", border2: "border4Button"})
    };



    render() {
        return (
            <>
            <div className="register">
                <Navigation/>
            </div>
                <div className="register_view">
                    <div className="register_start">
                        <span>Załóż konto</span>
                        <div className="decoration"></div>
                    </div>
                    <form>
                        <div className="register_details">
                            <label>
                                Email
                                <input type="email" name="email"/>
                            </label>
                            <label>
                                Hasło
                                <input type="password" name="password" />
                            </label>
                            <label>
                               Powtórz hasło
                                <input type="password" name="password" />
                            </label>
                        </div>
                        <div className="register_buttons">
                            <button className={this.state.border1} onClick={this.handleClickBorderOne}>Załóż konto</button>
                            <button className={this.state.border2} onClick={this.handleClickBorderTwo}><Link to="/logowanie">Zaloguj się</Link></button>
                        </div>
                    </form>
                </div>

            </>
        )
    }
}

export default Register