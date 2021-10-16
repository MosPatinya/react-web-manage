import React, { Component } from 'react'
import DashBoard from '../components/Dashboard'
import List_Place from '../List_place'
import { Link } from 'react-router-dom';
import './Place.css'

export class Place extends Component {
    render() {
        return (
            <div>
                <header>
                    <DashBoard />
                </header>
                <br/>
                <center>
                    <h2>ร้านค้า/สถานที่</h2>
                </center>
                <div className="placehead">
                    <center>
                        <Link to='/addplace'><button type="button" class="btn btn-success">เพิ่มข้อมูลร้านค้า</button></Link>
                    </center>
                </div>
                <List_Place />
            </div>
        )
    }
}

export default Place;
