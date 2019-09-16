import React, {Component} from 'react';
import './Organisations.scss';
import FoundationPagin from "./FoundationPagin/FoundationPagin";
import OrganisationPagin from "./OrganisationPagin/OrganisationPagin";
import LocalPagin from "./LocalPagin/LocalPagin";



const textFoundations = "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują. ";
const textOrganisations = "Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.";
const textLocals = "W naszej bazie będziesz mógł znaleźć listę lokalizacji, w których dostępne są pojemniki do zwracania rzeczy, których nie potrzebujesz, a mogą być użyteczne dla innych.";

class Organisations extends Component {
   state = {
       border1: "buttonBorder",
       border2: "",
       border3: "",
       foundation: true,
       organisation: false,
       local: false,
   }


   handleClickBorder1 = () => {
      this.setState({border1: "buttonBorder", border2:"", border3: "", foundation: true, organisation: false, local: false})

   }

    handleClickBorder2 = () => {
        this.setState({border1: "", border2:"buttonBorder", border3: "", foundation: false, organisation: true, local: false})

    }

    handleClickBorder3 = () => {
        this.setState({border1: "", border2:"", border3: "buttonBorder", foundation: false, organisation: false , local: true})

    }



    render() {

        return (
            <div name="Organisations" className="organisations">
                <div className="foundations">
                    <h3>Komu pomagamy?</h3>
                    <div className="decoration"></div>
                    <div className="foundations_button">
                        <button className={this.state.border1} onClick={this.handleClickBorder1}>Fundacjom</button>
                        <button className={this.state.border2} onClick={this.handleClickBorder2}>Organizacjom pozarządowym</button>
                        <button className={this.state.border3} onClick={this.handleClickBorder3}>Lokalnym <br/>zbiórkom</button>
                    </div>
                    <span>{this.state.foundation && textFoundations}</span>
                    <span>{this.state.organisation && textOrganisations}</span>
                    <span>{this.state.local && textLocals}</span>
                </div>
                <div className="description_found">
                <div>
                    {this.state.foundation && <FoundationPagin/>}
                </div>

                <div>
                    {this.state.organisation && <OrganisationPagin/>}
                </div>

                <div>
                    {this.state.local && <LocalPagin/>}
                </div>

                 </div>
            </div>
        )
    }
}

export default Organisations;