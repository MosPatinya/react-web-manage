import React, { Component } from 'react'
import DashBoard from './components/Dashboard'
import Viewchart from './viewchart';
import Viewchartbeautiful from './viewchartbeautiful';
// import Add from '../add';




export class Viewbeautiful extends Component {
    render() {
        return (
            <div>
                <header>
                    <DashBoard />
                </header>
                <div>
                   <Viewchartbeautiful/>
                </div>
            </div>
        )
    }
}

export default Viewbeautiful;