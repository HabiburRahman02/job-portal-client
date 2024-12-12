/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const RunningJobCard = ({ job }) => {
    const { _id, title, company, company_logo } = job;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img
                    className="p-4 w-24"
                    src={company_logo}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{company}</p>
                <div className="card-actions justify-end">
                    <Link to={`/jobDetails/${_id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RunningJobCard;