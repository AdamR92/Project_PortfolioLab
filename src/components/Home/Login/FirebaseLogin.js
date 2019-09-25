import React, {Component} from 'react';
import './Login.scss'
import Navigation from '../../Navigation/Navigation';
import{Link} from 'react-router-dom';


const mailReg=/^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/;

class FirebaseLogin extends Component {
    state={
        border1: "border4Button",
        border2: "",
        email: "",
        password: "",
        errorEmail: false,
        errorPassword: false,
        formSend: false

    };

    handleClickBorderOne = () => {
        this.setState({border1:"border4Button", border2: ""})
    };

    handleClickBorderTwo = () => {
        this.setState({border1:"", border2: "border4Button"})
    };

    handleFormSubmit = event => {
        event.preventDefault();

        let email= this.state.email;
        let password = this.state.password;
        let errorEmail = false;
        let errorPass = false;
        let formSend = true;

        if(!mailReg.test(email)) {
            errorEmail = true;
            formSend = false;
        }
        if(password.length < 6) {
            errorPass = true;
            formSend = false;
        }

        this.setState({formSend: formSend, errorEmail: errorEmail, errorPassword: errorPass})

        if (!errorEmail && !errorPass) {
            this.props.firebase
                .doSignInWithEmailAndPassword(this.state.email, this.state.password)
                .then(authUser => {
                    this.setState({email: "", password: ""});
                    console.log("blabla");
                    this.props.history.push("/");
                })
                .catch(error => {
                    console.log(error);
                });
        }
    };

    handleEmailChange = e => {
        this.setState({email: e.target.value})
    };

    handlePasswordChange = e => {
        this.setState({password: e.target.value})
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
                    <form onSubmit={this.handleFormSubmit}>
                        {this.state.formSend && ""}
                        <div className="login_details_background">
                            <div className="login_details">
                                <label>
                                    Email
                                    <input type="email" name="email" value={this.state.email} onChange={this.handleEmailChange}/>
                                    {this.state.errorEmail && <span className="error_feedback">Podany e-mail jest nieprawidłowy!</span>}
                                </label>
                                <label>
                                    Hasło
                                    <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange} />
                                    {this.state.errorPassword && <span className="error_feedback">Podane hasło jest za krótkie!</span>}
                                </label>
                            </div>
                        </div>
                        <div className="login_buttons">
                            <button className={this.state.border1} onClick={this.handleClickBorderOne}><Link to="/rejestracja"> Załóż konto</Link></button>
                            <input  type="submit" name="submit" value="Zaloguj się" className={this.state.border2} onClick={this.handleClickBorderTwo}/>
                        </div>
                    </form>
                </div>
            </>

        )
    }
}

export default FirebaseLogin;