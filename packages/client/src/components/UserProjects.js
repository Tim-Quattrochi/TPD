import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useAuth } from "../hooks/useAuth";

const UserProjects = () => {
  const auth = useAuth();
  const [userId, setuserId] = useState(null);

  const [projects, setProjects] = useState([]);

  const axios = useAxiosPrivate();

  useEffect(() => {
    const getProjects = async () => {
      const res = await axios
        .get(`/project/user/${userId}`)
        .then((res) => setProjects(res.data.data.projects));
    };

    getProjects();
  }, [auth, axios, userId]);

  console.log(projects);
  return (
    <div className="bg-gray-200 p-4">
      {projects.map((project) => (
        <div
          key={project._id}
          className="bg-white rounded shadow p-4 mb-4"
        >
          <h3 className="text-xl font-semibold text-slate-800">
            Project Name: {project.companyName}
          </h3>
          <ul className="list-disc pl-4 font-light  text-sky-900 leading-loose">
            {project.projectDetails
              .split("\n")
              .map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
          </ul>
          <p className=" text-pink-800">
            Mission statement: {project.missionStatement}
          </p>
          <p className=" text-amber-800">
            Deadline: {project.deadlines}
          </p>
        </div>
      ))}
    </div>
  );
};

export default UserProjects;
