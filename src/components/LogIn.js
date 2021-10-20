import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from './Auth'
import firebaseConfig from '../config'
import { Link } from 'react-router-dom'
import "./Login.css"
import Swal from 'sweetalert2'

const LogIn = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const { email, password } = e.target.elements;

        try {

            firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value);
        } catch(error) {
            alert(error);
        }
    }

    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
        return <Redirect to="/home" />;
    }

    return (
        <div className="auth">
            <div className="areare">
                <div className="form">
            <h1> Where are you </h1>
            <form onSubmit={handleSubmit}>
            <div className="mb-2">
                <label for="InputEmail" className="form-label">Email </label>
                <input
                pattern="[^ @]*@[^ @]*" 
                type="email" 
                name="email" 
                className="form-control" 
                id="Email1" 
                aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-2">
                <label for="Password" className="form-label">Password</label>
                <input
                required  
                type="password" 
                name="password" 
                className="form-control"
                id="Password1" />
            </div>
            <div className='button'>
            <button type="submit" className="btn btn-danger">ลงชื่อเขาใช้</button>
            {/* <Link to="/signup"><button className="btn btn-primary m-2">สมัครสมาชิก</button></Link> */}
            </div>
            </form>
            </div>
            </div>
        </div>
    )
}

export default LogIn;