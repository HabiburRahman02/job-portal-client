import axios from "axios";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const JobApply = () => {
    const { id } = useParams()
    const { user } = useAuth();

    const handleJobApplication = e => {
        e.preventDefault()
        const form = e.target;
        const linkedin = form.linkedin.value
        const github = form.github.value
        const resume = form.resume.value
        console.log(linkedin, github, resume);

        const jobApplication = {
            job_id: id,
            applicant_email: user?.email,
            linkedin,
            github,
            resume
        }

        axios.post('http://localhost:5000/job-application', jobApplication)
            .then(data => {
                console.log(data.data);
                if (data.data.insertedId) {
                    alert('job application success')
                }
            })

    }

    return (
        <div className="card bg-base-100 w-full max-w-2xl mx-auto shrink-0 shadow-2xl">
            <form onSubmit={handleJobApplication} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Linkedin</span>
                    </label>
                    <input type="url" name="linkedin" placeholder="Linkedin url" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Github</span>
                    </label>
                    <input type="url" name="github" placeholder="Github url" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Resume</span>
                    </label>
                    <input type="url" name="resume" placeholder="Resume url" className="input input-bordered" required />
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-outline">Apply </button>
                </div>
            </form>
        </div>
    );
};

export default JobApply;