import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './Navigation.scss'
import '../../scss/settings/colors.scss'
import { Link } from 'react-scroll'

class Navigation extends Component {
    render() {
        const selectedStyle = {
            border: "1px solid #FAD648"
        }

        const chosenStyle = {
            border: "1px solid #3C3C3C"
        }

        const greyStyle = {
            color: "#737373",
            textDecoration: "none"
        }

        const darkGreyStyle = {
            color: "#3C3C3C",
            textDecoration: "none"
        }
        return (
        <nav className="container">
            <ul className="login">
                <li><NavLink exact to="/logowanie" style={greyStyle} activeStyle={selectedStyle}>Zaloguj</NavLink></li>
                <li><NavLink exact to="/rejestracja" style={greyStyle} activeStyle={selectedStyle}>Załóż konto</NavLink></li>
            </ul>
            <ul className="menu">
                <li> <NavLink exact to="/" style={darkGreyStyle} activeStyle={chosenStyle}>Start</NavLink> </li>
                <li> <Link activeClass="active" style={darkGreyStyle} className="link" to="SimpleSteps" spy={true} smooth={true} duration={500}>O co chodzi?</Link> </li>
                <li> <Link activeClass="active" style={darkGreyStyle} className="link" to="About" spy={true} smooth={true} duration={500}>O Nas</Link> </li>
                <li> <Link activeClass="active" style={darkGreyStyle} className="link" to="Organisations" spy={true} smooth={true} duration={500}>Fundacja i organizacje</Link> </li>
                <li> <Link activeClass="active" style={darkGreyStyle} className="link" to="Contact" spy={true} smooth={true} duration={500}>Kontakt</Link> </li>
            </ul>
        </nav>
        )


    }
}

export default Navigation;