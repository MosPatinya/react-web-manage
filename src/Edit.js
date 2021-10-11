import React, { Component } from 'react';
import firebase from './config';
import { Link } from 'react-router-dom';
import DashBoard from './components/Dashboard';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      user_id: '',
      photo: '',
      email: '',
      tel: '',
      username: '',
      password: '',
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('user').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const user = doc.data();
        this.setState({
          key: doc.id,
          photo: user.photo,
          user_id: user.user_id,
          email: user.email,
          tel: user.tel,
          username: user.username,
          password: user.password,
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({ user: state });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { photo, user_id, email, tel, username, password } = this.state;

    const updateRef = firebase.firestore().collection('user').doc(this.state.key);
    updateRef.update({
      photo,
      user_id,
      email,
      tel,
      username,
      password,
    }).then((docRef) => {
      this.setState({
        key: '',
        email: '',
        tel: '',
        username: '',
        password: '',
      });
      this.props.history.push("/show/" + this.props.match.params.id)
    })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }
  

  render() {
    const showphoto = this.state.photo
    return (
      <div>
        <header>
          <DashBoard />
        </header>
        <br />
        <div class="container">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title">
                EDIT USER
              </h3>
            </div>
            <div>
              <center>
                {showphoto ? (
                  <img src={this.state.photo} width='200' height='200'></img>
                ) : (
                  <label>ไม่มีรูปภาพ</label>
                )}
              </center>
            </div>
            <div class="panel-body">
              <form onSubmit={this.onSubmit}>
                <div class="form-group">
                  <label for="email">Email:</label>
                  <input type="text" class="form-control" name="email" value={this.state.email} onChange={this.onChange} placeholder="email" />
                </div>
                <div class="form-group">
                  <label for="tel">Tel:</label>
                  <input type="text" class="form-control" name="tel" value={this.state.tel} onChange={this.onChange} placeholder="tel" />
                </div>
                <div class="form-group">
                  <label for="username">UserName:</label>
                  <input type="text" class="form-control" name="username" value={this.state.username} onChange={this.onChange} placeholder="username" />
                </div>
                <div class="form-group">
                  <label for="password">Password:</label>
                  <input type="password" id="myInput" class="form-control" name="password" value={this.state.password} onChange={this.onChange} placeholder="username" />
                </div>
                <br/>
                <button type="submit" class="btn btn-success">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;