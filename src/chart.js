import React from 'react'
import firebase from './config';
import {Bar} from 'react-chartjs-2'
const Chart = () => {

    // firebase.firestore().collection('colors').doc()
    // .onSnapshot((doc) => {
    //     red = doc.data()
    // })

    return <div> 
        <Bar
        data ={{
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple',],
            datasets: [{
                label: '# of Votes',
                data: [2, 4, 3, 5, 2, 3],
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
}
export default Chart