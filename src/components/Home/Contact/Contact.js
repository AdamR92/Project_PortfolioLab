import React, {Component} from 'react'
import "./Contact.scss"

class Contact extends Component {
state = {
    name: "",
    email: "",
    message: "",
};

handleSubmit = event => {
    event.preventDefault();
    };

handleChangeName = e => {
this.setState({name: e.target.value})
};

handleChangeEmail = e => {
    this.setState({email: e.target.value})
};

handleChangeMessage = e => {
    this.setState({message: e.target.value})
}

    render() {
        return (
            <div name="Contact" className="contact">
            <div className="contact_form">
                <span className="contact_message">Skontaktuj się z nami</span>
                <div className="decoration"></div>
                <form onSubmit={this.handleSubmit}>
                  <div className="first_input">
                      <label>
                      Wpisz swoje imię
                          <input type="text" name="name" value={this.state.name} onChange={this.handleChangeName} placeholder="Wpisz swoje imię"/>
                      </label>
                      <label>
                      Wpisz swój e-mail
                          <input type="email" name="email" value={this.state.email} onChange={this.handleChangeEmail} placeholder="jan.kowalski@op.pl"/>
                      </label>
                  </div>
                  <div className="second_input">
                      <label>
                          Wpisz swoją wiadomość
                          <textarea type="message" name="textarea" value={this.state.message} onChange={this.handleChangeMessage} placeholder=""/>
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