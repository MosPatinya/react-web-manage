import React, { Component } from 'react'
import DashBoard from './components/Dashboard'
import Viewchartrmutt from './viewchartrmutt';
// import Add from '../add';




export class Viewrmutt extends Component {
    render() {
        return (
            <div>
                <header>
                    <DashBoard />
                </header>
                <div>
                   <Viewchartrmutt/>
                </div>
            </div>
        )
    }
}

export default Viewrmutt;