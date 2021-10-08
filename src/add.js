import React, { useState } from "react";
import DashBoard from "./components/Dashboard";
import firebase from './config';
import { storage } from "./config";
import './add.css'

function Add() {
    const user_id = '';
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [tel, setTel] = useState('');
    const type = 'ผู้ใช้งาน';
    const [file, setFile] = useState('');
    const [url, setURL] = useState('');

    // setEmail(e.target.value)

    const submit = (e) => {
        e.preventDefault();
            const obj = {
                user_id: user_id,
                photo: url,
                username: username,
                tel: tel,
                email: email,
                password: password,
                type: type,
            };
        setURL('');
        setUsername('');
        setTel('');
        setEmail('');
        setPassword('');
        addUser(obj); 
    };

    const addUser = (obj) => {
        const ref = firebase.firestore().collection('user');
        ref
            .add(obj)
            .then((value) => {
                ref.doc(value.id).update({ user_id: value.id })
                alert('บันทึกสำเร็จ')
            })
            .catch((err) => console.log(err));
    };

    function handleChange(e) {
        setFile(e.target.files[0]);
    }
    function handleUpload(e) {
        e.preventDefault();
        const ref = storage.ref(`/User/${Math.random(999) + file.name}`);
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
            <br />
            <div className='container'>
                <div className='1'>
                    <h2>เพิ่มผู้ใช้งาน</h2>
                </div>
                <div className="image">
                    <center>
                        <form onSubmit={handleUpload}>
                            <div className='photoacu'>
                                {url ? (
                                    <img src={url}  width="200" height="200"/>
                                ) : (
                                    <></>
                                )}
                                
                            </div>
                            <div className='upimage'>
                                <input type="file" onChange={handleChange} />
                                <button className='btn btn-success' disabled={!file}>ยืนยันอัปโหลด</button>
                            </div>
                        </form>
                    </center>
                </div>
                <div>
                    <form onSubmit={submit}>
                        <div className="form-group">
                            <label>Username:</label>
                            <input type="text" className="form-control"
                                required min='1'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="name" />
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input type="email" className="form-control"
                                pattern="[^ @]*@[^ @]*"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <label>Tel:</label>
                            <input type="tel" className="form-control"
                                value={tel}
                                onChange={(e) => setTel(e.target.value)}
                                placeholder="Tel" />
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input type="password" className="form-control"
                                required min= '6'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password" />
                        </div>
                        <div>
                            <button type='submit' className="btn btn-success mt-3">เพิ่มผู้ใช้งาน</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}
export default Add;