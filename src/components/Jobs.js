import React ,{useEffect,useState}from 'react';
import JobBoardComponent from './JobBoardComponent';
import data from '../assets/data.json';
function Jobs(){
    const [jobs, setjobs] = useState([]);
    //console.log(data)
    useEffect(() => {
        setjobs(data);
    }, []);
    return (
	<div>{
        jobs.length === 0 ? (
            <p>Jobs are fetching.....</p>
        ) : (
            jobs.map((job) =>
                <JobBoardComponent job={job} key={job.id} />)
            )
        }
	</div>
    );
};
export default Jobs;
