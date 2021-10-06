import React, { Component } from 'react'
import Chartcoffee from '../chartcoffee';
import DashBoard from '../components/Dashboard'
// import Add from '../add';




export class Grafcoffee extends Component {
    render() {
        return (
            <div>
                <header>
                    <DashBoard />
                </header>
                <div>
                   <Chartcoffee/>
                   {/* <Add/> */}
                </div>
            </div>
        )
    }
}

export default Grafcoffee;
