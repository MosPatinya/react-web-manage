import React, { Component } from 'react';
import firebase from './config';
import { Link } from 'react-router-dom';
import DashBoard from './components/Dashboard';
import "./EditPlace.css"
class EditPlace extends Component {

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
      day: '',
      time: '',
      detail: '',
      address: '',
      email: '',
      facebook: '',
      instagram: '',
      line: '',
      website: '',
      price: '',
      rating: '',
      detail: '',
      latitude: '',
      longitude: '',
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
      photodetail: '',
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
          detail: place.detail,
          latitude: place.latitude,
          longitude: place.longitude,
          type: place.type,
          type2: place.type2,
          type3: place.type3,
          type4: place.type4,
          type5: place.type5,
          type6: place.type6,
          type7: place.type7,
          type8: place.type8,
          type9: place.type9,
          type10: place.type10,
          photodetail: place.photodetail,
          day: place.day,
          time: place.time,
          address: place.address,
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({ place: state });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const {
      business_name,
      business_name1,
      business_name2,
      business_name3,
      business_name_english,
      email,
      facebook,
      instagram,
      detail,
      latitude,
      longitude,
      type,
      type2,
      type3,
      type4,
      type5,
      type6,
      type7,
      type8,
      type9,
      type10,
      photodetail,
      time,
      address,

    } = this.state;

