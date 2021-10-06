import React, { Component } from 'react'
import Chartshop from '../chartshop';
import DashBoard from '../components/Dashboard'
// import Add from '../add';




export class Grafshop extends Component {
    render() {
        return (
            <div>
                <header>
                    <DashBoard />
                </header>
                <div>
                   <Chartshop/>
                   {/* <Add/> */}
                </div>
            </div>
        )
    }
}

export default Grafshop;
