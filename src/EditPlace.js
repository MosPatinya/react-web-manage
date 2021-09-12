import React, { Component } from 'react';
import firebase from './config';
import { Link } from 'react-router-dom';
import DashBoard from './components/Dashboard';

class EditPlace extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      business_name:'',
      business_name1:'',
      business_name2:'',
      business_name3:'',
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
          business_name: place.business_name,
          business_name1: place.business_name1,
          business_name2: place.business_name2,
          business_name3: place.business_name3,
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

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({user:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { business_name, business_name1, business_name2, business_name3, email, facebook, instagram, type, detail, latitude, longitude} = this.state;

    const updateRef = firebase.firestore().collection('place').doc(this.state.key);
    updateRef.set({
        business_name,
        business_name1,
        business_name2,
        business_name3,
        email,
        facebook,
        instagram,
        type,
        detail,
        latitude,
        longitude,
    }).then((docRef) => {
      this.setState({
        key: '',
        business_name:'',
        business_name1:'',
        business_name2:'',
        business_name3:'',
        email:'',
        facebook:'',
        instagram:'',
        type:'',
        detail:'',
        latitude: '',
        longitude: '',
      });
      this.props.history.push("/show/"+this.props.match.params.id)
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    return (
        <div>
            <header>
                <DashBoard/>
            </header>
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDIT Place
            </h3>
          </div>
          <div class="panel-body">
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="business_name">business_name:</label>
                <input type="text" class="form-control" name="business_name" value={this.state.business_name} onChange={this.onChange} placeholder="email" />
              </div>
              <div class="form-group">
                <label for="business_name1">business_name1:</label>
                <input type="text" class="form-control" name="business_name1" value={this.state.business_name1} onChange={this.onChange} placeholder="name1" />
              </div>
              <div class="form-group">
                <label for="business_name2">business_name2:</label>
                <input type="text" class="form-control" name="business_name2" value={this.state.business_name2} onChange={this.onChange} placeholder="name2" />
              </div>
              <div class="form-group">
                <label for="business_name3">business_name3:</label>
                <input type="text" class="form-control" name="business_name3" value={this.state.business_name3} onChange={this.onChange} placeholder="name3" />
              </div>
              <div class="form-group">
                <label for="tel">email:</label>
                <input type="email" class="form-control" name="email" value={this.state.email} onChange={this.onChange} placeholder="email" />
              </div>
              <div class="form-group">
                <label for="username">Facebook:</label>
                <input type="text" class="form-control" name="facebook" value={this.state.facebook} onChange={this.onChange} placeholder="Facebook" />
              </div>
              <div class="form-group">
                <label for="password">instagram:</label>
                <input type="text" class="form-control" name="instagram" value={this.state.instagram} onChange={this.onChange} placeholder="instagram" />
              </div>
              <div class="form-group">
                <label for="password">รายละเอียด:</label>
                <input type="text" class="form-control" name="detail" value={this.state.detail} onChange={this.onChange} placeholder="detail" />
              </div>
              <div class="form-group">
                <label for="latitude">ละติจูด:</label>
                <input type="text" class="form-control" name="latitude" value={this.state.latitude} onChange={this.onChange} placeholder="latitude" />
              </div>
              <div class="form-group">
                <label for="longitude">ลองจิจูด:</label>
                <input type="text" class="form-control" name="longitude" value={this.state.longitude} onChange={this.onChange} placeholder="longitude" />
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default EditPlace;