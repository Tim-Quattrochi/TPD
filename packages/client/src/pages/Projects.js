import { useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import { useAuth } from "../hooks/useAuth";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const { auth } = useAuth();

  const initialValues = {
    projectName: "",
    companyName: "",
    companyEmail: "",
    projectDetails: "",
    missionStatement: "",
    deadlines: "",
  };

  const [formData, setFormData] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const axios = useAxiosPrivate();

  const userId = auth.id;

  const handleSubmitProject = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await axios.post("/project", formData);
      console.log(response);
      const projectId = response.data.data.project._id;
      console.log(projectId);
      // navigate("/dashboard");
      navigate(`/projects/${projectId}`);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="w-full max-w-sm mx-auto align-middle">
      <form
        className="bg-slate-800 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmitProject}
      >
        <div className="mb-4">
          <label
            className="block text-amber-500 text-sm font-middle mb-2"
            htmlFor="projectName"
          >
            Project Name
          </label>
          <input
            className="w-full text-sky-900 border-gray-300 rounded-lg shadow-sm focus:border-pink-800 focus:ring-sky-900"
            id="projectName"
            type="text"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-amber-500 text-sm font-middle mb-2"
            htmlFor="companyName"
          >
            Company Name:
          </label>
          <input
            className="w-full text-sky-900 border-gray-300 rounded-lg shadow-sm focus:border-pink-800 focus:ring-sky-900"
            id="companyName"
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="optional"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-amber-500 text-sm font-middle mb-2"
            htmlFor="companyEmail"
          >
            Company Email
          </label>
          <input
            className="w-full border-gray-300 rounded-lg shadow-sm focus:border-sky-900 focus:ring-sky-900"
            id="companyEmail"
            type="email"
            name="companyEmail"
            value={formData.companyEmail}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="missionStatement"
            className="font-middle mb-2 block text-sm  text-amber-500"
          >
            What is the mission statement?
          </label>
          <input
            name="missionStatement"
            className="w-full border-gray-300 rounded-lg shadow-sm focus:border-sky-900 focus:ring-sky-900"
            type="text"
            value={formData.missionStatement}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-amber-500 text-sm font-middle mb-2"
            htmlFor="deadlines"
          >
            What is the deadline?
          </label>
          <input
            className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            id="deadlines"
            type="date"
            name="deadlines"
            value={formData.deadlines}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-amber-500 text-sm font-middle mb-2"
            htmlFor="projectDetails"
          >
            Outline the Project details
          </label>
          <textarea
            className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            id="projectDetails"
            type="text"
            name="projectDetails"
            value={formData.projectDetails}
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-sky-900 hover:bg-slate-800 text-pink-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto"
            type="submit"
          >
            Submit Proposal
          </button>
        </div>
      </form>
    </div>
  );
}
