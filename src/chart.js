import React from 'react'
import firebase from './config';
import {Bar} from 'react-chartjs-2'
const Chart = () => {
    return <div> 
        <Bar
        data ={{
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple',],
        datasets: [
            {
                label: '1',
                data:[1,2,3,4,5,],
                backgroundColor : ['red']
            },
        ],
        
        }}
        height={100}
        width={200}
        />
    </div>
}
export default Chart