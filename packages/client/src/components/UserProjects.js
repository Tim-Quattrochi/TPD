import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const UserProjects = () => {
	const axios = useAxiosPrivate();

	const auth = useAuth();

	const [userId] = useState(null);

	const [projects, setProjects] = useState([]);

	const navigate = useNavigate();

	//gets the users project by their req.id so technically null can be passed and it
	//will still get this particular user projects based on their user id from the req header.
	useEffect(() => {
		const getProjects = async () => {
			const res = await axios
				.get(`/project/user/${userId}`)
				.then((res) => setProjects(res.data.data.projects));
		};

		getProjects();
	}, [axios, userId]);

	const handleEdit = (id) => {
		navigate(`/projects/edit/${id}`);
	};

	const handleDelete = async (id) => {
		try {
			const deleteProject = await axios.delete(`/project/${id}`);
			console.log(deleteProject);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="bg-gray-200 p-4">
			{projects &&
				projects.map((project) => (
					<div key={project._id} className="bg-white rounded shadow p-4 mb-4">
						<h3 className="text-xl font-semibold text-slate-800">
							Project Name: {project.projectName}
						</h3>
						<ul className="list-disc pl-4 font-light  text-sky-900 leading-loose">
							Project Details:{" "}
							{project.projectDetails.split("\n").map((detail, index) => (
								<li key={index}>{detail}</li>
							))}
						</ul>
						<p className=" text-pink-800">
							Mission statement: {project.missionStatement}
						</p>
						<p className=" text-pink-800">
							Company Name: {project.companyName}
						</p>
						<p className=" text-amber-800">Deadline: {project.deadlines}</p>
						<button
							className="bg-pink-800 rounded-full px-4 py-2 mx-2 text-white"
							onClick={() => handleEdit(project._id)}
						>
							Edit
						</button>
						<button
							type="button"
							className="bg-red-500 rounded-full px-4 py-2 mx-2 text-white"
							onClick={() => handleDelete(project._id)}
						>
							Delete
						</button>
					</div>
				))}
		</div>
	);
};

export default UserProjects;
