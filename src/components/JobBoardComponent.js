//exported to /pages job not aap.js

import React, {useState,useEffect} from 'react';
import './jobBoardComponent.css';
//import data from '../assets/data.json';

// function JobBoardComponent(){
//     const [jobs,setjobs]=useState(data);
//     useEffect(()=>{
//         setjobs(data);
//     },[]);
//     jobs.map((job)=>{
//         //console.log(job.logo);
//     // return(
//     //     <div>
//     //       <div className='flex bg-white shadow-lg m-4 p-4'>
//     //     <div>
//     //         <img src="" alt={job.company} />
//     //     </div>
//     //     <div className='ml-4'>
//     //         <h3 className='font-bold text-teal-500'>{job.company}</h3>
//     //         <h2 className='font-bold text-xl'>{job.position}</h2>
//     //         <p  className='text-gray-700'>
//     //             {job.postedAt} . {job.contract} . {job.location}
//     //         </p>
//     //     </div>
//     //     <div>
//     //     </div>
//     // </div>
//     //     </div>
//     // );
//   })
// }
import { 
    BrowserRouter as Router,
    Routes,
    Route,Link } from 'react-router-dom';
import Detail from './Detail';
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
function handleClick(id){
    console.log("namaste");
    console.log(id);
    <Detail id={id} />    
}
    return(
    <div className='parents-1'>
        <div>
            <img src={logo} alt={company} />
        </div>
        <div className='parents-2'>
            <h3 className='parents-3'>{company}</h3>
            <h2 className='parents-4'>{position}</h2>
            <p className='parents-5'>
                {postedAt} . {contract} . {location}
            </p>   
            <button className="" onClick={ShowName}>click</button>
            {
                show && ( <div className='parents-7'> 
        {langAndTools
            ? langAndTools.map((langAndTool)=>(
                <span className='parents-8'> {langAndTool} </span>
            ))
            :''}
            <li  >
            onClick={handleClick({id})}
                <Link to={"/Detail"}>Detail</Link>
            </li>
        </div>
        )
            }
            
        </div> 
    </div>
   );
};

export default JobBoardComponent;