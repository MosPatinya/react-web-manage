import React, { useContext } from 'react'
import { Link, Redirect, Route, Router } from 'react-router-dom'
import { AuthContext } from './Auth'
import firebaseConfig from '../config'
import '../components/Dashboard.css'
const DashBoard = () => {
    const { currentUser } = useContext(AuthContext);

    if (!currentUser) {
        return <Redirect to="/" />
    }
    return (

        <div className="header">
            <div className='logo'>
                <h2>Where are you</h2>
            </div>
            <ul class="nav justify-content-end">
                <li class="nav-item">
                    <Link className="nav-link" to="/home">ยืนยันร้านค้าและสถานที่</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" to="/user">ข้อมูลผู้ใช้งาน</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" to="/place">ข้อมูลร้านค้า</Link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">อันดับสถานที่</a>
                </li>
                <li class="nav-item">
                    <button onClick={() => firebaseConfig.auth().signOut()} class="btn btn-danger">Sign Out</button>
                </li>
            </ul>
        </div>
    )
}
export default DashBoard;

