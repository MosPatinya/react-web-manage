import React, { Component } from 'react'
import Check_Place from '../check_place';
import DashBoard from '../components/Dashboard';
import './Home.css';


export class Home extends Component {
    render() {
        return (
            <div>
            <header>
                <DashBoard />
            </header>
            <div>
            <div className='text-head'>
                <h2>ตรวจสอบร้านค้า</h2>
            </div>
            </div>
            <Check_Place/>
            </div>
        )
    }
}

export default Home;
