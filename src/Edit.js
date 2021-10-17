import React, { Component } from 'react';
import firebase, { storage } from './config';
import { Link } from 'react-router-dom';
import DashBoard from './components/Dashboard';
import Swal from 'sweetalert2'
import './Edit.css'

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
      file: null,
      url: null,
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
        photo: '',
        email: '',
        tel: '',
        username: '',
        password: '',
      });
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'แก้ไขข้อมูลสำเร็จ',
        showConfirmButton: false,
        timer: 1500
      })
      this.props.history.push("/show/" + this.props.match.params.id)
    })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }

  handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      this.setState({ file })
    }
  }

  handleUpload = (e) => {
    e.preventDefault();
    const updateRef = firebase.firestore().collection('user').doc(this.state.key);
    const file = this.state.file
    const photo = this.state.photo
    if (photo !== '') {
      const ref = storage.ref(`/User/${Math.random(999) + file.name}`);
      const uploadTask = ref.put(file);
      let pictureRef = storage.refFromURL(photo);
      pictureRef.delete();
      uploadTask.on("state_changed", console.log, console.error, () => {
        ref.getDownloadURL().then((url) => {
          updateRef.update({ photo: url }).then(() => {
            window.location.reload();
          })
          // alert(`อัพเดตข้อมูลสำเร็จ${url}`);
        })
      });
    } else{
      const ref = storage.ref(`/User/${Math.random(999) + file.name}`);
      const uploadTask = ref.put(file);
      uploadTask.on("state_changed", console.log, console.error, () => {
        ref.getDownloadURL().then((url) => {
          updateRef.update({ photo: url }).then(() => {
            window.location.reload();
          })
          // alert(`อัพเดตข้อมูลสำเร็จ${url}`);
        })
      });
    }
  }

  render() {
    const showphoto = this.state.photo
    console.log(this.state.key)
    return (
      <div>
        <header>
          <DashBoard />
        </header>
        <br />
        <div className="container">
          <div className="panel panel-default">
          <div className="cardEdit">
            <div className="panel-heading">
              <h3 className="panel-title">
                EDIT USER
              </h3>
            </div>
            <div>
            <div className="profileEdit">
              <center>
                {showphoto ? (
                  <img src={this.state.photo} width='200' height='200'></img>
                ) : (
                  <label>ไม่มีรูปภาพ</label>
                )}
              </center>
              </div>
              <br />
              <form onSubmit={this.handleUpload}>
                <center>
                  {/* <form onSubmit={this.handleSubmit}>
                  <input
                    onChange={this.addFile}
                    // disabled={uploadState === 'uploading'}
                    name="file"
                    type="file"
                  />
                  <button className='btn btn-primary'>Post</button>
                </form> */}
                  <input type="file" onChange={this.handleChange} />
                  <button className='btn btn-success' >ยืนยันอัปโหลด</button>
                </center>
              </form>
            </div>
            <div className="panel-body1">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label for="email">Email:</label>
                  <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.onChange} placeholder="email" />
                </div>
                <div className="form-group">
                  <label for="tel">Tel:</label>
                  <input type="text" className="form-control" name="tel" value={this.state.tel} onChange={this.onChange} placeholder="tel" />
                </div>
                <div className="form-group">
                  <label for="username">UserName:</label>
                  <input type="text" className="form-control" name="username" value={this.state.username} onChange={this.onChange} placeholder="username" />
                </div>
                <div className="form-group">
                  <label for="password">Password:</label>
                  <input type="password" id="myInput" className="form-control" name="password" value={this.state.password} onChange={this.onChange} placeholder="username" />
                </div>
                <br />
                <center>
                <button type="submit" className="btn btn-success">Submit</button>
                </center>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Edit;