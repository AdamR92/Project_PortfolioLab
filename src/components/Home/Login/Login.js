import React, {Component} from 'react';
import './Login.scss'
import Navigation from '../../Navigation/Navigation';
import{Link} from 'react-router-dom';

class Login extends Component {
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
            <div className="login">
                <Navigation/>
            </div>
            <div className="login_view">
            <div className="login_start">
                <span>Zaloguj się</span>
                <div className="decoration"></div>
            </div>
            <form>
                <div className="login_details">
                    <label>
                        Email
                        <input type="email" name="email"/>
                    </label>
                    <label>
                        Hasło
                        <input type="password" name="password" />
                    </label>
                </div>
                <div className="login_buttons">
                    <button className={this.state.border1} onClick={this.handleClickBorderOne}><Link to="/rejestracja"> Załóż konto</Link></button>
                    <button className={this.state.border2} onClick={this.handleClickBorderTwo}>Zaloguj się</button>
                </div>
            </form>
            </div>
            </>

        )
    }
}

export default Login