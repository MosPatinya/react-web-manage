import React, { Component, useState } from 'react';
import DashBoard from './components/Dashboard';
import firebase from './config';

class Create extends Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection('user');
    this.state = {
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
    e.preventDefault()
    const { user_id, email, password, tel, username, } = this.state;
    this.ref.add({
      user_id,
      email,
      password,
      tel,
      username,
    })
    .then((docRef) => {
      this.setState({
        user_id: '',
        email: '',
        password: '',
        tel: '',
        username: '',
      });
    }).catch((error) => {
      console.error("Error adding document: ", error);
    });
  }
  render() {
    const { email, password, tel, username, } = this.state;
    return (
      <div>
        <header>
          <DashBoard />
        </header>
        <div className="container">
          <div className="panel panel-default">
            <div className="panel-heading">
              <br></br>
              <h3 className="panel-title">
                ADD User
              </h3>
            </div>
            <div className="panel-body">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label for="username">Username:</label>
                  <input type="text" className="form-control" name="username" 
                  value={username} 
                  onChange={this.onChange} 
                  placeholder="name" />
                </div>
                <div className="form-group">
                  <label for="email">Email:</label>
                  <input type="email" className="form-control" name="email" 
                  value={email} 
                  onChange={this.onChange} 
                  placeholder="Email" />
                </div>
                <div className="form-group">
                  <label for="password">Password:</label>
                  <input type="password" className="form-control" name="password" 
                  value={password} 
                  onChange={this.onChange} 
                  placeholder="Password" />
                </div>
                <div className="form-group">
                  <label for="tel">Tel:</label>
                  <input type="phone" className="form-control" name="tel" 
                  value={tel} 
                  onChange={this.onChange} 
                  placeholder="Telephone" />
                </div><br></br>
                <button type="submit" className="btn btn-success">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;