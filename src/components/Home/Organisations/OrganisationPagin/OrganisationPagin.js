import React, {Component} from "react";
import "./OrganisationPagin.scss";

class OrganisationPagin extends Component {
    constructor(props) {
        super(props);


        this.state = {
            organisations: [
                {
                    title: 'Organizacja "Lorem Ipsum 1"',
                    mission: "Quis varius quam quisque id diam vel quam elementum pulvinar",
                    subjects: "Egestas, sed, tempus"
                },
                {
                    title: 'Organizacja "Lorem Ipsum 2"',
                    mission: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue",
                    subjects: "Ut, aliquam, purus, sit, amet"
                },
                {
                    title: 'Organizacja "Lorem Ipsum 3"',
                    mission: "Scelerique in dictum non consectetur a erat nam",
                    subjects: "Mi, quis, hendretit, dolor"
                },
                {
                    title: 'Organizacja "Lorem Ipsum 4"',
                    mission: "Quis varius quam quisque id diam vel quam elementum pulvinar 4",
                    subjects: "Egestas, sed, tempus 4"
                },
                {
                    title: 'Organizacja "Lorem Ipsum 5"',
                    mission: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue 5",
                    subjects: "Ut, aliquam, purus, sit, amet 5"
                },
                {
                    title: 'Organizacja "Lorem Ipsum 6"',
                    mission: "Scelerisque in dictum non consectetur a erat nam 6",
                    subjects: "Mi, quis, hendretit, dolor 6"
                }

            ],

            currentPage: 1,
            organisationsPerPage: 3,
            border1: "buttonBorder",
            border2: ""

        }
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(event, index) {
        this.setState({
            currentPage: Number(event.target.id)
        });
        if(index === 1) {
            this.setState({border1: "buttonBorder", border2: ""})
        } else if (index === 2) {
            this.setState({border1: "", border2: "buttonBorder"})
        }
    }





    render() {
        const { organisations, currentPage, organisationsPerPage } = this.state;


        const indexOfLastOrganisation = currentPage * organisationsPerPage;
        const indexOfFirstOrganisation = indexOfLastOrganisation - organisationsPerPage;
        const currentOrganisation = organisations.slice(indexOfFirstOrganisation, indexOfLastOrganisation)

        const renderOrganisation =  currentOrganisation.map((organisation, index) => {
            return (
                <ul key={index} className="foundationInfo">
                    <li><h3>{organisation.title}</h3> <p>{organisation.mission}</p></li>
                    <span>{organisation.subjects}</span>
                </ul>
            )
        })

        // const pageNumbers = [];
        // for (let i=1; i<= Math.ceil(organizations.length/ organizationsPerPage); i++) {
        //     pageNumbers.push(i)
        // }
        //
        // const renderPageNumbers = pageNumbers.map(number => {
        //     return (
        //         <li key={number} id={number} onClick={this.handleClick}>
        //             {number}
        //         </li>
        //     );
        // });

        return (
        <>
            {renderOrganisation}
            <div className="pageButtons">
                <button id={1} className={this.state.border1} onClick={(e) => this.handleClick(e,1)}>1</button>
                <button id={2} className={this.state.border2} onClick={(e) => this.handleClick(e,2)}>2</button>
            </div>
        </>
    );
    }
}

export default OrganisationPagin;