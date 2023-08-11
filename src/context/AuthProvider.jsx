import { useReducer } from "react";
import { AuthContext } from "./authContext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";

export const AuthProvider = ({ children }) => {
  const initialState = {
    logged: false,
  };
  const [ authState, dispatch ] = useReducer( authReducer, initialState );

  const login = (name='') => {

     const action = {
        type:types.login,
        payload: {
            id:'ABC', 
            name: name
        }
     }  
  }

  return (
  <AuthContext.Provider value={{ 
    ...authState,
    login:login
  }}>
       {children}
  </AuthContext.Provider>);
};
