import React, { Component } from 'react'
import DashBoard from './components/Dashboard'
import Viewchart from './viewchart';
// import Add from '../add';




export class View extends Component {
    render() {
        return (
            <div>
                <header>
                    <DashBoard />
                </header>
                <div>
                   <Viewchart/>
                </div>
            </div>
        )
    }
}

export default View;