import React, { Component } from 'react'
import DashBoard from '../components/Dashboard'
import List_Place from '../List_place'
import { Link } from 'react-router-dom';
import firebase from '../config';
import './Place.css'


export class Place extends Component {


    count(){
        firebase.firestore().collection('place').get().then(function(querySnapshot){
            console.log(querySnapshot.size)
        })
    }
    render() {
        console.log(this.count())
        return (
            <div>
                <header>
                    <DashBoard />
                </header>
                <br/>
                <div className="placehead">
                    <h3>ร้านค้า/สถานที่</h3>
                        <Link to='/addplace'><button type="button" class="btn btn-success">เพิ่มข้อมูลร้านค้า</button></Link>
                </div>
                <List_Place />
            </div>
        )
    }
}

export default Place;
