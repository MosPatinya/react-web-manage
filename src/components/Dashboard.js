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
                <h2>WHERE ARE YOU</h2>
            </div>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <Link className="nav-link" to="/home">ยืนยันร้านค้าและสถานที่</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/user">ข้อมูลผู้ใช้งาน</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/place">ข้อมูลร้านค้า</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/graf">อันดับสถานที่(Rating)</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/view">อันดับสถานที่(View)</Link>
                </li>
                <li className="nav-item">
                    <button onClick={() => firebaseConfig.auth().signOut()} class="btn btn-danger">Sign Out</button>
                </li>
            </ul>
        </div>
    )
}
export default DashBoard;

