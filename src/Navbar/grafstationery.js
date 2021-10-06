import React, { Component } from 'react'
import Chartstationery from '../chartstationery';
import DashBoard from '../components/Dashboard'
// import Add from '../add';




export class Grafstationery extends Component {
    render() {
        return (
            <div>
                <header>
                    <DashBoard />
                </header>
                <div>
                   <Chartstationery/>
                   {/* <Add/> */}
                </div>
            </div>
        )
    }
}

export default Grafstationery;
