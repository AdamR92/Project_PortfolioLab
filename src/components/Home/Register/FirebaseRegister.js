import React, {Component} from 'react';
import './Register.scss'
import Navigation from '../../Navigation/Navigation';
import{Link} from 'react-router-dom';

const mailReg=/^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/;


class FirebaseRegister extends Component {
    state = {
        border1: "border4Button",
        border2: "",
        email: "",
        password: "",
        password2: "",
        errorEmail: false,
        errorPassword: false,
        errorPassword2: false,
        formSend: false


    };

    handleClickBorderOne = () => {
        this.setState({border1: "border4Button", border2: ""})
    };

    handleClickBorderTwo = () => {
        this.setState({border1: "", border2: "border4Button"})
    };

    handleSubmitForm = event => {
        event.preventDefault();

        let email = this.state.email;
        let password = this.state.password;
        let password2 = this.state.password2;
        let errorEmail = false;
        let errorPass = false;
        let errorPass2 = false;
        let formSend = true;

        if (!mailReg.test(email)) {
            errorEmail = true
            formSend = false
        }
        if (password.length < 6) {
            errorPass = true
            formSend = false
        }
        if (password2.length < 6 || password2 !== password) {
            errorPass2 = true
            formSend = false
        }

        this.setState({formSend: formSend, errorEmail: errorEmail, errorPassword: errorPass, errorPassword2: errorPass2});

        if (!errorEmail && !errorPass && !errorPass2) {
            this.props.firebase
                .doCreateUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(authUser => {
                    this.setState({email: "", password: "", password2: ""});
                    console.log("blabla");
                    this.props.history.push("/");
                })
                .catch(error => {
                    console.log(error);
                });
        }
    };



    handleMailChange = e => {
        this.setState({email: e.target.value});
    };
    handlePassChange = e => {
        this.setState({password: e.target.value});

    };

    handlePass2Change = e => {
        this.setState({password2: e.target.value});
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
                    <form onSubmit={this.handleSubmitForm}>
                        {this.state.formSend && ""}
                        <div className="register_details_background">
                        <div className="register_details">
                            <label>
                                Email
                                <input type="email" name="email" value={this.state.email} onChange={this.handleMailChange}/>
                                {this.state.errorEmail && <span className="error_feedback">Podany e-mail jest nieprawidłowy!</span>}
                            </label>
                            <label>
                                Hasło
                                <input type="password" name="password" value={this.state.password} onChange={this.handlePassChange}/>
                                {this.state.errorPassword && <span className="error_feedback">Podane hasło jest za krótkie!</span>}
                            </label>
                            <label>
                                Powtórz hasło
                                <input type="password" name="password" value={this.state.password2} onChange={this.handlePass2Change}/>
                                {this.state.errorPassword2 && <span className="error_feedback">Hasła nie zgadzają się!</span>}
                            </label>
                        </div>
                        </div>
                        <div className="register_buttons">
                            <input  type="submit" name="submit" value="Załóż konto" className={this.state.border1} onClick={this.handleClickBorderOne}/>
                            <button className={this.state.border2} onClick={this.handleClickBorderTwo}><Link to="/logowanie">Zaloguj się</Link></button>
                        </div>
                    </form>
                </div>

            </>
        )
    }
}

export default FirebaseRegister