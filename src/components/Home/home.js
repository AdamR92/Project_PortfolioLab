import React, {Component} from 'react'
import Header from './Header/Header'
import ThreeColumns from "./ThreeColumns/ThreeColumns";
import About from "./About/About";
import Organizations from "./Organizations/Organizations"
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
        <Organizations/>
        <Contact/>
        </>
        )
    }
}

export default Home;