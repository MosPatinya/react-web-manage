import React, { Component } from 'react'
import DashBoard from './components/Dashboard'
import Viewchartgeneral from './viewchartgeneral';
// import Add from '../add';




export class Viewgeneral extends Component {
    render() {
        return (
            <div>
                <header>
                    <DashBoard />
                </header>
                <div>
                   <Viewchartgeneral/>
                </div>
            </div>
        )
    }
}

export default Viewgeneral;