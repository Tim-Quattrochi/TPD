import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

export default function Projects() {
  const initialValues = {
    companyName: "",
    companyEmail: "",
    projectDetails: "",
    missionStatement: "",
    deadlines: "",
  };

  const [formData, setFormData] = useState(initialValues);
  const { auth } = useAuth();
  const axios = useAxiosPrivate();

  console.log(auth);

  const handleSubmitProject = async (e) => {
    e.preventDefault();

    await axios
      .post("/project", formData)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full max-w-sm mx-auto align-middle">
      <form
        className="bg-slate-800 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmitProject}
      >
        <div className="mb-4">
          <label
            className="block text-amber-500 text-sm font-middle mb-2"
            for="username"
          >
            Company Name
          </label>
          <input
            className="w-full text-sky-900 border-gray-300 rounded-lg shadow-sm focus:border-pink-800 focus:ring-sky-900"
            id="companyName"
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-amber-500 text-sm font-middle mb-2"
            for="password"
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
            htmlFor="company-size"
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
            for="password"
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
            for="password"
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
