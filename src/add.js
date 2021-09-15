import React, { useState } from "react";
import DashBoard from "./components/Dashboard";
import firebase from './config';
import { storage } from "./config";

function Add() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
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
            username: username,
            tel: tel,
            email: email,
            password: password,
        };
        setURL('');
        setUsername('');
        setTel('');
        setEmail('');
        setPassword('');
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
                <DashBoard/>
                </header>
        <div className='container'>
            <div className='1'>
                <h2>Add User</h2>
            </div>
            <div className="image">
                <center>
                    <form onSubmit={handleUpload}>
                        <img src={url}/>
                        <input type="file" onChange={handleChange} />
                        <button disabled={!file}>upload to firebase</button>
                    </form>
                </center>
            </div>
            <div>
                <form onSubmit={submit}>
                    <div className="form-group">
                        <label>Username:</label>
                        <input type="text" className="form-control"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="name" />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="text" className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <label>Tel:</label>
                        <input type="text" className="form-control"
                            value={tel}
                            onChange={(e) => setTel(e.target.value)}
                            placeholder="Tel" />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="text" className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password" />
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
export default Add;