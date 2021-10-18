import React, { Component } from 'react'
import firebase from './config';
import { Bar, Line } from 'react-chartjs-2'
import { Link, Redirect, Route, Router } from 'react-router-dom'
import './chart.css'

class Viewchart extends Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('place')
            .where('type', '==', 'คลินิก/ขายยา')
            .orderBy('view', 'desc')
            .limit(10)
            .onSnapshot(this.onCollection)
        this.state = {
            place: []
        };
    }

    onCollection = (querySnapshot) => {
        const place = [];
        querySnapshot.forEach((doc) => {
            const { view, business_name } = doc.data();
            place.push({
                view,
                business_name
            });
        });
        this.setState({
            place
        });
    }


    render() {
        const label = this.state.place.map(place => place.business_name);
        console.log(label);
        const view = this.state.place.map(place => place.view);
        console.log(view);
        return (
            <div>
                <div className='label-header'>
                </div>
                <Bar className='chart'
                    data={{
                        labels: label,
                        datasets: [{
                            label: 'คลินิก/ขายยา',
                            data: view,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                            ],
                            borderWidth: 1
                        }]
                    }}
                    height={105}
                    width={260}
                />
                <br />
                <div>
                    <ul className="chart-header">
                        <li className="chart-bar">
                            <Link className="chart-link" to="/viewshop">ร้านอาหาร</Link>
                        </li>
                        <li className="chart-bar">
                            <Link className="chart-link" to="/viewcoffee">ร้านกาแฟ</Link>
                        </li>
                        <li className="chart-bar">
                            <Link className="chart-link" to="/viewstationery">ร้านเครื่องเขียน</Link>
                        </li>
                        <li className="chart-bar">
                            <Link className="chart-link" to="/viewbeautiful">ร้านเสริมสวย</Link>
                        </li>
                        <li className="chart-bar">
                            <Link className="chart-link" to="/view">คลินิก/ขายยา</Link>
                        </li>
                        <li className="chart-bar">
                            <Link className="chart-link" to="/viewgeneral">ร้านทั่วไป</Link>
                        </li>
                        <li className="chart-bar">
                            <Link className="chart-link" to="/viewplacegeneral">สถานที่ทั่วไป</Link>
                        </li>
                        <li className="chart-bar">
                            <Link className="chart-link" to="/viewrmutt">สถานที่ในRMUTT</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Viewchart;