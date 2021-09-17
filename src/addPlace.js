import React, { useState } from "react";
import DashBoard from "./components/Dashboard";
import firebase from './config';
import { storage } from "./config";
import DropdownExampleMultipleSelection from "./dropdown";

function Addplace() {
    const [array, setArray] = useState(0);
    const [business_name, setBusiness_name] = useState('');
    const [business_name1, setBusiness_name1] = useState('');
    const [business_name2, setBusiness_name2] = useState('');
    const [business_name3, setBusiness_name3] = useState('');
    const [business_name_english, setBusiness_name_english] = useState('');
    const [check, setCheck] = useState(false);
    const [day, setDay] = useState('');
    const [detail, setDetail] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [facebook, setFacebook] = useState('');
    const [instagram, setInstagram] = useState('');
    const [line, setLine] = useState('');
    const [website, setWebsite] = useState('');
    const [open, setOpen] = useState(false);
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState(0);
    const [status, setStatus] = useState('false');
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

    const addUser = (obj) => {
        const ref = firebase.firestore().collection('user');
        ref
            .add(obj)
            .then(() => {
                console.log("add successfuly");
            })
            .catch((err) => console.log(err));
    };
    const submit = (e) => {
        e.preventDefault();
        const obj = {
            photo: url,
            tel: tel,
            email: email,
        };
        setURL('');
        setTel('');
        setEmail('');
        addUser(obj);
    };

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
                        <div>
                        
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