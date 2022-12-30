import React from "react";
import { useAuth } from "../hooks/useAuth";
import { useState, useEffect } from "react";

import UserTickets from "../components/UserTickets";
import UserMessages from "../components/MessagerComponents/UserMessages";
import UserInfo from "../components/UserInfo";
import UserProjects from "../components/UserProjects";

export default function Dashboard(props) {
  const { auth, isLoggedIn } = useAuth();

  console.log(isLoggedIn);

  return (
    <div>
      <div id="userInfoDropDown">
        <UserInfo />
      </div>

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
