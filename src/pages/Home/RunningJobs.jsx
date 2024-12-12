import { useEffect, useState } from "react";
import RunningJobCard from "./RunningJobCard";
import axios from "axios";

const RunningJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/jobs')
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data);
        //     setJobs(data)
        // })
        axios.get('http://localhost:5000/jobs')
            .then(data => {
                console.log(data.data);
                setJobs(data.data)
            })
    }, [])

    return (
        <div className="my-10 mx-12 sm:mx-0">
            <h3 className="text-3xl font-bold">Running jobs: {jobs.length}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    jobs.map(job => <RunningJobCard
                        key={job._id}
                        job={job}
                    ></RunningJobCard>)
                }
            </div>
        </div>
    );
};

export default RunningJobs;