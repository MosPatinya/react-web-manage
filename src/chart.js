import React, { Component } from 'react'
import firebase from './config';
import { Bar } from 'react-chartjs-2'


class Chart extends Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('place').limit(5);
        this.state = {
            place: []
        };
    }

    onCollectionUpdate = (querySnapshot) => {
        const place = [];
        querySnapshot.forEach((doc) => {
            const { rating } = doc.data();
            place.push(rating);
        });
        console.log(place)
        this.setState({
            place
        });
    }
    componentDidMount() {
        this.ref.onSnapshot(this.onCollectionUpdate);
    }

    render() {
        return (
            <div>
                
            <Bar
                    data ={{
                        labels: [],
                        datasets: [{
                            label: '# of Votes',
                            data: [],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
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





// const Chart = () => { 
//     const place = [];
//     const ref = firebase.firestore().collection('place').limit(5);
//     ref.get()
//     .then((querySnapshot) => {
//         querySnapshot.forEach((doc) => {

//             place.push(doc.data().rating)

//         });
//         console.log(place)
//     })

//     return (
//         <div>
//         {this.state.place.map(user =>
//          <Bar
//         data ={{
//             labels: [place],
//             datasets: [{
//                 label: '# of Votes',
//                 data: [place],
//                 backgroundColor: [
//                     'rgba(255, 99, 132, 0.2)',
//                     'rgba(54, 162, 235, 0.2)',
//                     'rgba(255, 206, 86, 0.2)',
//                     'rgba(75, 192, 192, 0.2)',
//                     'rgba(153, 102, 255, 0.2)',
//                     'rgba(255, 159, 64, 0.2)'
//                 ],
//                 borderWidth: 1
//             }]

//         }}
//         height={90}
//         width={200}
//         /> 
//         )}
//     </div>
//     )
// }
// export default Chart