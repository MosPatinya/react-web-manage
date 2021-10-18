import React, { Component } from 'react'
import DashBoard from './components/Dashboard'
import Viewchartcoffee from './viewchartcoffee';
// import Add from '../add';




export class Viewcoffee extends Component {
    render() {
        return (
            <div>
                <header>
                    <DashBoard />
                </header>
                <div>
                   <Viewchartcoffee/>
                </div>
            </div>
        )
    }
}

export default Viewcoffee;