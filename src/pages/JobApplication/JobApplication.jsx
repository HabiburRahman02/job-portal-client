import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const JobApplication = () => {
    const { user } = useAuth();
    const [application, setApplication] = useState();
    // console.log(application);
    useEffect(() => {
        axios.get(`http://localhost:5000/job-application?email=${user?.email}`)
            .then(data => setApplication(data.data))
    }, [user?.email])

    return (
        <div>
            <h4 className="text-2xl font-bold">Job Application: {application?.length}</h4>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Company</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            application?.map((app, i) => <tr key={app._id}>
                                <th>{i + 1}</th>
                                <td>{app.title}</td>
                                <td>{app.company}</td>
                                <td>blue</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default JobApplication;