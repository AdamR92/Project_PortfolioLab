import React, {Component} from 'react'
import './ThreeColumns.scss'




class ThreeColumns extends Component {
    render() {
        return (
            <div name="ThreeColumns" className="threecolumns">
                <div className="column">
                    <span>10</span>
                    <h4>oddanych worków</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adpisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat voluptat</p>
                </div>
                <div className="column">
                    <span>5</span>
                    <h4>wspartych organizacji</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adpisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat voluptat</p>
                </div>
                <div className="column">
                    <span>7</span>
                    <h4>zorganizowanych zbiórek</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adpisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat voluptat</p>
                </div>



            </div>
        )
    }
}

export default ThreeColumns;