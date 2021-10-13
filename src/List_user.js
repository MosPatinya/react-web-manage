import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from './config';
import './List_user.css'

class Create_List extends Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('user');
        this.unsubscribe = null;
        this.state = {
            user: []
        };
    }

    onCollectionUpdate = (querySnapshot) => {
        const user = [];
        querySnapshot.forEach((doc) => {
            const { email, tel, username } = doc.data();
            user.push({
                key: doc.id,
                doc, // DocumentSnapshot
                email,
                tel,
                username,
            });
        });
        this.setState({
            user
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
                            <table className="table table-stripe">
                                <thead>
                                    <tr>
                                        <th>Email</th>
                                        <th>Telephone</th>
                                        <th>Name</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.user.map(user =>
                                        <tr>
                                            <td>{user.email}</td>
                                            <td>{user.tel}</td>
                                            <td>{user.username}</td>
                                            <td><Link to={`/show/${user.key}`}><button type="button" className="btn btn-outline-warning">รายละเอียด</button></Link></td>
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

export default Create_List;