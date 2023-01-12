import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useParams } from "react-router-dom";

function ViewProject() {
  const axios = useAxiosPrivate();
  const { projectId } = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    const getProject = async () => {
      const { data } = await axios.get(`/project/${projectId}`);
      setProject(data.data.project);
    };
    getProject();
  }, [projectId]);

    console.log(project)

  return (
    <div className="w-full max-w-sm mx-auto align-middle">
      <h1 className="text-2xl font-bold text-amber-500">
        Project Name: {project.projectName}
      </h1>
      <p className="text-gray-700">
        Company Name: {project.companyName}
      </p>
      <p className="text-gray-700">
        Company Email: {project.companyEmail}
      </p>
      <p className="text-gray-700">
        Mission Statement: {project.missionStatement}
      </p>
      <p className="text-gray-700">Deadline: {project.deadlines}</p>
    </div>
  );
}

export default ViewProject;
