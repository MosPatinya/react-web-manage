import React, { Component } from 'react'
import Chart from '../chart';
import DashBoard from '../components/Dashboard'
// import Add from '../add';




export class Graf extends Component {
    render() {
        return (
            <div>
                <header>
                    <DashBoard />
                </header>
                <div>
                   <Chart/>
                   {/* <Add/> */}
                </div>
            </div>
        )
    }
}

export default Graf;
