import React, {Component} from "react";
import "./FoundationPagin.scss";

class FoundationPagin extends Component {
   constructor(props) {
       super(props);

       this.state = {
           foundations: [{
               title: "Fundacja Dbam o Zdrowie",
               mission: "Cel i misja: Pomoc osobom w trudnej sytuacji życiowej",
               subjects: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
           },
               {
                   title: "Fundacja Dla Dzieci",
                   mission: "Cel i misja: Pomoc dzieciom z ubogich rodzin",
                   subjects: "ubrania, meble i zabawki"
               },
               {
                   title: "Fundacja Bez Domu",
                   mission: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania",
                   subjects: "ubrania, jedzenie i ciepłe koce"
               },
               {
                   title: "Fundacja Dbam o Zdrowie1",
                   mission: "Cel i misja: Pomoc osobom w trudnej sytuacji życiowej 1",
                   subjects: "ubrania, jedzenie, sprzęt AGD, meble, zabawki 1"
               },
               {
                   title: "Fundacja Dla Dzieci 1",
                   mission: "Cel i misja: Pomoc dzieciom z ubogich rodzin 1",
                   subjects: "ubrania, meble i zabawki 1"
               },
               {
                   title: "Fundacja Bez Domu1",
                   mission: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania 1",
                   subjects: "ubrania, jedzenie i ciepłe koce 1"
               },
               {
                   title: "Fundacja Dbam o Zdrowie 2",
                   mission: "Cel i misja: Pomoc osobom w trudnej sytuacji życiowej 2",
                   subjects: "ubrania, jedzenie, sprzęt AGD, meble, zabawki 2"
               },
               {
                   title: "Fundacja Dla Dzieci 2",
                   mission: "Cel i misja: Pomoc dzieciom z ubogich rodzin 2",
                   subjects: "ubrania, meble i zabawki 2"
               },
               {
                   title: "Fundacja Bez Domu 2",
                   mission: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania 2",
                   subjects: "ubrania, jedzenie i ciepłe koce 2"
               },
           ],
           currentPage: 1,
           foundationsPerPage: 3,
           border1: "buttonBorder",
           border2: "",
           border3: "",
       }

       this.handleClick = this.handleClick.bind(this);

   }

    handleClick(event, index) {
        this.setState({
            currentPage: Number(event.target.id)});
        if (index === 1) {
            this.setState({border1: "buttonBorder", border2: "", border3: ""})
        } else if (index === 2) {
            this.setState({border1: "", border2: "buttonBorder", border3: ""})
        } else if (index === 3) {
            this.setState({border1: "", border2: "", border3: "buttonBorder"})
        }
    }




    render() {
        const { foundations, currentPage, foundationsPerPage } = this.state;


        const indexOfLastFoundation = currentPage * foundationsPerPage;
        const indexofFirstFoundation = indexOfLastFoundation - foundationsPerPage;
        const currentFoundation = foundations.slice(indexofFirstFoundation, indexOfLastFoundation)

        const renderFoundation =  currentFoundation.map((foundation, index) => {
            return (
                <ul key={index} className="foundationInfo">
            <li><h3>{foundation.title}</h3> <p>{foundation.mission}</p></li>
               <span>{foundation.subjects}</span>
            </ul>
            )
        });

        // const pageNumbers = [];
        // for (let i=1; i<= Math.ceil(fundations.length/ fundationsPerPage); i++) {
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
                    {renderFoundation}
                <div className="pageButtons">
                    <button id={1} className={this.state.border1} onClick={(e) => this.handleClick(e, 1)}>1</button>
                    <button id={2} className={this.state.border2} onClick={(e) => this.handleClick(e, 2)}>2</button>
                    <button id={3} className={this.state.border3} onClick={(e) => this.handleClick(e, 3)}>3</button>
                </div>
            </>
        );
    }
}

export default FoundationPagin;