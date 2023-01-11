import React from "react";
import { useAuth } from "../hooks/useAuth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import UserTickets from "../components/UserTickets";
import UserProjects from "../components/UserProjects";

export default function Dashboard(props) {
  const { auth } = useAuth();
  const [firstName, setFirstName] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const axios = useAxiosPrivate();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.firstName) {
      setFirstName(auth.firstName || auth.user.firstName);
    }
  }, [auth]);

  const handleEdit = async (id, data) => {
    try {
      await axios.patch(`/project/${id}`, data);
      navigate(`/dashboard`);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="pl-44 h-screen max-h-screen flex flex-col bg-sky-900 overflow-scroll ml-2">
        <h2 className="text-center text-2xl text-amber-500 font-bold tracking-wide p-5">
          Welcome, {firstName}
        </h2>

        <div className="flex flex-col md:flex-row col-span-9">
          <div id="userTickets" className=" pr-4 w-96 flex-1 p-4">
            <UserTickets />
          </div>

          <div
            id="userProjects"
            className=" bg-transparent w-96 flex-1 p-4"
          >
            <UserProjects />
          </div>
        </div>
      </div>
    </>
  );
}
