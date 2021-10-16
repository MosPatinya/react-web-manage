import React, { Component } from 'react'
import DashBoard from '../components/Dashboard';
import Create_List from '../List_user';
import { Link } from 'react-router-dom';
import '../Navbar/User.css'



export class User extends Component {
    render() {
        return (
            <div>
                <header>
                    <DashBoard />
                </header>
                <br/>
                <center>
                    <h2>ข้อมูลผู้ใช้งาน</h2>
                </center>
                <div className='adduser'>
                        <Link to='/add'><button type="button" class="btn btn-success">เพิ่มผู้ใช้งาน</button></Link>
                    </div>
                <div className='detail_user'>
                    <Create_List />
                </div>
            </div>
        )
    }
}

export default User;
