import React, { Component } from 'react'
import DashBoard from './components/Dashboard'
import Viewchartshop from './viewchartshop';

// import Add from '../add';




export class Viewshop extends Component {
    render() {
        return (
            <div>
                <header>
                    <DashBoard />
                </header>
                <div>
                   <Viewchartshop/>
                </div>
            </div>
        )
    }
}

export default Viewshop;