import React, { Component } from 'react';
import firebase from './config';
import { Link } from 'react-router-dom';
import DashBoard from './components/Dashboard';
import './Show.css';
class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('user').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          user: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id) {
    firebase.firestore().collection('user').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/user")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  render() {
    return (
      <div>
        <DashBoard/>
        <div class="container">
          <div class="area">
            <div class="body">
              <dl>
                <dt>Photo</dt>
                <dd><img src={this.state.user.photo}width="200" height="200"></img></dd>
                <br></br>
                <dt>User_id:</dt>
                <dd>{this.state.user.user_id}</dd>
                <dt>UserName:</dt>
                <dd>{this.state.user.username}</dd>
                <dt>Email:</dt>
                <dd>{this.state.user.email}</dd>
                <dt>Tel:</dt>
                <dd>{this.state.user.tel}</dd>
              </dl>
              <Link to={`/edit/${this.state.key}`} class="btn btn-success">Edit</Link>&nbsp;
              <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;