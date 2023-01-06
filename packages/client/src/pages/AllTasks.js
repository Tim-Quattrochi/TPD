import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";

function AllTasks() {
  const axios = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();
  const [tasks, setTasks] = useState([]);

  //This file was created to test the protected route.
  //I know this can be done via Postman but I
  //wanted to see localStorage and also AuthProvider values
  //We wouldn't want this as a real route, maybe we can change it to get
  // the user's specific tasks by their id.
  //get the tasks on page load
  useEffect(() => {
    const getAllTasks = async () => {
      try {
        const response = await axios.get("/tasks");
        setTasks(response.data.data.tasks);
      } catch (error) {
        console.log(error);
        navigate("/login", {
          state: { from: location }, //take the user back to the location they were in after log in
          replace: true,
        });
      }
    };

    getAllTasks();

    //if I add the suggested dependencies I get an infinite loop.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // check if the location has a state object with a "from" property
    if (location.state && location.state.from) {
      // navigate back to the "from" pathname
      navigate(location.state.from.pathname, { replace: true });
    }
  }, [location, navigate]);

  return (
    <>
      {tasks && tasks.length > 0 ? (
        tasks.map((task, i) => (
          <li className="list-none border-2 p-2 " key={i}>
            <p className="text-center font-bold">
              Company name: {task.companyName}:{" "}
            </p>
            <p className="text-center mt-2 italic">
              Description: {task.description}
            </p>
            <p className="text-center mt-2 ">Issue: {task.issue}</p>
          </li>
        ))
      ) : (
        <p>No tasks found</p>
      )}
    </>
  );
}

export default AllTasks;