    const updateRef = firebase.firestore().collection('place').doc(this.state.key);
    updateRef.update({
      business_name,
      business_name1,
      business_name2,
      business_name3,
      business_name_english,
      email,
      facebook,
      instagram,
      type,
      detail,
      latitude,
      longitude,
      type,
      type2,
      type3,
      type4,
      type5,
      type6,
      type7,
      type8,
      type9,
      type10,
      photodetail,
      time,
      address,
    }).then((docRef) => {
      this.setState({
        key: '',
        business_name: '',
        business_name1: '',
        business_name2: '',
        business_name3: '',
        business_name_english: '',
        email: '',
        facebook: '',
        instagram: '',
        type: '',
        detail: '',
        latitude: '',
        longitude: '',
        photodetail: '',
        time: '',
        address: '',
      });
      this.props.history.push("/showPlace/" + this.props.match.params.id)
    })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }

  render() {
    return (
      <div>
        <header>
          <DashBoard />
        </header>
        <div class="container">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title">
                EDIT Place
              </h3>
            </div>
            <center>
              <div className="phoplace">
                {this.state.photo1 ? (
                  <img src={this.state.photo1} width='400' height='300'></img>
                ) : (
                  <></>
                )}
                {this.state.photo2 ? (
                  <img src={this.state.photo2} width='400' height='300'></img>
                ) : (
                  <></>
                )}
                {this.state.photo3 ? (
                  <img src={this.state.photo3} width='400' height='300'></img>
                ) : (
                  <></>
                )}
                {this.state.photo4 ? (
                  <img src={this.state.photo4} width='400' height='300'></img>
                ) : (
                  <></>
                )}
                {this.state.photo5 ? (
                  <img src={this.state.photo5} width='400' height='300'></img>
                ) : (
                  <></>
                )}
                {this.state.photo5 ? (
                  <img src={this.state.photo5} width='400' height='300'></img>
                ) : (
                  <></>
                )}
                {this.state.photo6 ? (
                  <img src={this.state.photo6} width='400' height='300'></img>
                ) : (
                  <></>
                )}
                {this.state.photo7 ? (
                  <img src={this.state.photo7} width='400' height='300'></img>
                ) : (
                  <></>
                )}
                {this.state.photo8 ? (
                  <img src={this.state.photo8} width='400' height='300'></img>
                ) : (
                  <></>
                )}
                {this.state.photo9 ? (
                  <img src={this.state.photo9} width='400' height='300'></img>
                ) : (
                  <></>
                )}
                {this.state.photo10 ? (
                  <img src={this.state.photo10} width='400' height='300'></img>
                ) : (
                  <></>
                )}
              </div>
            </center>
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
                  <label for="business_name_english">business_name_english:</label>
                  <input type="text" class="form-control" name="business_name_english" value={this.state.business_name_english} onChange={this.onChange} placeholder="business_name_english" />
                </div>
                <div class="form-group">
                  <label for="tel">Time:</label>
                  <input type="text" class="form-control" name="tel" value={this.state.time} onChange={this.onChange} placeholder="Time" />
                </div>
                <div class="form-group">
                  <label for="tel">email:</label>
                  <input type="email" class="form-control" name="email" value={this.state.email} onChange={this.onChange} placeholder="Email" />
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
                <div class="form-group">
                  <label for="photodetail">รายละเอียดรูปภาพ:</label>
                  <input type="text" class="form-control" name="photodetail" value={this.state.photodetail} onChange={this.onChange} placeholder="photodetail" />
                </div>
                <div class="form-group">
                  <label for="Address">ที่อยู่:</label>
                  <input type="text" class="form-control" name="address" value={this.state.address} onChange={this.onChange} placeholder="address" />
                </div>
                <div className="form-group">
                  <label for="category">หมวดหมู่:</label><br />
                  <select style={{ width: 300, height: 30, borderRadius: 5, textAlign: "center" }} onChange={this.onChange} name="type" >
                    <option value="">----{this.state.type}----</option>
                    <option ></option>
                    <option value="ร้านอาหาร">ร้านอาหาร</option>
                    <option value="ร้านกาแฟ">ร้านกาแฟ</option>
                    <option value="ร้านเครื่องเขียน">ร้านเครื่องเขียน</option>
                    <option value="ร้านเสริมสวย">ร้านเสริมสวย</option>
                    <option value="คลินิก/ขายยา">คลินิก/ขายยา</option>
                    <option value="ร้านทั่วไป">ร้านทั่วไป</option>
                    <option value="สถานที่ใน Rmutt">สถานที่ในRMUTT</option>
                    <option value="สถานที่ทั่วไป">สถานที่ทั่วไป</option>
                    <option value=""> - </option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="category">หมวดหมู่:</label><br />
                  <select style={{ width: 300, height: 30, borderRadius: 5, textAlign: "center" }} onChange={this.onChange} name="type2" >
                    <option value="">----{this.state.type2}----</option>
                    <option ></option>
                    <option value="ร้านอาหาร">ร้านอาหาร</option>
                    <option value="ร้านกาแฟ">ร้านกาแฟ</option>
                    <option value="ร้านเครื่องเขียน">ร้านเครื่องเขียน</option>
                    <option value="ร้านเสริมสวย">ร้านเสริมสวย</option>
                    <option value="คลินิก/ขายยา">คลินิก/ขายยา</option>
                    <option value="ร้านทั่วไป">ร้านทั่วไป</option>
                    <option value="สถานที่ใน Rmutt">สถานที่ในRMUTT</option>
                    <option value="สถานที่ทั่วไป">สถานที่ทั่วไป</option>
                    <option value=""> - </option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="category">หมวดหมู่:</label><br />
                  <select style={{ width: 300, height: 30, borderRadius: 5, textAlign: "center" }} onChange={this.onChange} name="type3" >
                    <option value="">----{this.state.type3}----</option>
                    <option ></option>
                    <option value="ร้านอาหาร">ร้านอาหาร</option>
                    <option value="ร้านกาแฟ">ร้านกาแฟ</option>
                    <option value="ร้านเครื่องเขียน">ร้านเครื่องเขียน</option>
                    <option value="ร้านเสริมสวย">ร้านเสริมสวย</option>
                    <option value="คลินิก/ขายยา">คลินิก/ขายยา</option>
                    <option value="ร้านทั่วไป">ร้านทั่วไป</option>
                    <option value="สถานที่ใน Rmutt">สถานที่ในRMUTT</option>
                    <option value="สถานที่ทั่วไป">สถานที่ทั่วไป</option>
                    <option value=""> - </option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="category">หมวดหมู่:</label><br />
                  <select style={{ width: 300, height: 30, borderRadius: 5, textAlign: "center" }} onChange={this.onChange} name="type4" >
                    <option value="">----{this.state.type4}----</option>
                    <option ></option>
                    <option value="ร้านอาหาร">ร้านอาหาร</option>
                    <option value="ร้านกาแฟ">ร้านกาแฟ</option>
                    <option value="ร้านเครื่องเขียน">ร้านเครื่องเขียน</option>
                    <option value="ร้านเสริมสวย">ร้านเสริมสวย</option>
                    <option value="คลินิก/ขายยา">คลินิก/ขายยา</option>
                    <option value="ร้านทั่วไป">ร้านทั่วไป</option>
                    <option value="สถานที่ใน Rmutt">สถานที่ในRMUTT</option>
                    <option value="สถานที่ทั่วไป">สถานที่ทั่วไป</option>
                    <option value=""> - </option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="category">หมวดหมู่:</label><br />
                  <select style={{ width: 300, height: 30, borderRadius: 5, textAlign: "center" }} onChange={this.onChange} name="type5" >
                    <option value="">----{this.state.type5}----</option>
                    <option ></option>
                    <option value="ร้านอาหาร">ร้านอาหาร</option>
                    <option value="ร้านกาแฟ">ร้านกาแฟ</option>
                    <option value="ร้านเครื่องเขียน">ร้านเครื่องเขียน</option>
                    <option value="ร้านเสริมสวย">ร้านเสริมสวย</option>
                    <option value="คลินิก/ขายยา">คลินิก/ขายยา</option>
                    <option value="ร้านทั่วไป">ร้านทั่วไป</option>
                    <option value="สถานที่ใน Rmutt">สถานที่ในRMUTT</option>
                    <option value="สถานที่ทั่วไป">สถานที่ทั่วไป</option>
                    <option value=""> - </option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="category">หมวดหมู่ย่อย:</label><br />
                  <select style={{ width: 300, height: 30, borderRadius: 5, textAlign: "center" }} onChange={this.onChange} name="type6" >
                    <option value="">----{this.state.type6}----</option>
                    <option ></option>
                    <option value="คาเฟ่">คาเฟ่</option>
                    <option value="ชานมไข่มุก">ชานมไข่มุก</option>
                    <option value="หมูกระทะ">หมูกระทะ</option>
                    <option value="ชาบู/ปิ้งย่าง">ชาบู/ปิ้งย่าง</option>
                    <option value="ตามสั่ง">ตามสั่ง</option>
                    <option value="จานด่วน">จานด่วน</option>
                    <option value="เกาหลี">เกาหลี</option>
                    <option value="ญี่ปุ่น">ญี่ปุ่น</option>
                    <option value="ไทย">ไทย</option>
                    <option value="ของหวาน">ของหวาน</option>
                    <option value="ฟาสต์ฟูด">ฟาสต์ฟูด</option>
                    <option value="อื่นๆ">อื่นๆ</option>
                    <option value=""> - </option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="category">หมวดหมู่ย่อย:</label><br />
                  <select style={{ width: 300, height: 30, borderRadius: 5, textAlign: "center" }} onChange={this.onChange} name="type7" >
                    <option value="">----{this.state.type7}----</option>
                    <option ></option>
                    <option value="คาเฟ่">คาเฟ่</option>
                    <option value="ชานมไข่มุก">ชานมไข่มุก</option>
                    <option value="หมูกระทะ">หมูกระทะ</option>
                    <option value="ชาบู/ปิ้งย่าง">ชาบู/ปิ้งย่าง</option>
                    <option value="ตามสั่ง">ตามสั่ง</option>
                    <option value="จานด่วน">จานด่วน</option>
                    <option value="เกาหลี">เกาหลี</option>
                    <option value="ญี่ปุ่น">ญี่ปุ่น</option>
                    <option value="ไทย">ไทย</option>
                    <option value="ของหวาน">ของหวาน</option>
                    <option value="ฟาสต์ฟูด">ฟาสต์ฟูด</option>
                    <option value="อื่นๆ">อื่นๆ</option>
                    <option value=""> - </option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="category">หมวดหมู่ย่อย:</label><br />
                  <select style={{ width: 300, height: 30, borderRadius: 5, textAlign: "center" }} onChange={this.onChange} name="type8" >
                    <option value="">----{this.state.type8}----</option>
                    <option ></option>
                    <option value="คาเฟ่">คาเฟ่</option>
                    <option value="ชานมไข่มุก">ชานมไข่มุก</option>
                    <option value="หมูกระทะ">หมูกระทะ</option>
                    <option value="ชาบู/ปิ้งย่าง">ชาบู/ปิ้งย่าง</option>
                    <option value="ตามสั่ง">ตามสั่ง</option>
                    <option value="จานด่วน">จานด่วน</option>
                    <option value="เกาหลี">เกาหลี</option>
                    <option value="ญี่ปุ่น">ญี่ปุ่น</option>
                    <option value="ไทย">ไทย</option>
                    <option value="ของหวาน">ของหวาน</option>
                    <option value="ฟาสต์ฟูด">ฟาสต์ฟูด</option>
                    <option value="อื่นๆ">อื่นๆ</option>
                    <option value=""> - </option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="category">หมวดหมู่ย่อย:</label><br />
                  <select style={{ width: 300, height: 30, borderRadius: 5, textAlign: "center" }} onChange={this.onChange} name="type9" >
                    <option value="">----{this.state.type9}----</option>
                    <option ></option>
                    <option value="คาเฟ่">คาเฟ่</option>
                    <option value="ชานมไข่มุก">ชานมไข่มุก</option>
                    <option value="หมูกระทะ">หมูกระทะ</option>
                    <option value="ชาบู/ปิ้งย่าง">ชาบู/ปิ้งย่าง</option>
                    <option value="ตามสั่ง">ตามสั่ง</option>
                    <option value="จานด่วน">จานด่วน</option>
                    <option value="เกาหลี">เกาหลี</option>
                    <option value="ญี่ปุ่น">ญี่ปุ่น</option>
                    <option value="ไทย">ไทย</option>
                    <option value="ของหวาน">ของหวาน</option>
                    <option value="ฟาสต์ฟูด">ฟาสต์ฟูด</option>
                    <option value="อื่นๆ">อื่นๆ</option>
                    <option value=""> - </option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="category">หมวดหมู่ย่อย:</label><br />
                  <select style={{ width: 300, height: 30, borderRadius: 5, textAlign: "center" }} onChange={this.onChange} name="type10" >
                    <option value="">----{this.state.type10}----</option>
                    <option ></option>
                    <option value="คาเฟ่">คาเฟ่</option>
                    <option value="ชานมไข่มุก">ชานมไข่มุก</option>
                    <option value="หมูกระทะ">หมูกระทะ</option>
                    <option value="ชาบู/ปิ้งย่าง">ชาบู/ปิ้งย่าง</option>
                    <option value="ตามสั่ง">ตามสั่ง</option>
                    <option value="จานด่วน">จานด่วน</option>
                    <option value="เกาหลี">เกาหลี</option>
                    <option value="ญี่ปุ่น">ญี่ปุ่น</option>
                    <option value="ไทย">ไทย</option>
                    <option value="ของหวาน">ของหวาน</option>
                    <option value="ฟาสต์ฟูด">ฟาสต์ฟูด</option>
                    <option value="อื่นๆ">อื่นๆ</option>
                    <option value=""> - </option>
                  </select>
                </div>
                <br />
                <button type="submit" class="btn btn-success">Submit</button>
                <br />
                <br />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditPlace;