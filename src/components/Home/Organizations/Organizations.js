import React, {Component} from 'react';
import './Organizations.scss'



const textFoundations = "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują ";
const textOrganisations = "Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.";
const textLocals = "W naszej bazie będziesz mógł znaleźć listę lokalizacji, w których dostępne są pojemniki do zwracania rzeczy, których nie potrzebujesz, a mogą być użyteczne dla innych";

class Organizations extends Component {
   state = {
       border1: "buttonBorder",
       border2: "",
       border3: "",
       textFoundation: true,
       textOrganisation: false,
       textLocal: false,
   }


   handleClickBorder1 = () => {
      this.setState({border1: "buttonBorder", border2:"", border3: "", textFoundation: true, textOrganisation: false, textLocal: false})

   }

    handleClickBorder2 = () => {
        this.setState({border1: "", border2:"buttonBorder", border3: "", textFoundation: false, textOrganisation: true, textLocal: false})

    }

    handleClickBorder3 = () => {
        this.setState({border1: "", border2:"", border3: "buttonBorder", textFoundation: false, textOrganisation: false , textLocal: true})

    }



    render() {

        return (
            <div name="Organizations" className="organizations">
                <div className="foundations">
                    <h3>Komu pomagamy?</h3>
                    <div className="decoration"></div>
                    <div className="foundations_button">
                        <button className={this.state.border1} onClick={this.handleClickBorder1}>Fundacjom</button>
                        <button className={this.state.border2} onClick={this.handleClickBorder2}>Organizacjom pozarządowym</button>
                        <button className={this.state.border3} onClick={this.handleClickBorder3}>Lokalnym <br/>zbiórkom</button>
                    </div>
                    <span>{this.state.textFoundation && textFoundations}</span>
                    <span>{this.state.textOrganisation && textOrganisations}</span>
                    <span>{this.state.textLocal && textLocals}</span>
                </div>
            </div>
        )
    }
}

export default Organizations;