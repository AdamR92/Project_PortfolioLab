import React, {Component} from 'react'
import "./Contact.scss"

const nameReg= /^[a-zA-Z]{2,}$/;
const mailReg=/^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/;

class Contact extends Component {
state = {
    name: "",
    email: "",
    message: "",
    errorName: false,
    errorMail: false,
    errorMessage: false,
    formSend: false
};

handleSubmit = event => {
    event.preventDefault();

    let name=this.state.name;
    let email=this.state.email;
    let message= this.state.message;
    let formSend = true;


    if(!nameReg.test(name)) {
        this.setState({errorName: true})
        formSend = false;
    } else {
        this.setState({errorName: false})
    }
    if (!mailReg.test(email)) {
        this.setState({errorMail:true})
        formSend = false;
    } else {
        this.setState({errorMail: false})
    }
    if  (message.length < 120 ) {
        this.setState({errorMessage: true})
        formSend = false;
    } else {
        this.setState({errorMessage: false})
    }

    this.setState({formSend: formSend})

};

handleChangeName = e => {
this.setState({name: e.target.value})
};

handleChangeEmail = e => {
    this.setState({email: e.target.value})
};

handleChangeMessage = e => {
    this.setState({message: e.target.value})
};


    render() {

        return (
            <div name="Contact" className="contact">
            <div className="contact_form">
                <span className="contact_message">Skontaktuj się z nami</span>
                <div className="decoration"></div>
                <form onSubmit={this.handleSubmit}>
                    { this.state.formSend && <span className="feedback_success">Wiadomość została wysłana! Wkrótce się skontaktujemy</span>}
                  <div className="first_input">
                      <label>
                      Wpisz swoje imię
                          <input type="text" name="name" value={this.state.name} onChange={this.handleChangeName} placeholder="Wpisz swoje imię"/>
                          {this.state.errorName && <span className="feedback">Podane imię jest nieprawidłowe!</span>}
                      </label>
                      <label>
                      Wpisz swój e-mail
                          <input type="email" name="email" value={this.state.email} onChange={this.handleChangeEmail} placeholder="jan.kowalski@op.pl"/>
                          {this.state.errorMail && <span className="feedback">Podany email jest nieprawidłowy!</span>}
                      </label>
                  </div>
                  <div className="second_input">
                      <label>
                      Wpisz swoją wiadomość
                          <textarea type="message" name="textarea" value={this.state.message} onChange={this.handleChangeMessage} placeholder=""/>
                          {this.state.errorMessage && <span className="feedback">Wiadomość musi mieć conajmniej 120 znaków!</span>}
                      </label>
                      <input type="submit" name="submit" value="Wyślij" className="submitButton"/>
                  </div>
                </form>
            </div>
            <div className="contact_footer">
                <span className="copyrights">Copyright by Coders Lab</span>
                <div className="social_icons">
                <div className="social_media"></div>
                <div className="social_media1"></div>
                </div>
            </div>

            </div>
        )
    }
}

export default Contact;