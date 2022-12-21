import axios from 'axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.get('refresh', {
      //send with cookies
      withCredentials: true,
    });
    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      console.log(JSON.stringify(response.data.token));
      return { ...prev, token: response.data.token };
    });
    return response.data.token;
  };

  return refresh;
};

export default useRefreshToken;
