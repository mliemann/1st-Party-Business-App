import React, { createContext, useReducer, useContext } from "react";
import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  USER_UPDATED
} from "./actions";

const UserContext = createContext();
const { Provider } = UserContext;

const reducer = (state, action) => {
  switch (action.type) {
  case USER_LOGGED_IN:
    return {
      ...state,
      userData: action.userData,
      isLoggedIn: true
    };

  case USER_LOGGED_OUT:
    return {
      ...state,
      userData: null,
      isLoggedIn: false
    };
    
  case USER_UPDATED:
    return {
      ...state,
      userData: action.userData,
      isLoggedIn: true
    };  
  default:
    return state;
  }
};

const UserProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    userData: null,
    isLoggedIn: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { 
    UserProvider, 
    useUserContext,
    USER_LOGGED_IN,
    USER_LOGGED_OUT,
    USER_UPDATED
 };