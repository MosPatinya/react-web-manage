import React, { useState, useContext } from "react";
import DashBoard from "./components/Dashboard";
import firebase from './config';
import firebaseConfig, { storage } from "./config";
import './addPlace.css';
import Swal from 'sweetalert2'
function Addplace() {
    const user_id = '';
    const place_id = '';
    const [business_name, setBusiness_name] = useState('');
    const [business_name1, setBusiness_name1] = useState('');
    const [business_name2, setBusiness_name2] = useState('');
    const [business_name3, setBusiness_name3] = useState('');
    const [business_name_english, setBusiness_name_english] = useState('');
    const check = false;
    const [day, setDay] = useState('');
    const [time, setTime] = useState('')
    const [detail, setDetail] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [facebook, setFacebook] = useState('');
    const [instagram, setInstagram] = useState('');
    const [line, setLine] = useState('');
    const [website, setWebsite] = useState('');
    const open = false;
    const [price, setPrice] = useState('');
    const rating = 0;
    const status = 'false';
    const [type, setType] = useState('');
    const [type2, setType2] = useState('');
    const [type3, setType3] = useState('');
    const [type4, setType4] = useState('');
    const [type5, setType5] = useState('');
    const [type6, setType6] = useState('');
    const [type7, setType7] = useState('');
    const [type8, setType8] = useState('');
    const [type9, setType9] = useState('');
    const [type10, setType10] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [tel, setTel] = useState('');
    const [images, setImages] = useState([]);
    const [urls, setUrls] = useState([]);
    const [progress, setProgress] = useState(0);
    const [photodetail, setPhotodetail] = useState('')
    const [map,setMap] = useState('')
    var photo1
    var photo2
    var photo3
    var photo4
    var photo5
    var photo6
    var photo7
    var photo8
    var photo9
    var photo10
    const result = images.length;


    if (result == 10) {
        photo10 = urls[9];
        photo9 = urls[8];
        photo8 = urls[7];
        photo7 = urls[6];
        photo6 = urls[5];
        photo5 = urls[4];
        photo4 = urls[3];
        photo3 = urls[2];
        photo2 = urls[1];
        photo1 = urls[0];
    } else if (result == 9) {
        photo10 = '';
        photo9 = urls[8];
        photo8 = urls[7];
        photo7 = urls[6];
        photo6 = urls[5];
        photo5 = urls[4];
        photo4 = urls[3];
        photo3 = urls[2];
        photo2 = urls[1];
        photo1 = urls[0];
    } else if (result == 8) {
        photo10 = '';
        photo9 = '';
        photo8 = urls[7];
        photo7 = urls[6];
        photo6 = urls[5];
        photo5 = urls[4];
        photo4 = urls[3];
        photo3 = urls[2];
        photo2 = urls[1];
        photo1 = urls[0];
    } else if (result == 7) {
        photo10 = '';
        photo9 = '';
        photo8 = '';
        photo7 = urls[6];
        photo6 = urls[5];
        photo5 = urls[4];
        photo4 = urls[3];
        photo3 = urls[2];
        photo2 = urls[1];
        photo1 = urls[0];
    } else if (result == 6) {
        photo10 = '';
        photo9 = '';
        photo8 = '';
        photo7 = '';
        photo6 = urls[5];
        photo5 = urls[4];
        photo4 = urls[3];
        photo3 = urls[2];
        photo2 = urls[1];
        photo1 = urls[0];
    } else if (result == 5) {
        photo10 = '';
        photo9 = '';
        photo8 = '';
        photo7 = '';
        photo6 = '';
        photo5 = urls[4];
        photo4 = urls[3];
        photo3 = urls[2];
        photo2 = urls[1];
        photo1 = urls[0];
    } else if (result == 4) {
        photo10 = '';
        photo9 = '';
        photo8 = '';
        photo7 = '';
        photo6 = '';
        photo5 = '';
        photo4 = urls[3];
        photo3 = urls[2];
        photo2 = urls[1];
        photo1 = urls[0];
    } else if (result == 3) {
        photo10 = '';
        photo9 = '';
        photo8 = '';
        photo7 = '';
        photo6 = '';
        photo5 = '';
        photo4 = '';
        photo3 = urls[2];
        photo2 = urls[1];
        photo1 = urls[0];
    } else if (result == 2) {
        photo10 = '';
        photo9 = '';
        photo8 = '';
        photo7 = '';
        photo6 = '';
        photo5 = '';
        photo4 = '';
        photo3 = '';
        photo2 = urls[1];
        photo1 = urls[0];
    } else if (result == 1) {
        photo10 = '';
        photo9 = '';
        photo8 = '';
        photo7 = '';
        photo6 = '';
        photo5 = '';
        photo4 = '';
        photo3 = '';
        photo2 = '';
        photo1 = urls[0];
    } else if (result == 0) {
        photo10 = '';
        photo9 = '';
        photo8 = '';
        photo7 = '';
        photo6 = '';
        photo5 = '';
        photo4 = '';
        photo3 = '';
        photo2 = '';
        photo1 = '';
    }


    const submit = (e) => {
        let array = 0
        console.log(result)
        e.preventDefault();
        const obj = {
            user_id: user_id,
            array: array,
            place_id: place_id,
            business_name: business_name,
            business_name1: business_name1,
            business_name2: business_name2,
            business_name3: business_name3,
            business_name_english: business_name_english,
            check: check,
            day: day,
            time: time,
            detail: detail,
            address: address,
            email: email,
            facebook: facebook,
            instagram: instagram,
            line: line,
            website: website,
            open: open,
            price: price,
            rating: parseFloat(rating),
            status: status,
            type: type,
            type2: type2,
            type3: type3,
            type4: type4,
            type5: type5,
            type6: type6,
            type7: type7,
            type8: type8,
            type9: type9,
            type10: type10,
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude),
            tel: tel,
            photo1: photo1,
            photo2: photo2,
            photo3: photo3,
            photo4: photo4,
            photo5: photo5,
            photo6: photo6,
            photo7: photo7,
            photo8: photo8,
            photo9: photo9,
            photo10: photo10,
            photodetail: photodetail,
            map: map,
        };
        console.log(obj)
        setBusiness_name('');
        setBusiness_name1('');
        setBusiness_name2('');
        setBusiness_name3('');
        setBusiness_name_english('');
        setDay('');
        setTime('');
        setDetail('');
        setAddress('');
        setEmail('');
        setFacebook('');
        setInstagram('');
        setLine('');
        setWebsite('');
        setPrice('');
        setLatitude('');
        setLongitude('');
        setType(null);
        setType2('');
        setType3('');
        setType4('');
        setType5('');
        setType6('');
        setType7('');
        setType8('');
        setType9('');
        setType10('');
        setTel('');
        setPhotodetail('');
        addPlace(obj);
    };




    const addPlace = (obj) => {
        let array = 0;
        const user = firebase.auth().currentUser
        const ref = firebase.firestore().collection('place');
        if (ref.doc.length == 0) {
            ref
                .add(obj)
                .then((value) => {
                    ref.doc(value.id).update({
                        place_id: value.id,
                        user_id: user.uid
                    })
                })
                .catch((err) => console.log(err)).then(() => {
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'บันทึกสำเร็จ',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }).then(() => {
                    window.location.href = "/place"
                })
        } else {
            ref
                .orderBy('array', 'desc')
                .limit(1)
                .get()
                .then((querySnapshot) => {
                    querySnapshot.docs.forEach((result) => {
                        array = result.data()['array'] + 1;
                        ref
                            .add(obj)
                            .then((value) => {
                                ref.doc(value.id).update({
                                    place_id: value.id,
                                    array: array,
                                    user_id: user.uid,
                                })
                                console.log(place_id)

                            })
                            .catch((err) => console.log(err)).then(() => {
                                Swal.fire({
                                    position: 'top',
                                    icon: 'success',
                                    title: 'บันทึกสำเร็จ',
                                    showConfirmButton: false,
                                    timer: 1500
                                }).then(() => {
                                    window.location.href = "/place"
                                })
                            })
                        console.log(array)
                        console.log(user.uid)
                    })
                }
                )

        }

    }


    const handleChange = (e) => {
        for (let i = 0; i < e.target.files.length && i < 10; i++) {
            const newImage = e.target.files[i];
            newImage["id"] = Math.random();
            setImages((prevState) => [...prevState, newImage]);
            console.log(e.target.files.length)
        }

    };

    const handleUpload = () => {
        const promises = [];
        images.map((image) => {
            const ref = storage.ref(`/images/${Math.random(99) + image.name}`);
            const uploadTask = ref.put(image);
            promises.push(uploadTask);
            uploadTask.on("state_changed",
                (snapshot) => {
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    setProgress(progress);
                },
                (error) => {
                    console.log(error);
                },
                async () => {
                    await ref
                        .getDownloadURL()
                        .then((urls) => {
                            setUrls((prevState) => [...prevState, urls]);
                        });
                }
            );
        });
        Promise.all(promises)
            .then(() => alert("อัพโหลดรูปสำเร็จ"))
            .catch((err) => console.log(err));
    };


    return (
        <div>
            <header>
                <DashBoard />
            </header>
            <div className='container'>
                <div className='1'>
                    <h2>Add Place</h2>
                </div>
                <div className='boximage'>
                    <div className="imageup">
                        <center>
                            <div>
                                <br />
                                <div className='photourl'>
                                    {urls.map((url, i) => (
                                        <img key={i} style={{ width: "500px" }} src={url} />
                                    ))}
                                </div>
                                <progress value={progress} max="100" />
                                <br />
                                <input type="file" multiple onChange={handleChange} />
                                <button className='btn btn-success' onClick={handleUpload}>ยืนยันอัปโหลด (อัพโหลดสูงสุด10รูป)</button>
                                <br />
                            </div>
                        </center>
                    </div>
                </div>
                <div>
                    <form onSubmit={submit}>
                        <div className="form-group">
                            <label>Business_name:</label>
                            <input type="text" className="form-control"
                                required
                                value={business_name}
                                onChange={(e) => setBusiness_name(e.target.value)}
                                placeholder="ชื่อร้านค้า/สถานที่" />
                        </div>
                        <div className="form-group">
                            <label>Business_name1:</label>
                            <input type="text" className="form-control"
                                value={business_name1}
                                onChange={(e) => setBusiness_name1(e.target.value)}
                                placeholder="นามแฝง" />
                        </div>
                        <div className="form-group">
                            <label>Business_name2:</label>
                            <input type="text" className="form-control"
                                value={business_name2}
                                onChange={(e) => setBusiness_name2(e.target.value)}
                                placeholder="นามแฝง" />
                        </div>
                        <div className="form-group">
                            <label>Business_name3:</label>
                            <input type="text" className="form-control"
                                value={business_name3}
                                onChange={(e) => setBusiness_name3(e.target.value)}
                                placeholder="นามแฝง" />
                        </div>
                        <div className="form-group">
                            <label>Business_name3:</label>
                            <input type="text" className="form-control"
                                value={business_name_english}
                                onChange={(e) => setBusiness_name_english(e.target.value)}
                                placeholder="ชื่อร้านค้า/สถานที่ภาษาอังกฤษ" />
                        </div>
                        <div className="form-group">
                            <label>Day:</label>
                            <input type="day" className="form-control"
                                value={day}
                                onChange={(e) => setDay(e.target.value)}
                                placeholder="วันที่เปิด จ-อา" />
                        </div>
                        <div className="form-group">
                            <label>Time:</label>
                            <input type="day" className="form-control"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                placeholder="เวลาที่เปิด" />
                        </div>
                        <div className="form-group">
                            <label>Detail:</label>
                            <input type="text" className="form-control"
                                value={detail}
                                onChange={(e) => setDetail(e.target.value)}
                                placeholder="รายละเอียดร้านค้า/สถานที่" />
                        </div>
                        <div className="form-group">
                            <label>Address:</label>
                            <input type="text" className="form-control"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder="ที่อยู่" />
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input type="text" className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <label>Facebook:</label>
                            <input type="text" className="form-control"
                                value={facebook}
                                onChange={(e) => setFacebook(e.target.value)}
                                placeholder="Facebook" />
                        </div>
                        <div className="form-group">
                            <label>Instagram:</label>
                            <input type="text" className="form-control"
                                value={instagram}
                                onChange={(e) => setInstagram(e.target.value)}
                                placeholder="Instagram" />
                        </div>
                        <div className="form-group">
                            <label>Line:</label>
                            <input type="text" className="form-control"
                                value={line}
                                onChange={(e) => setLine(e.target.value)}
                                placeholder="Line" />
                        </div>
                        <div className="form-group">
                            <label>Website:</label>
                            <input type="text" className="form-control"
                                value={website}
                                onChange={(e) => setWebsite(e.target.value)}
                                placeholder="Website" />
                        </div>
                        <div className="form-group">
                            <label>Pirce:</label>
                            <input type="text" className="form-control"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder=" xxxx - xxxx " />
                        </div>
                        <div className="form-group">
                            <label>Tel:</label>
                            <input type="tel" className="form-control"
                                value={tel}
                                onChange={(e) => setTel(e.target.value)}
                                placeholder="เบอร์โทรศัพท์" />
                        </div>
                        <div className="form-group">
                            <label>Latitude:</label>
                            <input type="Latitude" className="form-control"
                                required
                                value={latitude}
                                onChange={(e) => setLatitude(e.target.value)}
                                placeholder="ตัวอย่าง 14.0372643" />
                        </div>
                        <div className="form-group">
                            <label>Longitude:</label>
                            <input type="Longitude" className="form-control"
                                required
                                value={longitude}
                                onChange={(e) => setLongitude(e.target.value)}
                                placeholder="ตัวอย่าง 100.7354359" />
                        </div>
                        <div className="form-group">
                            <label>Photodetail:</label>
                            <input type="Photodetail" className="form-control"
                                value={photodetail}
                                onChange={(e) => setPhotodetail(e.target.value)}
                                placeholder="รายละเอียดรูปภาพ" />
                        </div>
                        <div className="select">
                            <label for="category">หมวดหมู่:</label><br />
                            <select required aria-required="true" style={{ width: 300, height: 30, borderRadius: 5, textAlign: "center" }} onChange={(e) => setType(e.target.value)}>
                                <option value="">เลือกหมวดหมู่</option>
                                <option value="ร้านอาหาร">ร้านอาหาร</option>
                                <option value="ร้านกาแฟ">ร้านกาแฟ</option>
                                <option value="ร้านเครื่องเขียน">ร้านเครื่องเขียน</option>
                                <option value="ร้านเสริมสวย">ร้านเสริมสวย</option>
                                <option value="คลินิก/ขายยา">คลินิก/ขายยา</option>
                                <option value="ร้านทั่วไป">ร้านทั่วไป</option>
                                <option value="สถานที่ใน Rmutt">สถานที่ในRMUTT</option>
                                <option value="สถานที่ทั่วไป">สถานที่ทั่วไป</option>
                            </select>
                        </div>
                        <div className="select">
                            <select style={{ width: 300, height: 30, borderRadius: 5, textAlign: "center" }} onChange={(e) => setType2(e.target.value)}>
                                <option >เลือกหมวดหมู่</option>
                                <option value="ร้านอาหาร">ร้านอาหาร</option>
                                <option value="ร้านกาแฟ">ร้านกาแฟ</option>
                                <option value="ร้านเครื่องเขียน">ร้านเครื่องเขียน</option>
                                <option value="ร้านเสริมสวย">ร้านเสริมสวย</option>
                                <option value="คลินิก/ขายยา">คลินิก/ขายยา</option>
                                <option value="ร้านทั่วไป">ร้านทั่วไป</option>
                                <option value="สถานที่ใน Rmutt">สถานที่ในRMUTT</option>
                                <option value="สถานที่ทั่วไป">สถานที่ทั่วไป</option>
                            </select>
                        </div>
                        <div className="select">
                            <select style={{ width: 300, height: 30, borderRadius: 5, textAlign: "center" }} onChange={(e) => setType3(e.target.value)}>
                                <option >เลือกหมวดหมู่</option>
                                <option value="ร้านอาหาร">ร้านอาหาร</option>
                                <option value="ร้านกาแฟ">ร้านกาแฟ</option>
                                <option value="ร้านเครื่องเขียน">ร้านเครื่องเขียน</option>
                                <option value="ร้านเสริมสวย">ร้านเสริมสวย</option>
                                <option value="คลินิก/ขายยา">คลินิก/ขายยา</option>
                                <option value="ร้านทั่วไป">ร้านทั่วไป</option>
                                <option value="สถานที่ใน Rmutt">สถานที่ในRMUTT</option>
                                <option value="สถานที่ทั่วไป">สถานที่ทั่วไป</option>
                            </select>
                        </div>
                        <div className="select">
                            <select style={{ width: 300, height: 30, borderRadius: 5, textAlign: "center" }} onChange={(e) => setType4(e.target.value)}>
                                <option >เลือกหมวดหมู่</option>
                                <option value="ร้านอาหาร">ร้านอาหาร</option>
                                <option value="ร้านกาแฟ">ร้านกาแฟ</option>
                                <option value="ร้านเครื่องเขียน">ร้านเครื่องเขียน</option>
                                <option value="ร้านเสริมสวย">ร้านเสริมสวย</option>
                                <option value="คลินิก/ขายยา">คลินิก/ขายยา</option>
                                <option value="ร้านทั่วไป">ร้านทั่วไป</option>
                                <option value="สถานที่ใน Rmutt">สถานที่ในRMUTT</option>
                                <option value="สถานที่ทั่วไป">สถานที่ทั่วไป</option>
                            </select>
                        </div>
                        <div className="select">
                            <select style={{ width: 300, height: 30, borderRadius: 5, textAlign: "center" }} onChange={(e) => setType5(e.target.value)}>
                                <option >เลือกหมวดหมู่</option>
                                <option value="ร้านอาหาร">ร้านอาหาร</option>
                                <option value="ร้านกาแฟ">ร้านกาแฟ</option>
                                <option value="ร้านเครื่องเขียน">ร้านเครื่องเขียน</option>
                                <option value="ร้านเสริมสวย">ร้านเสริมสวย</option>
                                <option value="คลินิก/ขายยา">คลินิก/ขายยา</option>
                                <option value="ร้านทั่วไป">ร้านทั่วไป</option>
                                <option value="สถานที่ใน Rmutt">สถานที่ในRMUTT</option>
                                <option value="สถานที่ทั่วไป">สถานที่ทั่วไป</option>
                            </select>
                        </div>
                        <div className="select">
                            <label for="category">หมวดหมู่ย่อย:</label><br />
                            <select style={{ width: 300, height: 30, borderRadius: 5, textAlign: "center" }} onChange={(e) => setType6(e.target.value)}>
                                <option >เลือกหมวดหมู่</option>
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
                            </select>
                        </div>
                        <div className="select">
                            <select style={{ width: 300, height: 30, borderRadius: 5, textAlign: "center" }} onChange={(e) => setType7(e.target.value)}>
                                <option >เลือกหมวดหมู่</option>
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
                            </select>
                        </div>
                        <div className="select">
                            <select style={{ width: 300, height: 30, borderRadius: 5, textAlign: "center" }} onChange={(e) => setType8(e.target.value)}>
                                <option >เลือกหมวดหมู่</option>
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
                            </select>
                        </div>
                        <div className="select">
                            <select style={{ width: 300, height: 30, borderRadius: 5, textAlign: "center" }} onChange={(e) => setType9(e.target.value)}>
                                <option >เลือกหมวดหมู่</option>
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
                            </select>
                        </div>
                        <div className="select">
                            <select style={{ width: 300, height: 30, borderRadius: 5, textAlign: "center" }} onChange={(e) => setType10(e.target.value)}>
                                <option value=''>เลือกหมวดหมู่</option>
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
                            </select>
                        </div>
                        <div>
                            <button type='submit' className="btn btn-success mt-3">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Addplace;
