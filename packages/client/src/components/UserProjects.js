import { useState, useEffect } from "react";

import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { FormatDate } from "./FormatDate";
import Projects from "../pages/Projects";

const UserProjects = () => {
  const axios = useAxiosPrivate();

  const auth = useAuth();

  const [userId] = useState(null);

  const [projects, setProjects] = useState();

  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  //gets the users project by their req.id so technically null can be passed and it
  //will still get this particular user projects based on their user id from the req header.
  useEffect(() => {
    const getProjects = async () => {
      const res = await axios
        .get(`/project/user/${userId}`)
        .then((res) => setProjects(res.data.data.projects))
        .catch((err) => {
          console.log(err);
          if (err.response.data.message === "Not authorized.") {
            navigate("/login");
          }
        });
    };

    getProjects();
  }, [axios, userId, navigate]);

  const handleEdit = (id) => {
    navigate(`/projects/edit/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      const deleteProject = await axios.delete(`/project/${id}`);

      setProjects((projects) =>
        projects.filter((project) => project._id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-slate-800 rounded-lg border-4 border-double border-amber-500 p-4">
      <h1 className="text-white text-3xl font-bold mb-4">
        {" "}
        Project Submissions{" "}
      </h1>
      <div>
        <button
          onClick={handleToggleOpen}
          className="bg-amber-500 font-semibold text-pink-800 text-center rounded-sm w-full border-2 border-solid border-amber-800"
        >
          {" "}
          Submit a Project{" "}
        </button>
        {isOpen && (
          <div>
            <Projects setProjects={setProjects} projects={projects} />
          </div>
        )}
      </div>
      <hr className="bg-pink-800 my-4 w-full" />
      <h2 className="text-white font-bold text-2xl mb-4">
        {" "}
        Active Projects:
      </h2>

      {projects &&
        projects.map((project) => (
          <div
            key={project._id}
            className="bg-white rounded shadow-lg shadow-sky-800 p-4 mb-4 "
          >
            <h3 className="text-xl font-semibold text-slate-800">
              Project Name: {project.projectName}
            </h3>
            <ul className="list-disc pl-4 font-light  text-sky-900 leading-loose">
              Project Details:{" "}
              {project.projectDetails &&
                project.projectDetails
                  .split("\n")
                  .map((detail, index) => (
                    <li key={project._id}>{detail}</li>
                  ))}
            </ul>
            <p className=" text-pink-800">
              Mission statement: {project.missionStatement}
            </p>
            <p className=" text-pink-800">
              Company Name: {project.companyName}
            </p>
            <p className=" text-amber-800">
              Deadline: {FormatDate(project.deadlines)}
            </p>
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
