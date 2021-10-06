import React, { Component } from 'react'
import Chartrmutt from '../chartrmutt';
import DashBoard from '../components/Dashboard'
// import Add from '../add';




export class Grafrmutt extends Component {
    render() {
        return (
            <div>
                <header>
                    <DashBoard />
                </header>
                <div>
                   <Chartrmutt/>
                   {/* <Add/> */}
                </div>
            </div>
        )
    }
}

export default Grafrmutt;
