import React, {Component} from 'react';
import './Login.scss'
import FirebaseLogin from "./FirebaseLogin"
import { FirebaseContext } from '../../Firebase/Firebase';
import {withRouter} from "react-router-dom"

const LoginBase = withRouter(FirebaseLogin)

class Login extends Component {
    render() {
        return (
            <FirebaseContext.Consumer>
                {firebase => <LoginBase firebase={firebase} />}
            </FirebaseContext.Consumer>

        )
    }
}

export default Login