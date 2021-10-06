import React, { useState } from 'react'
import { Redirect,Link } from 'react-router-dom'
import firebaseConfig from '../config'

const SignUp = () => {
    const [currentUser, setCurrentUser] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;

        try {

            firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value);
            setCurrentUser(true);

        } catch(error) {
            alert(error);
        }
    }

    if (currentUser) {
        return <Redirect to="/dashboard" />
    }

    return (
        <>
            <div className="auth">
                <div className='areare'>
                    <div className='form'>
            <h1>สมัครสมาชิก</h1>
            <form onSubmit={handleSubmit}>
            <div className="mb-2">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-2">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className='button'>
            <button type="submit" className="btn btn-primary">สมัครสมาชิก</button>
            <Link to="/"><button className="btn btn-primary m-2">ลงชื่อเขาใช้</button></Link>
            </div>
            </form>
            </div>
            </div>
            </div>
        </>
    )
}

export default SignUp;