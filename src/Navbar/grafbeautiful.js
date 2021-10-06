import React, { Component } from 'react'
import Chartbeautiful from '../chartbeautiful';
import DashBoard from '../components/Dashboard'
// import Add from '../add';




export class Grafbeautiful extends Component {
    render() {
        return (
            <div>
                <header>
                    <DashBoard />
                </header>
                <div>
                   <Chartbeautiful/>
                   {/* <Add/> */}
                </div>
            </div>
        )
    }
}

export default Grafbeautiful;
