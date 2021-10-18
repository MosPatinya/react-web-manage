import React, { Component } from 'react'
import DashBoard from './components/Dashboard'
import Viewchartstationery from './viewchartstationery';

// import Add from '../add';




export class Viewstationery extends Component {
    render() {
        return (
            <div>
                <header>
                    <DashBoard />
                </header>
                <div>
                  <Viewchartstationery/>
                </div>
            </div>
        )
    }
}

export default Viewstationery;