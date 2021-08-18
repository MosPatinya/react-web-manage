import React, { Component } from 'react';
import DashBoard from './components/Dashboard';
import firebase from './config';

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('user');
    this.state = {
      key:'',
      user_id: '',
      email: '',
      password: '',
      tel: '',
      username: '',
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { user_id, email, password, tel, username, } = this.state;
    this.ref.add({
      user_id,
      email,
      password,
      tel,
      username,
    }).then((docRef) => {
      this.setState({
        user_id: '',
        email: '',
        password: '',
        tel: '',
        username: '',
      });
    })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }

  render() {
    const { email, password, tel, username, } = this.state;
    return (
      <div>
        <header>
          <DashBoard/>
        </header>
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <br></br>
            <h3 class="panel-title">
              ADD User
            </h3>
          </div>
          <div class="panel-body">
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" class="form-control" name="username" value={username} onChange={this.onChange} placeholder="name" />
              </div>
              <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" class="form-control" name="email" value={email} onChange={this.onChange} placeholder="Email" />
              </div>
              <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" class="form-control" name="password" value={password} onChange={this.onChange} placeholder="Password" />
              </div>
              <div class="form-group">
                <label for="tel">Tel:</label>
                <input type="phone" class="form-control" name="tel" value={tel} onChange={this.onChange} placeholder="Telephone" />
              </div><br></br>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Create;