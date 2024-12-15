import { useLoaderData } from "react-router-dom";

const ViewApplication = () => {
    const applications = useLoaderData();
    console.log(applications);
    return (
        <div>
            <h2>View Application: {applications.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applications.map((app, i) => <tr key={app._id}>
                                <th>{i + 1}</th>
                                <td>{app.email}</td>
                                <td>{app.github}</td>
                                <td>Blue</td>
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