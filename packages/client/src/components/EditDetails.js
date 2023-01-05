import React, { useEffect, useState, useContext } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import AuthContext from "../hooks/useAuthProvider";
import LoadingSpinner from "./LoadingSpinner";

const EditDetails = (props) => {
  const initialValues = {
    email: "",
    firstName: "",
    lastName: "",
  };
  const axios = useAxiosPrivate();
  const [user, setUser] = useState(initialValues);
  const [success, setSuccess] = useState(false);
  const [editable, setEditable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { setAuth, auth } = useContext(AuthContext);

  useEffect(() => {
    const getUser = async () => {
      const res = await axios
        .get("/users/me")
        .then((res) => setUser(res.data))
        .catch((err) => console.log(err));
    };
    getUser();
  }, [axios]);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const updatedUser = await axios.patch("/users/update", user);

      const { email, firstName, lastName, userName, _id } =
        updatedUser.data;

      const updatedAuth = {
        ...auth,
      };

      //update only the email, firstname, lastname in the auth.
      //the issue here is, when the user navigates to
      //another protected route, the auth will
      //update from the local storage, overriding this.
      //
      // updatedAuth.user.email = user.email;
      // updatedAuth.user.firstName = user.firstName;
      // updatedAuth.user.lastName = user.lastName;
      console.log(email);
      console.log(updatedUser);
      setAuth({ email, firstName, lastName, userName, _id });

      localStorage.setItem(
        "user",
        JSON.stringify({
          email: email,
          firstName: firstName,
          lastName: lastName,
          id: _id,
        })
      );

      setSuccess(true);
      setEditable(false);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="mx-auto w-full max-w-xs p-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">
        Edit Details
      </h1>
      {success && (
        <div className="bg-slate-800 text-pink-800 p-4 rounded mb-4">
          Your details were updated successfully.
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          readOnly={!editable}
        />
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="firstName"
        >
          First Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="firstName"
          name="firstName"
          value={user.firstName}
          onChange={handleChange}
          readOnly={!editable}
        />
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="lastName"
        >
          Last Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="lastName"
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
          readOnly={!editable}
        />
        <button
          className="bg-slate-800 hover:bg-sky-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Update
        </button>
        <button
          className="bg-sky-800 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-5"
          type="button"
          onClick={() => setEditable((editable) => !editable)}
        >
          Edit
        </button>
      </form>
    </div>
  );
};

export default EditDetails;
