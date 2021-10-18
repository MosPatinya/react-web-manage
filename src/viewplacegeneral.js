import React, { Component } from 'react'
import DashBoard from './components/Dashboard'
import Viewchartplacegeneral from './viewchartplacegeneral';
// import Add from '../add';




export class Viewplacegeneral extends Component {
    render() {
        return (
            <div>
                <header>
                    <DashBoard />
                </header>
                <div>
                   <Viewchartplacegeneral/>
                </div>
            </div>
        )
    }
}

export default Viewplacegeneral;