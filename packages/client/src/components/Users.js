import useRefreshToken from "../hooks/useRefreshToken";
import axios from "../hooks/useAxios";

const Users = () => {
  const refresh = useRefreshToken();
  return <button onClick={() => refresh()}>Refresh</button>;
};

export default Users;
