import React from "react";
import { useAuth } from "../hooks/useAuth";
import { useState, useEffect } from "react";
import UserTickets from "../components/UserTickets";
import UserMessages from "../components/MessagerComponents/UserMessages";
import UserProjects from "../components/UserProjects";

export default function Dashboard(props) {
  const { auth, isLoggedIn } = useAuth();
  const [firstName, setFirstName] = useState(null);

  console.log(firstName);

  useEffect(() => {
    if (auth.user && auth.user.firstName) {
      setFirstName(auth.user.firstName);
    }
  }, [auth]);

  return (
    <div>
      {
        <p className="text-center text-2xl text-sky-900 font-bold tracking-wide">
          Hello, {firstName}
        </p>
      }
      <div id="userTickets">
        <UserTickets />
      </div>

      <div id="userProjects">
        <UserProjects />
      </div>

      <div id="msgBoard">
        <UserMessages />
      </div>
    </div>
  );
}
