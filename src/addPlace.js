import React, { useState,useMemo } from "react";
import DashBoard from "./components/Dashboard";
import firebase from './config';
import { storage } from "./config";
import './addPlace.css'
import DropdownExampleMultipleSelection from "./dropdown";

function Addplace() {
    const place_id = '';
    const [business_name, setBusiness_name] = useState('');
    const [business_name1, setBusiness_name1] = useState('');
    const [business_name2, setBusiness_name2] = useState('');
    const [business_name3, setBusiness_name3] = useState('');
    const [business_name_english, setBusiness_name_english] = useState('');
    const check = false;
    const [day, setDay] = useState('');
    const [detail, setDetail] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [facebook, setFacebook] = useState('');
    const [instagram, setInstagram] = useState('');
    const [line, setLine] = useState('');
    const [website, setWebsite] = useState('');
    const open  = false;
    const [price, setPrice] = useState('');
    const rating = '';
    const status = 'false';
    const [type, setType] = useState('');
    const [type2, setType2] = useState('');
    const [type3, setType3] = useState('');
    const [type4, setType4] = useState('');
    const [type5, setType5] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [tel, setTel] = useState('');
    const [file, setFile] = useState(null);
    const [url, setURL] = useState('');

    
    const submit = (e) => {
        let array = 0
        e.preventDefault();
        const obj = {
            array: array,
            place_id: place_id,
            business_name:business_name,
            business_name1:business_name1,
            business_name2:business_name2,
            business_name3:business_name3,
            business_name_english:business_name_english,
            check:check,
            day:day,
            detail:detail,
            address:address,
            email:email,
            facebook:facebook,
            instagram:instagram,
            line:line,
            website:website,
            open:open,
            price:price,
            rating:rating,
            status:status,
            type:type,
            type2:type2,
            type3:type3,
            type4:type4,
            type5:type5,
            latitude:latitude,
            longitude:longitude,
            tel: tel,
            photo: url,
          
          
        };
        setBusiness_name('');
        setBusiness_name1('');
        setBusiness_name2('');
        setBusiness_name3('');
        setBusiness_name_english('');
        setDay('');
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
        setTel('');
        setURL('');
        setTel('');
        addPlace(obj);
    };

    const addPlace = (obj) => {
        let array = 0 ;
        const ref = firebase.firestore().collection('users');
        if (ref.doc.length == 0){
        ref
            .add(obj)
            .then((value) => {
                ref.doc(value.id).update({place_id:value.id})
            })
            .catch((err) => console.log(err));
            console.log(ref.doc.length)
            alert('บันทึกขอมูลสำเร็จ')
    } else {
        ref
        .orderBy('array', 'desc')
        .limit(1)
        .get()
        .then((querySnapshot) => {
            querySnapshot.docs.forEach((result) => {
             array = result.data()['array'] + 1 ;
               ref
               .add(obj)
               .then((value) => {
                ref.doc(value.id).update({
                    place_id:value.id,
                    array:array,

                })
                console.log(place_id)
               })
               .catch((err) => console.log(err));
                console.log(array)
                alert('บันทึกขอมูลสำเร็จ')
            })
        }
        )
       
            

    }
} 

    function handleChange(e) {
        setFile(e.target.files[0]);
    }
    function handleUpload(e) {
        e.preventDefault();
        const ref = storage.ref(`/User/${file.name}`);
        const uploadTask = ref.put(file);
        uploadTask.on("state_changed", console.log, console.error, () => {
            ref.getDownloadURL().then((url) => {
                setFile(null);
                setURL(url);
                // alert(`อัพเดตข้อมูลสำเร็จ${url}`);
            });
        });
    }
    return (
        <div>
            <header>
                <DashBoard />
            </header>
            <div className='container'>
                <div className='1'>
                    <h2>Add User</h2>
                </div>
                <div className="image">
                    <center>
                        <form onSubmit={handleUpload}>
                            <img src={url} />
                            <input type="file" onChange={handleChange} />
                            <button className='btn btn-success mt-3' disabled={!file}>ยืนยันอัปโหลด</button>
                        </form>
                    </center>
                </div>
                <div>
                    <form onSubmit={submit}>
                        <div className="form-group">
                            <label>Business_name:</label>
                            <input type="text" className="form-control"
                                value={business_name}
                                onChange={(e) => setBusiness_name(e.target.value)}
                                placeholder="business_name" />
                        </div>
                        <div className="form-group">
                            <label>Business_name1:</label>
                            <input type="text" className="form-control"
                                value={business_name1}
                                onChange={(e) => setBusiness_name1(e.target.value)}
                                placeholder="business_name1" />
                        </div>
                        <div className="form-group">
                            <label>Business_name2:</label>
                            <input type="text" className="form-control"
                                value={business_name2}
                                onChange={(e) => setBusiness_name2(e.target.value)}
                                placeholder="business_name2" />
                        </div>
                        <div className="form-group">
                            <label>Business_name3:</label>
                            <input type="text" className="form-control"
                                value={business_name3}
                                onChange={(e) => setBusiness_name3(e.target.value)}
                                placeholder="business_name3" />
                        </div>
                        <div className="form-group">
                            <label>Business_name3:</label>
                            <input type="text" className="form-control"
                                value={business_name_english}
                                onChange={(e) => setBusiness_name_english(e.target.value)}
                                placeholder="business_name_english" />
                        </div>
                        <div className="form-group">
                            <label>Day:</label>
                            <input type="day" className="form-control"
                                value={day}
                                onChange={(e) => setDay(e.target.value)}
                                placeholder="Day" />
                        </div>
                        <div className="form-group">
                            <label>Detail:</label>
                            <input type="text" className="form-control"
                                value={detail}
                                onChange={(e) => setDetail(e.target.value)}
                                placeholder="Detail" />
                        </div>
                        <div className="form-group">
                            <label>Detail:</label>
                            <input type="text" className="form-control"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder="Address" />
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
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder="Tel" />
                        </div>
                        <div className="select">
                            <label for="category">หมวดหมู่:</label><br />
                            <select onChange={(e) => setType(e.target.value)}>
                                <option >เลือกหมวดหมู่</option>
                                <option value="ร้านอาหาร">ร้านอาหาร</option>
                                <option value="ร้านกาแฟ">ร้านกาแฟ</option>
                                <option value="ร้านเครื่องเขียน">ร้านเครื่องเขียน</option>
                                <option value="ร้านเสริมสวย">ร้านเสริมสวย</option>
                                <option value="คลินิก/ขายยา">คลินิก/ขายยา</option>
                                <option value="ร้านทั่วไป">ร้านทั่วไป</option>
                                <option value="สถานที่ในRMUTT">สถานที่ในRMUTT</option>
                                <option value="สถานที่ทั่วไป">สถานที่ทั่วไป</option>
                            </select>
                        </div>
                        <div className="select">
                            <label for="category">หมวดหมู่ 2:</label><br />
                            <select onChange={(e) => setType2(e.target.value)}>
                                <option >เลือกหมวดหมู่</option>
                                <option value="ร้านอาหาร">ร้านอาหาร</option>
                                <option value="ร้านกาแฟ">ร้านกาแฟ</option>
                                <option value="ร้านเครื่องเขียน">ร้านเครื่องเขียน</option>
                                <option value="ร้านเสริมสวย">ร้านเสริมสวย</option>
                                <option value="คลินิก/ขายยา">คลินิก/ขายยา</option>
                                <option value="ร้านทั่วไป">ร้านทั่วไป</option>
                                <option value="สถานที่ในRMUTT">สถานที่ในRMUTT</option>
                                <option value="สถานที่ทั่วไป">สถานที่ทั่วไป</option>
                            </select>
                        </div>
                        <div className="select">
                            <label for="category">หมวดหมู่ 3:</label><br />
                            <select onChange={(e) => setType3(e.target.value)}>
                                <option >เลือกหมวดหมู่</option>
                                <option value="ร้านอาหาร">ร้านอาหาร</option>
                                <option value="ร้านกาแฟ">ร้านกาแฟ</option>
                                <option value="ร้านเครื่องเขียน">ร้านเครื่องเขียน</option>
                                <option value="ร้านเสริมสวย">ร้านเสริมสวย</option>
                                <option value="คลินิก/ขายยา">คลินิก/ขายยา</option>
                                <option value="ร้านทั่วไป">ร้านทั่วไป</option>
                                <option value="สถานที่ในRMUTT">สถานที่ในRMUTT</option>
                                <option value="สถานที่ทั่วไป">สถานที่ทั่วไป</option>
                            </select>
                        </div>
                        <div className="select">
                            <label for="category">หมวดหมู่ 4:</label><br />
                            <select onChange={(e) => setType4(e.target.value)}>
                                <option >เลือกหมวดหมู่</option>
                                <option value="ร้านอาหาร">ร้านอาหาร</option>
                                <option value="ร้านกาแฟ">ร้านกาแฟ</option>
                                <option value="ร้านเครื่องเขียน">ร้านเครื่องเขียน</option>
                                <option value="ร้านเสริมสวย">ร้านเสริมสวย</option>
                                <option value="คลินิก/ขายยา">คลินิก/ขายยา</option>
                                <option value="ร้านทั่วไป">ร้านทั่วไป</option>
                                <option value="สถานที่ในRMUTT">สถานที่ในRMUTT</option>
                                <option value="สถานที่ทั่วไป">สถานที่ทั่วไป</option>
                            </select>
                        </div>
                        <div className="select">
                            <label for="category">หมวดหมู่ 5:</label><br />
                            <select onChange={(e) => setType5(e.target.value)}>
                                <option >เลือกหมวดหมู่</option>
                                <option value="ร้านอาหาร">ร้านอาหาร</option>
                                <option value="ร้านกาแฟ">ร้านกาแฟ</option>
                                <option value="ร้านเครื่องเขียน">ร้านเครื่องเขียน</option>
                                <option value="ร้านเสริมสวย">ร้านเสริมสวย</option>
                                <option value="คลินิก/ขายยา">คลินิก/ขายยา</option>
                                <option value="ร้านทั่วไป">ร้านทั่วไป</option>
                                <option value="สถานที่ในRMUTT">สถานที่ในRMUTT</option>
                                <option value="สถานที่ทั่วไป">สถานที่ทั่วไป</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Tel:</label>
                            <input type="Latitude" className="form-control"
                                value={tel}
                                onChange={(e) => setLatitude(e.target.value)}
                                placeholder="Latitude" />
                        </div>
                        <div className="form-group">
                            <label>Tel:</label>
                            <input type="Longitude" className="form-control"
                                value={tel}
                                onChange={(e) => setLongitude(e.target.value)}
                                placeholder="Longitude" />
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
