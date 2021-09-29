import React, { Component } from 'react'
import firebase from './config';
import { Bar } from 'react-chartjs-2'
import './chart.css'


const Chart = () => {
    const labelsArray = [];
    const dataArray = [];

    const ref = firebase.firestore().collection('place').limit(5)

    ref.get().then((snapshot => {
        snapshot.docs.forEach(doc => {
            const place = doc.data();

            const rating = place.rating;
            dataArray.push(rating);

            const business_name = place.business_name;
            labelsArray.push(business_name);

        });
        console.log(labelsArray,dataArray)
    }));
    return (
        <Bar
        data ={{
            labels: labelsArray,
            datasets: [{
                label: 'place',
                data: dataArray,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                
            }]

        }}
        height={90}
        width={200}
        options={{
            
        }}
        />
    )
}
export default Chart



// class Chart extends Component {
//     constructor(props) {
//         super(props);
//         this.ref = firebase.firestore().collection('place').orderBy('rating','desc').limit(5);
//         this.unsubscribe = null;
//         this.state = {
//             place: [
//             ]
//         };
//     }

//     onCollectionUpdate = (querySnapshot) => {
//         const place = [];
//         querySnapshot.forEach((doc) => {
//             const { rating,  business_name } = doc.data();
//             place.push({
//                 rating,
//                 business_name
//             });
//         });
//         console.log(place)
//         this.setState({
//             place
//         });
//     }
//     componentDidMount() {
//         this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
//     }

//     render() {
//         return (
//             <div>
//                 {
//                 this.state.place.map(place =>
//             <Bar className='chart'
//                     data ={{
//                         labels: [place.business_name],
//                         datasets: [{
//                             label: 'ร้านค้า',
//                             data: [place.rating],
//                             backgroundColor: 'gray',
//                             borderWidth: 1
//                         }]
//                     }}
//                     height={100}
//                     width={800}
//                     /> 
//                     )}
//                     </div>
//         );
//     }
// }

// export default Chart;





// const Chart = () => { 
//     const place = [];
//     const ref = firebase.firestore().collection('place').limit(5);
//     ref.get()
//     .then((querySnapshot) => {
//         querySnapshot.forEach((doc) => {

//             place.push(doc.data().rating)

//         });
//     })
//     console.log(place)

//     return (
//         <div>
//         {place}
//           <Bar
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

//     </div>
//     )
// }
// export default Chart

// class Chart extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: [],
//         };
//     }
//     componentDidMount() {
//         let posts = [];
//         firebase.firestore().collection("place").get().then(function(querySnapshot) {
//             querySnapshot.forEach(function(doc) {
//                 posts.push({
//                     data: doc.data(),
//                     id: doc.id
//                 });
//             });
//         });
//         this.setState({
//             data: posts
//         });
//     }
//     renderPosts() {
//         console.log(this.state.data);
//         return this.state.data.map((post, index) => {
//             console.log(post);
//             console.log(index);
//             return (
//                 <div>
//                     {index}
//                 </div>
//             )
//         })
//     }
//     render() {
//         return(
//             <div>
//                 {this.renderPosts()}
//             </div>
//         );
//     }
//     }
//     export default Chart;