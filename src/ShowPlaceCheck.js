import React, { Component } from 'react';
import firebase from './config';
import { Link } from 'react-router-dom';
import DashBoard from './components/Dashboard';

class ShowPlaceCheck extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      photo1:'',
      business_name:'',
      business_name1:'',
      business_name2:'',
      business_name3:'',
      business_name_english:'',
      email:'',
      facebook:'',
      instagram:'',
      type:'',
      detail:'',
      latitude:'',
      longitude:'',
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('place').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const place = doc.data();
        this.setState({
          key: doc.id,
          photo1: place.photo1,
          business_name: place.business_name,
          business_name1: place.business_name1,
          business_name2: place.business_name2,
          business_name3: place.business_name3,
          business_name_english: place.business_name_english,
          email: place.email,
          facebook: place.facebook,
          instagram: place.instagram,
          type: place.type,
          detail: place.detail,
          latitude: place.latitude,
          longitude: place.longitude,
        });
      } else {
        console.log("No such document!");
      }
    });
  }
  onSubmit = (e) => {
    e.preventDefault();

    const { check } = this.state;

    const updateRef = firebase.firestore().collection('place').doc(this.state.key);
    updateRef.update({
        check: true,
    });
    this.props.history.push("/showPlace/"+this.props.match.params.id)
  }

  render() {
    return (
        <div>
            <header>
                <DashBoard/>
            </header>
      <div class="container">
      <div className="area">
      <div className='photo'>
      <img src={this.state.photo1} width="300" height="200"></img>
      
          </div>
          <div class="body">
            <dl>
              <dt>ชื่อร้านค้า/สถานที่:</dt>
                <dd>{this.state.business_name}</dd>
                <dt>ชื่อแฝง:</dt>
                <dd>{this.state.business_name1}</dd>
                <dt>ชื่อแฝง2:</dt>
                <dd>{this.state.business_name2}</dd>
                <dt>ชื่อแฝง3:</dt>
                <dd>{this.state.business_name3}</dd>
                <dt>ชื่อภาษาอังกฤษ:</dt>
                <dd>{this.state.business_name_english}</dd>
                <dt>อีเมล:</dt>
                <dd>{this.state.email}</dd>
                <dt>Facebook:</dt>
                <dd>{this.state.facebook}</dd>
                <dt>instagram:</dt>
                <dd>{this.state.instagram}</dd>
                <dt>หมวดหมู่:</dt>
                <dd>{this.state.type}</dd>
                <dt>รายะเอียด:</dt>
                <dd>{this.state.detail}</dd>
                <dt>ละติจูด:</dt>
                <dd>{this.state.latitude}</dd>
                <dt>ลองจิจูด:</dt>
                <dd>{this.state.longitude}</dd>
              <form onSubmit={this.onSubmit}>
              <button type="submit" class="btn btn-success">เผยเเพร่</button>
            </form>
            </dl>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default ShowPlaceCheck;