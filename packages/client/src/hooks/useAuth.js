import { useContext, useDebugValue } from 'react';
import AuthContext from './AuthProvider';

export const useAuth = () => {
  const { auth } = useContext(AuthContext);
  useDebugValue(auth, (auth) =>
    auth?.user ? 'Logged in' : 'Logged Out'
  );
  return useContext(AuthContext);
};
