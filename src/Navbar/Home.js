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
                <h3>สถานที่/ร้านค้าที่ยังไม่ตรวจสอบ</h3>
            </div>
            </div>
            <Check_Place/>
            </div>
        )
    }
}

export default Home;
