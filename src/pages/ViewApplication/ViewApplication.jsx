import axios from "axios";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const ViewApplication = () => {
    const applications = useLoaderData();

    const handleStatus = (e, id) => {
        console.log(e.target.value, id);
        const data = {
            status: e.target.value
        }
        axios.patch(`http://localhost:5000/view-application/${id}`, data)
            .then(data => {
                console.log(data.data);
                if (data.data.modifiedCount) {
                    toast.success(`${e.target.value} this application`, {
                        duration: 1000,
                        position: 'top-right'
                    })
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <h2>View Application: {applications.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applications.map((app, i) => <tr key={app._id}>
                                <th>{i + 1}</th>
                                <td>{app.applicant_email}</td>
                                <td>{app.github}</td>
                                <td>
                                    <select
                                        onChange={(e) => handleStatus(e, app._id)}
                                        defaultValue={app.status || 'Change Status'}
                                        className="select select-bordered select-xs w-full max-w-xs">
                                        <option disabled>Change Status</option>
                                        <option>Interview</option>
                                        <option>Hired</option>
                                        <option>Rejected</option>
                                    </select>
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplication;