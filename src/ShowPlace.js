import React, { Component } from 'react';
import firebase from './config';
import { Link } from 'react-router-dom';
import DashBoard from './components/Dashboard';
import './Show.css';
class ShowPlace extends Component {

  constructor(props) {
    super(props);
    this.state = {
      place: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('place').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          place: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id) {
    firebase.firestore().collection('place').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/place")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  render() {
    return (
      <div>
        <DashBoard />
        <div class="container">
          <div class="area">
            <div class="body">
              <dl>
                <dt>Photo</dt>
                <img src={this.state.place.photo1}width="500" height="300"></img>
                <img src={this.state.place.photo2}width="500" height="300"></img>
                <dd>
                </dd>
                <br></br>
                <dt>Place_id:</dt>
                <dd>{this.state.place.place_id}</dd>
                <dt>ชื่อร้านค้า/สถานที่:</dt>
                <dd>{this.state.place.business_name}</dd>
                <dt>ชื่อแฝง:</dt>
                <dd>{this.state.place.business_name1}</dd>
                <dt>ชื่อแฝง2:</dt>
                <dd>{this.state.place.business_name2}</dd>
                <dt>ชื่อแฝง3:</dt>
                <dd>{this.state.place.business_name3}</dd>
                <dt>อีเมล:</dt>
                <dd>{this.state.place.email}</dd>
                <dt>Facebook:</dt>
                <dd>{this.state.place.facebook}</dd>
                <dt>instagram:</dt>
                <dd>{this.state.place.instagram}</dd>
                <dt>หมวดหมู่:</dt>
                <dd>{this.state.place.type}</dd>
                <dt>รายะเอียด:</dt>
                <dd>{this.state.place.detail}</dd>
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

export default ShowPlace;