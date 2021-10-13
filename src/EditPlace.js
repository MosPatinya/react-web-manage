import React, { Component } from 'react';
import firebase, { storage } from './config';
import { Link } from 'react-router-dom';
import DashBoard from './components/Dashboard';
import "./EditPlace.css"
import Swal from 'sweetalert2'
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
      file: null,
      url: null,
      file2: null,
      url2: null,
      file3: null,
      url3: null,
      file4: null,
      url4: null,
      file5: null,
      url5: null,
      file6: null,
      url6: null,
      file7: null,
      url7: null,
      file8: null,
      url8: null,
      file9: null,
      url9: null,
      file10: null,
      url10: null,
      show: false,
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
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'แก้ไขข้อมูลสำเร็จ',
      showConfirmButton: false,
      timer: 1500
    })
  }

  handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      this.setState({ file })
    }
  }

  handleUpload = (e) => {
    e.preventDefault();
    const updateRef = firebase.firestore().collection('place').doc(this.state.key);
    const file = this.state.file;
    const photo1 = this.state.photo1;
    if (photo1 !== '') {
      const ref = storage.ref(`/images/${Math.random(999) + file.name}`);
      const uploadTask = ref.put(file);
      let pictureRef = storage.refFromURL(photo1);
      pictureRef.delete();
      uploadTask.on("state_changed", console.log, console.error, () => {
        ref.getDownloadURL().then((url) => {
          updateRef.update({ photo1: url }).then(() => {
            // window.location.reload();
          })
        })
      });
    } else {
      const ref = storage.ref(`/images/${Math.random(999) + file.name}`);
      const uploadTask = ref.put(file);
      uploadTask.on("state_changed", console.log, console.error, () => {
        ref.getDownloadURL().then((url) => {
          updateRef.update({ photo1: url }).then(() => {
            // window.location.reload();
          })
        })
      });
    }
  }


  handleChange2 = (e) => {
    const file2 = e.target.files[0];
    if (file2) {
      this.setState({ file2 })
    }
  }

  handleUpload2 = (e) => {
    e.preventDefault();
    const updateRef = firebase.firestore().collection('place').doc(this.state.key);
    const file2 = this.state.file2
    const photo2 = this.state.photo2;
    if (photo2 !== '') {
      const ref = storage.ref(`/images/${Math.random(999) + file2.name}`);
      const uploadTask = ref.put(file2);
      let pictureRef = storage.refFromURL(photo2);
      pictureRef.delete();
      uploadTask.on("state_changed", console.log, console.error, () => {
        ref.getDownloadURL().then((url) => {
          updateRef.update({ photo2: url }).then(() => {
            // window.location.reload();
          })
        })
      });
    } else {
      const ref = storage.ref(`/images/${Math.random(999) + file2.name}`);
      const uploadTask = ref.put(file2);
      uploadTask.on("state_changed", console.log, console.error, () => {
        ref.getDownloadURL().then((url) => {
          updateRef.update({ photo2: url }).then(() => {
            // window.location.reload();
          })
        })
      });
    }
  }

  handleChange3 = (e) => {
    const file3 = e.target.files[0];
    if (file3) {
      this.setState({ file3 })
    }
  }

  handleUpload3 = (e) => {
    e.preventDefault();
    const updateRef = firebase.firestore().collection('place').doc(this.state.key);
    const file3 = this.state.file3
    const photo3 = this.state.photo3;
    if (photo3 !== '') {
      const ref = storage.ref(`/images/${Math.random(999) + file3.name}`);
      const uploadTask = ref.put(file3);
      let pictureRef = storage.refFromURL(photo3);
      pictureRef.delete();
      uploadTask.on("state_changed", console.log, console.error, () => {
        ref.getDownloadURL().then((url) => {
          updateRef.update({ photo3: url }).then(() => {
            // window.location.reload();
          })
        })
      });
    } else {
      const ref = storage.ref(`/images/${Math.random(999) + file3.name}`);
      const uploadTask = ref.put(file3);
      uploadTask.on("state_changed", console.log, console.error, () => {
        ref.getDownloadURL().then((url) => {
          updateRef.update({ photo3: url }).then(() => {
            // window.location.reload();
          })
        })
      });
    }
  }

  handleChange4 = (e) => {
    const file4 = e.target.files[0];
    if (file4) {
      this.setState({ file4 })
    }
  }

  handleUpload4 = (e) => {
    e.preventDefault();
    const updateRef = firebase.firestore().collection('place').doc(this.state.key);
    const file4 = this.state.file4;
    const photo4 = this.state.photo4;
    if (photo4 !== '') {
      const ref = storage.ref(`/images/${Math.random(999) + file4.name}`);
      const uploadTask = ref.put(file4);
      let pictureRef = storage.refFromURL(photo4);
      pictureRef.delete();
      uploadTask.on("state_changed", console.log, console.error, () => {
        ref.getDownloadURL().then((url) => {
          updateRef.update({ photo4: url }).then(() => {
            // window.location.reload();
          })
        })
      });
    } else {
      const ref = storage.ref(`/images/${Math.random(999) + file4.name}`);
      const uploadTask = ref.put(file4);
      uploadTask.on("state_changed", console.log, console.error, () => {
        ref.getDownloadURL().then((url) => {
          updateRef.update({ photo4: url }).then(() => {
            // window.location.reload();
          })
        })
      });
    }
  }

  handleChange5 = (e) => {
    const file5 = e.target.files[0];
    if (file5) {
      this.setState({ file5 })
    }
  }

  handleUpload5 = (e) => {
    e.preventDefault();
    const updateRef = firebase.firestore().collection('place').doc(this.state.key);
    const file5 = this.state.file5;
    const photo5 = this.state.photo5;
    if (photo5 !== '') {
      const ref = storage.ref(`/images/${Math.random(999) + file5.name}`);
      const uploadTask = ref.put(file5);
      let pictureRef = storage.refFromURL(photo5);
      pictureRef.delete();
      uploadTask.on("state_changed", console.log, console.error, () => {
        ref.getDownloadURL().then((url) => {
          updateRef.update({ photo5: url }).then(() => {
            // window.location.reload();
          })
        })
      });
    } else {
      const ref = storage.ref(`/images/${Math.random(999) + file5.name}`);
      const uploadTask = ref.put(file5);
      uploadTask.on("state_changed", console.log, console.error, () => {
        ref.getDownloadURL().then((url) => {
          updateRef.update({ photo5: url }).then(() => {
            // window.location.reload();
          })
        })
      });
    }
  }

  handleChange6 = (e) => {
    const file6 = e.target.files[0];
    if (file6) {
      this.setState({ file6 })
    }
  }

  handleUpload6 = (e) => {
    e.preventDefault();
    const updateRef = firebase.firestore().collection('place').doc(this.state.key);
    const file6 = this.state.file6;
    const photo6 = this.state.photo6;
    if (photo6 !== '') {
      const ref = storage.ref(`/images/${Math.random(999) + file6.name}`);
      const uploadTask = ref.put(file6);
      let pictureRef = storage.refFromURL(photo6);
      pictureRef.delete();
      uploadTask.on("state_changed", console.log, console.error, () => {
        ref.getDownloadURL().then((url) => {
          updateRef.update({ photo6: url }).then(() => {
            // window.location.reload();
          })
        })
      });
    } else {
      const ref = storage.ref(`/images/${Math.random(999) + file6.name}`);
      const uploadTask = ref.put(file6);
      uploadTask.on("state_changed", console.log, console.error, () => {
        ref.getDownloadURL().then((url) => {
          updateRef.update({ photo6: url }).then(() => {
            // window.location.reload();
          })
        })
      });
    }
  }

  handleChange7 = (e) => {
    const file7 = e.target.files[0];
    if (file7) {
      this.setState({ file7 })
    }
  }

  handleUpload7 = (e) => {
    e.preventDefault();
    const updateRef = firebase.firestore().collection('place').doc(this.state.key);
    const file7 = this.state.file7;
    const photo7 = this.state.photo7;
    if (photo7 !== '') {
      const ref = storage.ref(`/images/${Math.random(999) + file7.name}`);
      const uploadTask = ref.put(file7);
      let pictureRef = storage.refFromURL(photo7);
      pictureRef.delete();
      uploadTask.on("state_changed", console.log, console.error, () => {
        ref.getDownloadURL().then((url) => {
          updateRef.update({ photo7: url }).then(() => {
            // window.location.reload();
          })
        })
      });
    } else {
      const ref = storage.ref(`/images/${Math.random(999) + file7.name}`);
      const uploadTask = ref.put(file7);
      uploadTask.on("state_changed", console.log, console.error, () => {
        ref.getDownloadURL().then((url) => {
          updateRef.update({ photo7: url }).then(() => {
            // window.location.reload();
          })
        })
      });
    }
  }

  handleChange8 = (e) => {
    const file8 = e.target.files[0];
    if (file8) {
      this.setState({ file8 })
    }
  }

  handleUpload8 = (e) => {
    e.preventDefault();
    const updateRef = firebase.firestore().collection('place').doc(this.state.key);
    const file8 = this.state.file8;
    const photo8 = this.state.photo8;
    if (photo8 !== '') {
      const ref = storage.ref(`/images/${Math.random(999) + file8.name}`);
      const uploadTask = ref.put(file8);
      let pictureRef = storage.refFromURL(photo8);
      pictureRef.delete();
      uploadTask.on("state_changed", console.log, console.error, () => {
        ref.getDownloadURL().then((url) => {
          updateRef.update({ photo8: url }).then(() => {
            // window.location.reload();
          })
        })
      });
    } else {
      const ref = storage.ref(`/images/${Math.random(999) + file8.name}`);
      const uploadTask = ref.put(file8);
      uploadTask.on("state_changed", console.log, console.error, () => {
        ref.getDownloadURL().then((url) => {
          updateRef.update({ photo8: url }).then(() => {
            // window.location.reload();
          })
        })
      });
    }
  }

  handleChange9 = (e) => {
    const file9 = e.target.files[0];
    if (file9) {
      this.setState({ file9 })
    }
  }

  handleUpload9 = (e) => {
    e.preventDefault();
    const updateRef = firebase.firestore().collection('place').doc(this.state.key);
    const file9 = this.state.file9;
    const photo9 = this.state.photo9;
    if (photo9 !== '') {
      const ref = storage.ref(`/images/${Math.random(999) + file9.name}`);
      const uploadTask = ref.put(file9);
      let pictureRef = storage.refFromURL(photo9);
      pictureRef.delete();
      uploadTask.on("state_changed", console.log, console.error, () => {
        ref.getDownloadURL().then((url) => {
          updateRef.update({ photo9: url }).then(() => {
            // window.location.reload();
          })
        })
      });
    } else {
      const ref = storage.ref(`/images/${Math.random(999) + file9.name}`);
      const uploadTask = ref.put(file9);
      uploadTask.on("state_changed", console.log, console.error, () => {
        ref.getDownloadURL().then((url) => {
          updateRef.update({ photo9: url }).then(() => {
            // window.location.reload();
          })
        })
      });
    }
  }

  handleChange10 = (e) => {
    const file10 = e.target.files[0];
    if (file10) {
      this.setState({ file10 })
    }
  }

  handleUpload10 = (e) => {
    e.preventDefault();
    const updateRef = firebase.firestore().collection('place').doc(this.state.key);
    const file10 = this.state.file10;
    const photo10 = this.state.photo10;
    if (photo10 !== '') {
      const ref = storage.ref(`/images/${Math.random(999) + file10.name}`);
      const uploadTask = ref.put(file10);
      let pictureRef = storage.refFromURL(photo10);
      pictureRef.delete();
      uploadTask.on("state_changed", console.log, console.error, () => {
        ref.getDownloadURL().then((url) => {
          updateRef.update({ photo10: url }).then(() => {
            // window.location.reload();
          })
        })
      });
    } else {
      const ref = storage.ref(`/images/${Math.random(999) + file10.name}`);
      const uploadTask = ref.put(file10);
      uploadTask.on("state_changed", console.log, console.error, () => {
        ref.getDownloadURL().then((url) => {
          updateRef.update({ photo10: url }).then(() => {
            // window.location.reload();
          })
        })
      });
    }
  }

  toggle = () => this.setState((currentState) => ({ show: !currentState.show }));


  render() {
    console.log(this.state.photo1)
    console.log(this.state.photo2)
    return (
      <div>
        <header>
          <DashBoard />
        </header>
        <div className="container">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">
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
              <br />
            </center>
            <center>
            <div>
              <button className='btn btn-success' onClick={this.toggle}>
                แก้ไขรูปภาพ: {this.state.show ? 'แสดง' : 'ซ่อน'}
              </button>
              {this.state.show &&
                <center>
                   <br/>
                  <form onSubmit={this.handleUpload}>
                    <input type="file" onChange={this.handleChange} />
                    <button className='btn btn-success' >ยืนยันอัปโหลด</button>
                  </form>
                  <br />
                  <form onSubmit={this.handleUpload2}>
                    <input type="file" onChange={this.handleChange2} />
                    <button className='btn btn-success' >ยืนยันอัปโหลด</button>
                  </form>
                  <br />
                  <form onSubmit={this.handleUpload3}>
                    <input type="file" onChange={this.handleChange3} />
                    <button className='btn btn-success' >ยืนยันอัปโหลด</button>
                  </form>
                  <br />
                  <form onSubmit={this.handleUpload4}>
                    <input type="file" onChange={this.handleChange4} />
                    <button className='btn btn-success' >ยืนยันอัปโหลด</button>
                  </form>
                  <br />
                  <form onSubmit={this.handleUpload5}>
                    <input type="file" onChange={this.handleChange5} />
                    <button className='btn btn-success' >ยืนยันอัปโหลด</button>
                  </form>
                  <br />
                  <form onSubmit={this.handleUpload6}>
                    <input type="file" onChange={this.handleChange6} />
                    <button className='btn btn-success' >ยืนยันอัปโหลด</button>
                  </form>
                  <br />
                  <form onSubmit={this.handleUpload7}>
                    <input type="file" onChange={this.handleChange7} />
                    <button className='btn btn-success' >ยืนยันอัปโหลด</button>
                  </form>
                  <br />
                  <form onSubmit={this.handleUpload8}>
                    <input type="file" onChange={this.handleChange8} />
                    <button className='btn btn-success' >ยืนยันอัปโหลด</button>
                  </form>
                  <br />
                  <form onSubmit={this.handleUpload9}>
                    <input type="file" onChange={this.handleChange9} />
                    <button className='btn btn-success' >ยืนยันอัปโหลด</button>
                  </form>
                  <br />
                  <form onSubmit={this.handleUpload10}>
                    <input type="file" onChange={this.handleChange10} />
                    <button className='btn btn-success' >ยืนยันอัปโหลด</button>
                  </form>
                </center>
              }
            </div>
            </center>
            <br />
            <br />
            <div className="panel-body">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label for="business_name">business_name:</label>
                  <input type="text" className="form-control" name="business_name" value={this.state.business_name} onChange={this.onChange} placeholder="email" />
                </div>
                <div className="form-group">
                  <label for="business_name1">business_name1:</label>
                  <input type="text" className="form-control" name="business_name1" value={this.state.business_name1} onChange={this.onChange} placeholder="name1" />
                </div>
                <div className="form-group">
                  <label for="business_name2">business_name2:</label>
                  <input type="text" className="form-control" name="business_name2" value={this.state.business_name2} onChange={this.onChange} placeholder="name2" />
                </div>
                <div className="form-group">
                  <label for="business_name3">business_name3:</label>
                  <input type="text" className="form-control" name="business_name3" value={this.state.business_name3} onChange={this.onChange} placeholder="name3" />
                </div>
                <div className="form-group">
                  <label for="business_name_english">business_name_english:</label>
                  <input type="text" className="form-control" name="business_name_english" value={this.state.business_name_english} onChange={this.onChange} placeholder="business_name_english" />
                </div>
                <div className="form-group">
                  <label for="tel">Time:</label>
                  <input type="text" className="form-control" name="tel" value={this.state.time} onChange={this.onChange} placeholder="Time" />
                </div>
                <div className="form-group">
                  <label for="tel">email:</label>
                  <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.onChange} placeholder="Email" />
                </div>
                <div className="form-group">
                  <label for="username">Facebook:</label>
                  <input type="text" className="form-control" name="facebook" value={this.state.facebook} onChange={this.onChange} placeholder="Facebook" />
                </div>
                <div className="form-group">
                  <label for="password">instagram:</label>
                  <input type="text" className="form-control" name="instagram" value={this.state.instagram} onChange={this.onChange} placeholder="instagram" />
                </div>
                <div className="form-group">
                  <label for="password">รายละเอียด:</label>
                  <input type="text" className="form-control" name="detail" value={this.state.detail} onChange={this.onChange} placeholder="detail" />
                </div>
                <div className="form-group">
                  <label for="latitude">ละติจูด:</label>
                  <input type="text" className="form-control" name="latitude" value={this.state.latitude} onChange={this.onChange} placeholder="latitude" />
                </div>
                <div className="form-group">
                  <label for="longitude">ลองจิจูด:</label>
                  <input type="text" className="form-control" name="longitude" value={this.state.longitude} onChange={this.onChange} placeholder="longitude" />
                </div>
                <div className="form-group">
                  <label for="photodetail">รายละเอียดรูปภาพ:</label>
                  <input type="text" className="form-control" name="photodetail" value={this.state.photodetail} onChange={this.onChange} placeholder="photodetail" />
                </div>
                <div className="form-group">
                  <label for="Address">ที่อยู่:</label>
                  <input type="text" className="form-control" name="address" value={this.state.address} onChange={this.onChange} placeholder="address" />
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