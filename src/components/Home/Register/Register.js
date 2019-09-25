import React, {Component} from 'react';
import './Register.scss'
import FirebaseRegister from "./FirebaseRegister"
import { FirebaseContext } from '../../Firebase/Firebase';
import {withRouter} from "react-router-dom"

const RegisterBase = withRouter(FirebaseRegister)

class Register extends Component {


    render() {
        return (
            <FirebaseContext.Consumer>
                {firebase => <RegisterBase firebase={firebase} />}
            </FirebaseContext.Consumer>

        )
    }
}

export default Register;