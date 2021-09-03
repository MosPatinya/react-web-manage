import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from './Auth'
import firebaseConfig from '../config'
import { Link } from 'react-router-dom'
import "./Login.css"

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
        <div className="body">
            <div className="container mt-5">
                <div className="form">
            <h1> Where are you </h1>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label for="InputEmail" className="form-label">Email address</label>
                <input type="email" name="email" className="form-control" id="Email1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="Password" className="form-label">Password</label>
                <input type="password" name="password" className="form-control" id="Password1" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <Link to="/signup"><button className="btn btn-primary m-2">Sign In</button></Link>
            </form>
            </div>
            </div>
        </div>
    )
}

export default LogIn;