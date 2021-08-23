import React, { Component } from 'react'
import DashBoard from '../components/Dashboard'
import ImageUpload from '../image'



export class Graf extends Component {
    render() {
        return (
            <div>
                <header>
                    <DashBoard />
                </header>
                <div>
                   <ImageUpload/>
                </div>
            </div>
        )
    }
}

export default Graf;
