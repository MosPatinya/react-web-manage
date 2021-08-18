import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from './config';

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
            const { email, tel, user_id, username } = doc.data();
            user.push({
                key: doc.id,
                doc, // DocumentSnapshot
                email,
                tel,
                user_id,
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
            <div class="container">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <table class="table table-stripe">
                            <thead>
                                <tr>
                                    <th>User_ID</th>
                                    <th>Email</th>
                                    <th>Telephone</th>
                                    <th>Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.user.map(user =>
                                    <tr>
                                        <td>{user.user_id}</td>
                                        <td>{user.email}</td>
                                        <td>{user.tel}</td>
                                        <td>{user.username}</td>
                                        <td><Link to={`/show/${user.key}`}><button type="button" class="btn btn-outline-warning">รายละเอียด</button></Link></td>
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