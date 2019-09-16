import React, {Component} from "react";
import "./LocalPagin.scss";

class LocalPagin extends Component {
    constructor(props) {
        super(props);


        this.state = {
            locals: [{
                title: "Zbiórka Lorem Ipsum 1",
                mission: "Quis varius quam quisque id diam vel quam elementum pulvinar",
                subjects: "Egestas, sed, tempus"
            },
                {
                    title: "Zbiórka Lorem Ipsum 2",
                    mission: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue",
                    subjects: "Ut, aliquam, purus, sit, amet"
                },
                {
                    title: "Zbiórka Lorem Ipsum 3",
                    mission: "Scelerisque in dictum non consectetur a erat nam",
                    subjects: "Mi, quis, hendretit, dolor"
                }
            ],
            currentPage: 1,
            localsPerPage: 3,
            border1: "buttonBorder",
            border2: ""

        }
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(event, index) {
        this.setState({
            currentPage: Number(event.target.id)});
        if (index === 1) {
            this.setState({border1: "buttonBorder", border2: ""})
        } else if (index === 2) {
            this.setState({border1: "", border2: "buttonBorder"})
        }
}


    render() {
        const { locals, currentPage, localsPerPage } = this.state;


        const indexOfLastLocal = currentPage * localsPerPage;
        const indexOfFirstLocal = indexOfLastLocal - localsPerPage;
        const currentLocal = locals.slice(indexOfFirstLocal, indexOfLastLocal)

        const renderLocal =  currentLocal.map((local, index) => {
            return (
                <ul key={index} className="foundationInfo">
                    <li><h3>{local.title}</h3> <p>{local.mission}</p></li>
                    <span>{local.subjects}</span>
                </ul>
            )
        });
        return (
            <>
                {renderLocal}
         <div className="pageButtons">
             <button id={1} className={this.state.border1} onClick={(e) => this.handleClick(e, 1)}>1</button>
         </div>


            </>
        )


    }
}

export default LocalPagin;