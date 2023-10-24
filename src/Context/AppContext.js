import axios from "axios";
import { createContext, useEffect, useState } from "react";
import UserApi from "../ApiCalls/UserApi";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(false);

  const refreshToken = async () => {
    try {
      const res = await axios.get("https://jeevan-rakshak-backend.onrender.com/user/refreshToken");
      setToken(res.data.accessToken);
      setIsLogged(true) ; 

      setTimeout(() => {
        refreshToken();
      }, 10 * 60 * 1000);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    console.log({
      "firstLogin" : firstLogin , 
      "token" : token , 
      "isLogged" : isLogged
      
    });
    if (firstLogin) {
      refreshToken();
    }
  }, [isLogged]);

  const value = {
    token: [token, setToken],
    isLogged : [isLogged , setIsLogged] , 
    userApi: UserApi(token),
    isLoading: [isLoading, setIsLoading],
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
