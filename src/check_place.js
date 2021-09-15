import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from './config';
import './check_place.css';

class Check_Place extends Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('place').where('check','==',false);
        this.unsubscribe = null;
        this.state = {
            place: []
        };
    }

    onCollectionUpdate = (querySnapshot) => {
        const place = [];
        querySnapshot.forEach((doc) => {
            const { email, tel, type, business_name, photo1, type2,  } = doc.data();
            place.push({
                key: doc.id,
                doc, // DocumentSnapshot
                photo1,
                email,
                tel,
                type,
                type2,
                business_name,
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
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <table class="table">
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
                                        <td>{place.type}{place.type2}</td>
                                        <td>{place.email}</td>
                                        <td>{place.tel}</td>
                                        <td><Link to={`/showplacecheck/${place.key}`}><button type="button" class="btn btn-outline-warning">รายละเอียด</button></Link></td>
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

export default Check_Place;