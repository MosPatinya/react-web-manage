import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from './config';
import './List_place.css'

class List_Place extends Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('place').orderBy('array','desc').where('check','==',true);
        this.unsubscribe = null;
        this.state = {
            place: []
        };
    }

    onCollectionUpdate = (querySnapshot) => {
        const place = [];
        querySnapshot.forEach((doc) => {
            const { email, tel, type, business_name, photo1, detail, type2, array } = doc.data();
            place.push({
                key: doc.id,
                doc, // DocumentSnapshot
                array,
                photo1,
                email,
                tel,
                type,
                type2,
                business_name,
                detail,
            });
        });
        this.setState({
            place
        });
    }
    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }

    render() {
        return (
            <div className="container">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <table className="table">
                                <thead>
                                    <tr>                      
                                        <th>Photo</th>
                                        <th>Name</th>
                                        <th>Category</th>
                                        <th>Email</th>
                                        <th>Telephone</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <br></br>
                                {this.state.place.map(place =>
                                    <tr>
                                        <td><img src={place.photo1} width="210" height="110"></img></td>
                                        <td>{place.business_name}</td>
                                        <td>{place.type}</td>
                                        <td>{place.email}</td>
                                        <td>{place.tel}</td>
                                        <td><Link to={`/showplace/${place.key}`}><button type="button" className="btn btn-outline-warning">รายละเอียด</button></Link></td>
                                    </tr>
                                )} 
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
        );
    }
}

export default List_Place;