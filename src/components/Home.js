import React from 'react'
import './Home.css';
import video from '../Assets/video1.mp4';
import { GrLocation } from 'react-icons/gr';
import { HiFilter } from 'react-icons/hi';
const Home = () => {
    return (
        <div className='main'>
            <video src={video} autoPlay loop muted/>
            <div className='content'>
            <h1>Welcome</h1>
            <p>To my Site.</p>
            </div>
        </div>
    )
}

export default Home
