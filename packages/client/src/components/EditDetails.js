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
    let isMounted = false;

    const getUser = async () => {
      const res = await axios
        .get("/users/me")
        .then((res) => !isMounted && setUser(res.data))
        .catch((err) => !isMounted && console.log(err));
    };
    getUser();

    return () => {
      isMounted = true;
    };
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

      //update only the email, firstname, lastname in the auth.
      //the issue here is, when the user navigates to
      //another protected route, the auth will
      //update from the local storage, overriding this.
      //

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
    <div className='pl-44 h-screen max-h-screen bg-sky-900 overflow-scroll grid place-content-center'>  

    <div className=" mx-auto w-full max-w-xs p-4">

    <h1 className='text-amber-500 bg-sky-900 font-extrabold p-3 text-3xl text-center' > 
        Edit Details
      </h1>



      {success && (
        <div className=" shadow-sm shadow-slate-800 bg-slate-800 bg-opacity-25 text-white text-center font-semibold p-4 rounded mb-4">
          Your details were updated successfully.
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="bg-slate-800 bg-opacity-80 shadow-md shadow-black rounded px-8 pt-6 pb-8 mb-4">
        <label
          className="block text-amber-500 text-md font-semibold mb-2"
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
          className="block text-amber-500 text-md font-semibold mb-2"
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
          className="block text-amber-500 text-md font-semibold mb-2"
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
          className="bg-pink-800 hover:bg-sky-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
    </div>
  );
};

export default EditDetails;
