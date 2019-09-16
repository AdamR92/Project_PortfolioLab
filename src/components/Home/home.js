import React, {Component} from 'react'
import Header from './Header/Header'
import ThreeColumns from "./ThreeColumns/ThreeColumns";
import About from "./About/About";
import Organisations from "./Organisations/Organisations"
import Contact from "./Contact/Contact"
import SimpleSteps from "./SimpleSteps/SimpleSteps"

class Home extends Component {
    render() {
        return (
        <>
        <Header/>
        <ThreeColumns/>
        <SimpleSteps/>
        <About/>
        <Organisations/>
        <Contact/>
        </>
        )
    }
}

export default Home;