import React, { useEffect, useState } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

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
    e.preventDefault();
    try {
      await axios
        .patch("/users/update", user)
        .then((res) => console.log(res));
      setSuccess(true);
      setEditable(false);
    } catch (error) {
      console.log(error);
    }
  };

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