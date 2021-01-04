import React, { createContext, useState } from 'react';
import * as auth from '../services/auth';
import api from '../services/api';

interface Credentials {
  user: string;
  pass: string;
};

interface AuthContextData {
  signed: boolean;
  userData: Object | null;
  login(credentials: Credentials): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = (props: { children: JSX.Element }) => {
  const [userData, setUserData] = useState<Object | null>(null);

  async function login(credentials: Credentials) {
    const response = await auth.login(credentials);
    console.log(response);
    auth.storeToken(response.token);
    api.defaults.headers.authorization = `Bearer ${response.token}`;

    setUserData(response.userData);

    console.log(setUserData);

    console.log("Login efetuado com sucesso, " + userData);
  };


  return (
    <AuthContext.Provider value={{ signed: !!userData, userData, login }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;