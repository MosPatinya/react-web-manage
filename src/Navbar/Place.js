import React, { Component } from 'react'
import DashBoard from '../components/Dashboard'
import List_Place from '../List_place'
import './Place.css'

export class Place extends Component {
    render() {
        return (
            <div>
                <header>
                    <DashBoard />
                </header>
                <div className="placehead">
                    <h2>ข้อมูลร้านค้า</h2>
                </div>
                <List_Place/>
            </div>
        )
    }
}

export default Place;
