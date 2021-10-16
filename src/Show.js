import React, { Component } from 'react';
import firebase, { storage } from './config';
import { Link } from 'react-router-dom';
import DashBoard from './components/Dashboard';
import './Show.css';
import Swal from 'sweetalert2'
class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {},
      key: '',
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
    var photoArray = this.state.user.photo
    firebase.firestore().collection('user').doc(id).delete().then(() => {
      if ( photoArray !== ''){
        let pictureRef = storage.refFromURL(photoArray);
        pictureRef.delete();
      }
      console.log("Document successfully deleted!");
      this.props.history.push("/user")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'ลบข้อมูลสำเร็จ',
      showConfirmButton: false,
      timer: 1500
    })
  }


  render() {
    const showphoto = this.state.user.photo;
    console.log(showphoto)
    return (
      <div>
        <DashBoard />
        <div className="container">
          <div className="area">
            <div className="body">
              <dl>
                <dt>Photo</dt>
                <dd>
                  <div className='profile'>
                  {showphoto ? (
                    <img src={this.state.user.photo} width='200' height='200'></img>
                  ) : (
                    <label>ไม่มีรูปภาพ</label>
                  )}
                  </div>
                </dd>
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
              <Link to={`/edit/${this.state.key}`} className="btn btn-success">Edit</Link>&nbsp;
              <button onClick={this.delete.bind(this, this.state.key)} className="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
{/* <img src ={showphoto} width='200' height='200' /> */ }
export default Show;