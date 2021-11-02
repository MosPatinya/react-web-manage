import React, { Component } from 'react';
import firebase, { storage } from './config';
import { Link } from 'react-router-dom';
import DashBoard from './components/Dashboard';
import './ShowPlace.css';
import Swal from 'sweetalert2'
class ShowPlace extends Component {

  constructor(props) {
    super(props);
    this.state = {
      place: {},
      key: '',
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
    var photoArray = [
      this.state.place.photo1,
      this.state.place.photo2,
      this.state.place.photo3,
      this.state.place.photo4,
      this.state.place.photo5,
      this.state.place.photo6,
      this.state.place.photo7,
      this.state.place.photo8,
      this.state.place.photo9,
      this.state.place.photo10,
    ]
    firebase.firestore().collection('place').doc(id).delete().then(() => {
      for (let i = 0; i < photoArray.length; i++) {
        if (photoArray[i] !== '') {
          let pictureRef = storage.refFromURL(photoArray[i])
          pictureRef.delete();
        }
      }
      console.log("Document successfully deleted!");
      this.props.history.push("/place")
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
    var photoArray = [
      this.state.place.photo1,
      this.state.place.photo2,
      this.state.place.photo3,
      this.state.place.photo4,
      this.state.place.photo5,
      this.state.place.photo6,
      this.state.place.photo7,
      this.state.place.photo8,
      this.state.place.photo9,
      this.state.place.photo10,
    ]
    console.log(photoArray)
    console.log(this.state.place.check)
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
    const type = this.state.place.type
    const type2 = this.state.place.type2
    const type3 = this.state.place.type3
    const type4 = this.state.place.type4
    const type5 = this.state.place.type5
    const type6 = this.state.place.type6
    const type7 = this.state.place.type7
    const type8 = this.state.place.type8
    const type9 = this.state.place.type9
    const type10 = this.state.place.type10
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
                {this.state.place.business_name1 ? (
                  <div>
                    <dt>ชื่อแฝง:</dt>
                    <dd>{this.state.place.business_name1}</dd>
                  </div>
                ) : (
                  <></>
                )}
                {this.state.place.business_name2 ? (
                  <div>
                    <dt>ชื่อแฝง2:</dt>
                    <dd>{this.state.place.business_name2}</dd>
                  </div>
                ) : (
                  <></>
                )}
                {this.state.place.business_name3 ? (
                  <div>
                    <dt>ชื่อแฝง3:</dt>
                    <dd>{this.state.place.business_name3}</dd>
                  </div>
                ) : (
                  <></>
                )}
                {this.state.place.business_name_english ? (
                  <div>
                    <dt>ชื่อภาษาอังกฤษ:</dt>
                    <dd>{this.state.place.business_name_english}</dd>
                  </div>
                ) : (
                  <></>
                )}
                {this.state.place.tel ? (
                  <div>
                    <dt>เบอร์โทร:</dt>
                    <dd>{this.state.place.tel}</dd>
                  </div>
                ) : (
                  <></>
                )}
                {this.state.place.email ? (
                  <div>
                    <dt>อีเมล:</dt>
                    <dd>{this.state.place.email}</dd>
                  </div>
                ) : (
                  <></>
                )}
                {this.state.place.facebook ? (
                  <div>
                    <dt>Facebook:</dt>
                    <dd>{this.state.place.facebook}</dd>
                  </div>
                ) : (
                  <></>
                )}
                {this.state.place.instagram ? (
                  <div>
                    <dt>instagram:</dt>
                    <dd>{this.state.place.instagram}</dd>
                  </div>
                ) : (
                  <></>
                )}
                <dt>Status</dt>
                <dd>
                  {this.state.place.open == true ? (
                    <div className='open'>สถานที่เปิดอยู่</div>
                  ) : (
                    <div className='close'>สถานที่ปิดอยู่</div>
                  )}
                </dd>
                <dt>หมวดหมู่:</dt>
                <dd>
                  {type ? (
                    <div>
                      <label>{type}</label><br />
                    </div>
                  ) : (
                    <></>
                  )}
                  {type2 ? (
                    <div>
                      <label>{type2}</label><br />
                    </div>
                  ) : (
                    <></>
                  )}
                  {type3 ? (
                    <div>
                      <label>{type3}</label><br />
                    </div>
                  ) : (
                    <></>
                  )}
                  {type4 ? (
                    <div>
                      <label>{type4}</label><br />
                    </div>
                  ) : (
                    <></>
                  )}
                  {type5 ? (
                    <div>
                      <label>{type5}</label><br />
                    </div>
                  ) : (
                    <></>
                  )}
                </dd>
                <dt>ประเภท:</dt>
                <dd>
                  {type6 ? (
                    <div>
                      <label>{type6}</label><br />
                    </div>
                  ) : (
                    <></>
                  )}
                  {type7 ? (
                    <div>
                      <label>{type7}</label><br />
                    </div>
                  ) : (
                    <></>
                  )}
                  {type8 ? (
                    <div>
                      <label>{type8}</label><br />
                    </div>
                  ) : (
                    <></>
                  )}
                  {type9 ? (
                    <div>
                      <label>{type9}</label><br />
                    </div>
                  ) : (
                    <></>
                  )}
                  {type10 ? (
                    <div>
                      <label>{type10}</label><br />
                    </div>
                  ) : (
                    <></>
                  )}
                </dd>
                {this.state.place.detail ? (
                  <div>
                    <dt>รายะเอียด:</dt>
                    <dd>{this.state.place.detail}</dd>
                  </div>
                ) : (
                  <></>
                )}
                {this.state.place.photodetail ? (
                  <div>
                    <dt>คำอธิบายรูปภาพ:</dt>
                    <dd>{this.state.place.photodetail}</dd>
                  </div>
                ) : (
                  <></>
                )}
                {this.state.place.time_open && this.state.place.time_close ? (
                  <div>
                    <dt>เวลาเปิด - เวลาปิด</dt>
                    <dd>{this.state.place.time_open} - {this.state.place.time_close} นาฬิกา </dd>
                  </div>
                ) : (
                  <>
                  </>
                )}
                {this.state.place.day ? (
                  <div>
                    <dt>วันที่เปิด/ปิด:</dt>
                    <dd>{this.state.place.day}</dd>
                  </div>
                ) : (
                  <></>
                )}
                {this.state.place.time ? (
                  <div>
                    <dt>เวลาเปิด/ปิด:</dt>
                <dd>{this.state.place.time}</dd>
                  </div>
                ) : (
                  <></>
                )}
                {this.state.place.address ? (
                  <div>
                    <dt>ที่อยู่:</dt>
                    <dd>{this.state.place.address}</dd>
                  </div>
                ) : (
                  <></>
                )}
                <dt>สถานะ :</dt>
                <dd>
                  {this.state.place.check == true ? (
                    'ตรวจสอบเเล้ว'
                  ) : (
                    'ยังไม่ตรวจสอบ'
                  )}
                </dd>
                {this.state.place.latitude !== 0.1 && this.state.place.longitude !== 0.1 ? (
                  <div>
                    <dt>ละติจูด</dt>
                    <dd>{this.state.place.latitude}</dd>
                    <dt>ลองจิจูด</dt>
                    <dd>{this.state.place.longitude}</dd>
                  </div>
                ) : (
                  <>
                  </>
                )}
                {this.state.place.latitude2 !== 0.1 && this.state.place.longitude2 !== 0.1 ? (
                  <div>
                    <dt>ละติจูด</dt>
                    <dd>{this.state.place.latitude2}</dd>
                    <dt>ลองจิจูด</dt>
                    <dd>{this.state.place.longitude2}</dd>
                  </div>
                ) : (
                  <>
                  </>
                )}
                {this.state.place.latitude3 !== 0.1 && this.state.place.longitude3 !== 0.1 ? (
                  <div>
                    <dt>ละติจูด</dt>
                    <dd>{this.state.place.latitude3}</dd>
                    <dt>ลองจิจูด</dt>
                    <dd>{this.state.place.longitude3}</dd>
                  </div>
                ) : (
                  <>
                  </>
                )}
                {this.state.place.latitude4 !== 0.1 && this.state.place.longitude4 !== 0.1 ? (
                  <div>
                    <dt>ละติจูด</dt>
                    <dd>{this.state.place.latitude4}</dd>
                    <dt>ลองจิจูด</dt>
                    <dd>{this.state.place.longitude4}</dd>
                  </div>
                ) : (
                  <>
                  </>
                )}
                {this.state.place.latitude5 !== 0.1 && this.state.place.longitude5 !== 0.1 ? (
                  <div>
                    <dt>ละติจูด</dt>
                    <dd>{this.state.place.latitude5}</dd>
                    <dt>ลองจิจูด</dt>
                    <dd>{this.state.place.longitude5}</dd>
                  </div>
                ) : (
                  <>
                  </>
                )}
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