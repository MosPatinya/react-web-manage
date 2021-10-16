import React, { Component } from 'react';
import firebase from './config';
import { Link } from 'react-router-dom';
import DashBoard from './components/Dashboard';
import Swal from 'sweetalert2'

class ShowPlaceCheck extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      photo1: '',
      photo2: '',
      photo3: '',
      photo4: '',
      photo5: '',
      photo6: '',
      photo7: '',
      photo8: '',
      photo9: '',
      photo10: '',
      business_name: '',
      business_name1: '',
      business_name2: '',
      business_name3: '',
      business_name_english: '',
      email: '',
      facebook: '',
      instagram: '',
      type: '',
      type2: '',
      type3: '',
      type4: '',
      type5: '',
      type6: '',
      type7: '',
      type8: '',
      type9: '',
      type10: '',
      detail: '',
      latitude: '',
      longitude: '',
      tel: '',
      photodetail: '',
      time: '',
      day: '',
      open: '',
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
          photo2: place.photo2,
          photo3: place.photo3,
          photo4: place.photo4,
          photo5: place.photo5,
          photo6: place.photo6,
          photo7: place.photo7,
          photo8: place.photo8,
          photo9: place.photo9,
          photo10: place.photo10,
          business_name: place.business_name,
          business_name1: place.business_name1,
          business_name2: place.business_name2,
          business_name3: place.business_name3,
          business_name_english: place.business_name_english,
          email: place.email,
          facebook: place.facebook,
          instagram: place.instagram,
          type: place.type,
          type2: place.type2,
          type3: place.type3,
          type4: place.type5,
          type5: place.type5,
          type6: place.type6,
          type7: place.type7,
          type8: place.type8,
          type9: place.type9,
          type10: place.type10,
          detail: place.detail,
          latitude: place.latitude,
          longitude: place.longitude,
          tel: place.tel,
          photodetail: place.photodetail,
          time: place.time,
          day: place.day,
          open: place.open,
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
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'เผยเเพร่ข้อมูลสำเร็จ',
      showConfirmButton: false,
      timer: 1500
    })
    this.props.history.push("/showPlace/" + this.props.match.params.id)
  }

  render() {
    const photo1 = this.state.photo1;
    const photo2 = this.state.photo2;
    const photo3 = this.state.photo3;
    const photo4 = this.state.photo4;
    const photo5 = this.state.photo5;
    const photo6 = this.state.photo6;
    const photo7 = this.state.photo7;
    const photo8 = this.state.photo8;
    const photo9 = this.state.photo9;
    const photo10 = this.state.photo10;
    return (
      <div>
        <header>
          <DashBoard />
        </header>
        <div class="container1">
          <div className='photo'>
            {photo1 ? (
              <img className='photo1' src={this.state.photo1} width="400" height="200"></img>
            ) : (
              <></>
            )}
            {photo2 ? (
              <img className='photo1' src={this.state.photo2} width="400" height="200"></img>
            ) : (
              <></>
            )}
            {photo3 ? (
              <img className='photo1' src={this.state.photo3} width="400" height="200"></img>
            ) : (
              <></>
            )}
            {photo4 ? (
              <img className='photo1' src={this.state.photo4} width="400" height="200"></img>
            ) : (
              <></>
            )}
            {photo5 ? (
              <img className='photo1' src={this.state.photo5} width="400" height="200"></img>
            ) : (
              <></>
            )}
            {photo6 ? (
              <img className='photo1' src={this.state.photo6} width="400" height="200"></img>
            ) : (
              <></>
            )}
            {photo7 ? (
              <img className='photo1' src={this.state.photo7} width="400" height="200"></img>
            ) : (
              <></>
            )}
            {photo8 ? (
              <img className='photo1' src={this.state.photo8} width="400" height="200"></img>
            ) : (
              <></>
            )}
            {photo9 ? (
              <img className='photo1' src={this.state.photo9} width="400" height="200"></img>
            ) : (
              <></>
            )}
            {photo10 ? (
              <img className='photo1' src={this.state.photo10} width="400" height="200"></img>
            ) : (
              <></>
            )}
          </div>
          <div className="body">
            <dl>
              <dt>ชื่อร้านค้า/สถานที่</dt>
              <dd>{this.state.business_name}</dd>
              <dt>ชื่อแฝง</dt>
              <dd>{this.state.business_name1}</dd>
              <dt>ชื่อแฝง2</dt>
              <dd>{this.state.business_name2}</dd>
              <dt>ชื่อแฝง3</dt>
              <dd>{this.state.business_name3}</dd>
              <dt>ชื่อภาษาอังกฤษ</dt>
              <dd>{this.state.business_name_english}</dd>
              <dt>อีเมล</dt>
              <dd>{this.state.email}</dd>
              <dt>Facebook</dt>
              <dd>{this.state.facebook}</dd>
              <dt>instagram</dt>
              <dd>{this.state.instagram}</dd>
              <dt>เบอร์โทร</dt>
              <dd>{this.state.tel}</dd>
              <dt>Status</dt>
                <dd>
                  {this.state.open == true ? (
                    <div className = 'open'>สถานที่เปิดอยู่</div>
                ) : (
                  <div className = 'close'>สถานที่ปิดอยู่</div>
                )}
                </dd>
              <dt>หมวดหมู่</dt>
              <dd>{this.state.type}</dd>
              <dd>{this.state.type2}</dd>
              <dd>{this.state.type3}</dd>
              <dd>{this.state.type4}</dd>
              <dd>{this.state.type5}</dd>
              <dd>{this.state.type6}</dd>
              <dd>{this.state.type7}</dd>
              <dd>{this.state.type8}</dd>
              <dd>{this.state.type9}</dd>
              <dd>{this.state.type10}</dd>
              <dt>รายะเอียด</dt>
              <dd>{this.state.detail}</dd>
              <dt>เวลาเปิด/ปิด</dt>
              <dd>{this.state.time}</dd>
              <dt>วันที่เปิด/ปิด</dt>
              <dd>{this.state.day}</dd>
              <dt>ละติจูด</dt>
              <dd>{this.state.latitude}</dd>
              <dt>ลองจิจูด</dt>
              <dd>{this.state.longitude}</dd>
              <dt>รายะเอียดรูปภาพ</dt>
              <dd>{this.state.photodetail}</dd>
              <dt>สถานะ</dt>
              <dd>
                {this.state.check == true ? (
                  'ตรวจสอบเเล้ว'
                ) : (
                  'ยังไม่ตรวจสอบ'
                )}
              </dd>
              <br />
              <form onSubmit={this.onSubmit}>
                <button type="submit" className="btn btn-success">เผยเเพร่</button>
              </form>
            </dl>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowPlaceCheck;