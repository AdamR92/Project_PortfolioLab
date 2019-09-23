import React, {Component} from 'react';
import{HashRouter, Route, Switch } from 'react-router-dom';
import Home from '../Home/home'
import './Application.scss'
import Login from "../Home/Login/Login"
import Register from "../Home/Register/Register"
import Logout from "../Home/Logout/Logout"

class App extends Component {
  render() {
  return (
      <HashRouter>
          <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/logowanie" component={Login}/>
      <Route exact path="/rejestracja" component={Register}/>
      <Route exact path="/wylogowano" component={Logout}/>
          </Switch>
      </HashRouter>
  )
  }


}

export default App;
