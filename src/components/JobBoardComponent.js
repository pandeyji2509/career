//exported to /pages job not aap.js

import React, {useState,useEffect} from 'react';
import './jobBoardComponent.css';
import { 
    BrowserRouter as Router,
    Routes,
    Route,Link } from 'react-router-dom';
import Detail from './Detail/Detail';
import {TbHandClick} from 'react-icons/tb';
import {MdOutlineAdsClick} from 'react-icons/md'
const JobBoardComponent = ({ job: {
    id, 
    company,
    logo,
    isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools
}
 }) => {

    const[show,setShow]=useState(false);

    const ShowName=()=>{
        if(show===true){
            setShow(false);
        }
        else{
            setShow(true);
        }
} 
const langAndTools=[];

if(languages){
    langAndTools.push(...languages);
}
if(tools){
    langAndTools.push(...tools);
}
// function handleClick(id){
//     console.log("namaste");
//     console.log(id);
// }
    return(
    <div className='parents-1'>
        <div>
            <img className="lng" src={logo} alt={company} />
        </div>
        <div className='parents-2'>
            <h3 className='parents-3'>{company}</h3>
            <h2 className='parents-4'>{position}</h2>
            <p className='parents-5'>
                {postedAt} . {contract} . {location}
            </p> 
           
            <div className='parents-7'> 
                {langAndTools.map((langAndTool)=>(
                <span className='parents-8'> {langAndTool} </span>))}
            </div>
            <ul>
            <li className='expo'>           
                <Link className='explore'  to={`/Detail/${id}`}>Explore More</Link>
            </li> 
            </ul> 
        </div> 
    </div>
   );
};

export default JobBoardComponent;