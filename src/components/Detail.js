import React,{useState,useEffect} from 'react';
import Home from './Home';
import JobBoardComponent from './JobBoardComponent';
import data from '../assets/data.json'
function Detail(id){
    const [jobs, setjobs] = useState([]);    
    useEffect(() => {
        setjobs(data);
    },[]);
    console.log("props");
    console.log(id);
    // //const props=jobs.data;
    // console.log("Id");
    // console.log(id);
}
export default Detail;