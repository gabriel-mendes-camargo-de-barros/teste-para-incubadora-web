import React, { createContext, useState } from 'react';
import * as auth from '../services/auth';
import api from '../services/api';
import Routes from '../routes/index.routes';

interface Credentials {
  user: string;
  pass: string;
};

interface AuthContextData {
  signed: boolean;
  userData: {
    id: number;
    name: string;
    user: string;
  } | null;
  login(credentials: Credentials): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = (props: { children: JSX.Element }) => {
  const [userData, setUserData] = useState<{
    id: number;
    name: string;
    user: string;
  } | null>(null);

  async function login(credentials: Credentials) {
    const response = await auth.login(credentials);
    
    auth.storeToken(response.token);
    api.defaults.headers.authorization = `Bearer ${response.token}`;

    setUserData(response.userData);

  };

  return (
    <AuthContext.Provider value={{ signed: !!userData, userData, login }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;