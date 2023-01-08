import React from "react";
import { useAuth } from "../hooks/useAuth";
import { useState, useEffect, Modal } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import UserTickets from "../components/UserTickets";
import UserMessages from "../components/MessagerComponents/UserMessages";
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
    <div className="pl-44 h-screen max-h-screen">
      {
        <h2 className="text-center text-2xl text-sky-900 font-bold tracking-wide p-5">
          Hello, {firstName}
        </h2>
      }
      {/* <div id="msgBoard" className="flex justify-end pr-5 pl-2" >     
         <UserMessages />          
      </div> */}

      <div id="userTickets" className="mt-7 pr-5 pl-2">
        <UserTickets />
      </div>

      <div id="userProjects" className="pr-5 pl-2">
        <UserProjects />
      </div>

    </div>
    </>
  );
}


