import React, { Component } from 'react'
import Chartgeneral from '../chartgeneral';
import DashBoard from '../components/Dashboard'
// import Add from '../add';




export class Grafgeneral extends Component {
    render() {
        return (
            <div>
                <header>
                    <DashBoard />
                </header>
                <div>
                   <Chartgeneral/>
                   {/* <Add/> */}
                </div>
            </div>
        )
    }
}

export default Grafgeneral;
