import axios from "axios";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const AddNewJob = () => {
    const { user } = useAuth();

    const handleAddNewJob = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        const { min, max, currency, ...postInfo } = initialData;
        postInfo.salaryRange = { min, max, currency };
        postInfo.requirements = postInfo.requirements.split('\n');
        postInfo.responsibilities = postInfo.responsibilities.split('\n');
        console.log(postInfo);

        axios.post('http://localhost:5000/post-jobs', postInfo)
            .then(data => {
                console.log(data.data);
                if (data.data.insertedId) {
                    toast.success('Post a job')
                }
            })

    }
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <form onSubmit={handleAddNewJob} className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Job Form</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Job Title</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter job title"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Location</label>
                        <input
                            type="text"
                            name="location"
                            placeholder="Enter location"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Job Type</label>
                        <select
                            name="jobType"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                            required
                        >
                            <option value="">Select</option>
                            <option value="Hybrid">Hybrid</option>
                            <option value="Remote">Remote</option>
                            <option value="On-Site">On-Site</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Category</label>
                        <input
                            type="text"
                            name="category"
                            placeholder="Enter job category"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Application Deadline</label>
                        <input
                            type="date"
                            name="applicationDeadline"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Min Salary</label>
                            <input
                                type="number"
                                name="min"
                                placeholder="Min Salary"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Max Salary</label>
                            <input
                                type="number"
                                name="max"
                                placeholder="Max Salary"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Currency</label>

                        <select name="currency" className=" select-bordered w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300">
                            <option disabled selected>Select your currency</option>
                            <option>BDT</option>
                            <option>INR</option>
                            <option>USD</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Company Name</label>
                        <input
                            type="text"
                            name="company"
                            placeholder="Enter company name"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                            required
                        />
                    </div>

                    <div className="col-span-2">
                        <label className="block text-gray-700 font-medium mb-2">Job Description</label>
                        <textarea
                            name="description"
                            rows="4"
                            placeholder="Enter job description"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                            required
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Requirements</label>
                        <textarea
                            name="requirements"
                            rows="3"
                            placeholder="e.g., JavaScript, React"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                            required
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Responsibilities</label>
                        <textarea
                            name="responsibilities"
                            rows="3"
                            placeholder="e.g., Develop, Review Code"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                            required
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">HR Email</label>
                        <input
                            defaultValue={user?.email}
                            type="email"
                            name="hr_email"
                            placeholder="Enter HR email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">HR Name</label>
                        <input
                            defaultValue={user?.displayName}
                            type="text"
                            name="hr_name"
                            placeholder="Enter HR name"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                            required
                        />
                    </div>

                    <div className="col-span-2">
                        <label className="block text-gray-700 font-medium mb-2">Company Logo URL</label>
                        <input
                            type="url"
                            name="company_logo"
                            placeholder="Enter logo URL"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                            required
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition duration-200 mt-6"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddNewJob;