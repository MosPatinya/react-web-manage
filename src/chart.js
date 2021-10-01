import React, { Component } from 'react'
import firebase from './config';
import { Bar } from 'react-chartjs-2'
import './chart.css'

class Chart extends Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('place').orderBy('rating', 'desc').limit(5);
        this.unsubscribe = null;
        this.state = {
            place: []
        };
    }

    onCollectionUpdate = (querySnapshot) => {
        const place = [];
        querySnapshot.forEach((doc) => {
            const { rating, business_name } = doc.data();
            place.push({
                rating,
                business_name
            });
        });
        console.log(place)
        this.setState({
            place
        });
    }
    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }

    render() {
        const label = this.state.place.map(place => place.business_name)
        const rating = this.state.place.map(place => place.rating)
        return (
            <div>
                <Bar className='chart'
                    data={{
                        labels: label,
                        datasets: [{
                            label: 'ร้านค้า',
                            data: rating,
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
                    height={90}
                    width={200}
                />
            </div>
        );
    }
}

export default Chart;