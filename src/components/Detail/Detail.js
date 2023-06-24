import React, { useState, useEffect } from 'react';
import Home from '../Home';
import JobBoardComponent from '../JobBoardComponent';
import { useParams } from 'react-router';
import data from '../../Assets/data.json';
//import detimg from './detail.jpg';
import './detail.css';
import wave from "./img/wave.png";
import second from "./img/bg1.svg";
//import imgsvg from "./img/img.svg"

import { GoLocation } from "react-icons/go";
import { BsFillBagCheckFill } from "react-icons/bs";
import { FaFileContract } from "react-icons/fa";
import { AiOutlineFieldTime } from "react-icons/ai";
function Detail() {
    let { id } = useParams();
    const key = { id };
    const info = (data[(key.id) - 1]);
    console.log(info);
    const langAndTools = [];

    if (info.languages) {
        langAndTools.push(...(info.languages));
    }
    if (info.tools) {
        langAndTools.push(...(info.tools));
    }
    return (
        <div>
            <img className='wave' src={wave} alt="wave" />
            <div className='container'>
                <div className='img'>
                    <img src={second} />
                </div>
                <div className='login-container'>
                    <img className='avat' src={`.${info.logo}`} />
                    <h2 className='company'>{info.company}</h2>
                        <div className='demmo'>
                            <ul>
                                <p className=''><BsFillBagCheckFill />  {info.position}</p>
                                <p className=''><GoLocation /> {info.location}</p>
                                <p className=''><FaFileContract /> {info.contract}</p>
                                <p className=''><AiOutlineFieldTime /> {info.postedAt}</p>
                            </ul>
                        </div>
                    <div className='q'>
                        <h5>Key Skills</h5>
                        <div className='skills'>
                            {langAndTools.map((langAndTool) => (
                                <span className='parents-8'> {langAndTool} </span>))}
                        </div>
                    </div>
                    <div >
                        <h1 className='desc'>Description</h1>
                        <p>{info.description}</p>
                    </div>
                    <div>
                        <button className="apply">APPLY</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Detail;