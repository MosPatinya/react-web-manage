import React, { Component } from 'react';
import firebase from './config';
import { Link } from 'react-router-dom';
import DashBoard from './components/Dashboard';
import './ShowPlace.css';
class ShowPlaceCheck extends Component {

  constructor(props) {
    super(props);
    this.state = {
      place: {},
      key: '',
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('place').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          place: doc.data(),
          key: doc.id,
          isLoading: false,
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  render() {
    return (
      <div>
        <DashBoard />
        <div className="container">
          <div className="area">
          <div className='photo'>
                <img src={this.state.place.photo1} width="500" height="300"></img>
              </div>
            <div className="body">  
              <dl>
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
                <dd>{this.state.place.detail}</dd><br></br>
                <div className='button-area'>
                <div className='btn'>
                <button  class="btn btn-success">Confirm</button>
                </div>
                <div className='btn'>
                <Link to={`/Home`} class="btn btn-danger">Cancel</Link>
                </div>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowPlaceCheck;