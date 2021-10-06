import React, { Component } from 'react';
import firebase from './config';
import { Link } from 'react-router-dom';
import DashBoard from './components/Dashboard';
import './ShowPlace.css';
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
  showimage() {
    if (this.state.place.photo10 = '') {
      return <img src={this.state.place.photo1} width="500" height="300"></img>
    } else {
      return <img src={this.state.place.photo1} width="500" height="300"></img>
    }
  }

  render() {
    const photo1 = this.state.place.photo1;
    const photo2 = this.state.place.photo2;
    const photo3 = this.state.place.photo3;
    const photo4 = this.state.place.photo4;
    const photo5 = this.state.place.photo5;
    const photo6 = this.state.place.photo6;
    const photo7 = this.state.place.photo7;
    const photo8 = this.state.place.photo8;
    const photo9 = this.state.place.photo9;
    const photo10 = this.state.place.photo10;
    return (
      <div>
        <DashBoard />
        <div className="container">
          <div className="area">
            <div className='position'>
              <div className='box'>
                {photo1 ? (
                  <img src={this.state.place.photo1} width="500" height="300"></img>
                ) : (
                  <></>
                )}
                {photo2 ? (
                  <img src={this.state.place.photo2} width="500" height="300"></img>
                ) : (
                  <></>
                )}
                {photo3 ? (
                  <img src={this.state.place.photo3} width="500" height="300"></img>
                ) : (
                  <></>
                )}
                {photo4 ? (
                  <img src={this.state.place.photo4} width="500" height="300"></img>
                ) : (
                  <></>
                )}
                {photo5 ? (
                  <img src={this.state.place.photo5} width="500" height="300"></img>
                ) : (
                  <></>
                )}
                {photo6 ? (
                  <img src={this.state.place.photo6} width="500" height="300"></img>
                ) : (
                  <></>
                )}
                {photo7 ? (
                  <img src={this.state.place.photo7} width="500" height="300"></img>
                ) : (
                  <></>
                )}
                {photo8 ? (
                  <img src={this.state.place.photo8} width="500" height="300"></img>
                ) : (
                  <></>
                )}
                {photo9 ? (
                  <img src={this.state.place.photo9} width="500" height="300"></img>
                ) : (
                  <></>
                )}
                {photo10 ? (
                  <img src={this.state.place.photo10} width="500" height="300"></img>
                ) : (
                  <></>
                )}
              </div>
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
                <dt>เบอร์โทร:</dt>
                <dd>{this.state.place.tel}</dd>
                <dt>อีเมล:</dt>
                <dd>{this.state.place.email}</dd>
                <dt>Facebook:</dt>
                <dd>{this.state.place.facebook}</dd>
                <dt>instagram:</dt>
                <dd>{this.state.place.instagram}</dd>
                <dt>หมวดหมู่:</dt>
                <dd>{this.state.place.type}</dd>
                <dt>หมวดหมู่:</dt>
                <dd>{this.state.place.type1}</dd>
                <dt>หมวดหมู่:</dt>
                <dd>{this.state.place.type2}</dd>
                <dt>หมวดหมู่:</dt>
                <dd>{this.state.place.type3}</dd>
                <dt>หมวดหมู่:</dt>
                <dd>{this.state.place.type4}</dd>
                <dt>รายะเอียด:</dt>
                <dd>{this.state.place.detail}</dd>
                <dt>คำอธิบายรูปภาพ:</dt>
                <dd>{this.state.place.Photodetaii}</dd>
                <dt>วันที่เปิด:</dt>
                <dd>{this.state.place.day}</dd>
                <dt>เวลาเปิด/ปิด:</dt>
                <dd>{this.state.place.time}</dd>
                <br></br>
                <div className='button-area'>
                  <div className='btn'>
                    <Link to={`/editPlace/${this.state.key}`} class="btn btn-success">Edit</Link>
                  </div>
                  <div className='btn'>
                    <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger">Delete</button>
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

export default ShowPlace;