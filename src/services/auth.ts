import api from "./api";

interface Credentials {
  user: string;
  pass: string;
};


interface UserData {
  userData: { 
    id: number;
    name: string;
    user: string;
  };
};

type Token = string;

export function login(credentials: Credentials) {
  return (
    api
      .post<UserData & { token: Token }>('authenticate', credentials)
      .then(res => res.data)
  );
  
};


export const storeToken = (token: Token) => {
  window.localStorage.setItem('token', token);
};

export const getToken = () => {
  return window.localStorage.getItem('token');
};

// export const storeUser = (user: UserData) => {
//   window.localStorage.setItem('user', user);
// };

// export const getUser = () => {
//   return window.localStorage.getItem('token');
// };