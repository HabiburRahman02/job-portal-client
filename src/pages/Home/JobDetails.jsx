import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { _id, title, company, company_logo } = jobs;
    return (
        <div className="card bg-base-100 shadow-xl text-center">
            <figure>
                <img
                    className="p-4 w-24"
                    src={company_logo}
                    alt="Shoes" />
            </figure>
            <div className="card-body text-center">
                <h2 className="card-title text-center mx-auto">{title}</h2>
                <p>{company}</p>
                <div className="card-actions justify-center">
                    <Link to={`/jobDetails/${_id}`}>
                        <button className="btn btn-secondary">Apply Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;