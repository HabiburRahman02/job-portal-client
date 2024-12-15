import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const MyPostJob = () => {
    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);
    console.log(jobs);

    useEffect(() => {
        axios.get(`http://localhost:5000/jobs?email=${user?.email}`)
            .then(data => setJobs(data.data))
    }, [user?.email])

    return (
        <div>
            <h3 className="text-2xl">My posted jobs: {jobs.length}</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Bid_count</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map((job, i) => <tr key={job._id}>
                                <th>{i + 1}</th>
                                <td>{job.title}</td>
                                <td>{job.applicationDeadline}</td>
                                <td>{job.applicationCount}</td>
                                <td>
                                    <Link to={`/view-application/${job._id}`}>
                                        <button className="btn btn-outline">View Application</button>
                                    </Link>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostJob;