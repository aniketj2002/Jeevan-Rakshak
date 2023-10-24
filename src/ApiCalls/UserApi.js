import axios from "axios";
import { useEffect, useState } from "react";

const UserApi = (token) => {
  const [user, setUser] = useState();
  const [history, setHistory] = useState();

  const getUser = async () => {
    try {
      const res = await axios.get("https://jeevan-rakshak-backend.onrender.com/user/info", {
        headers: {
          Authorization: token,
        },
      });
      console.log("checking from userApi", res.data);
      setUser(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const getHistory = async () => {
    try {
      const res = await axios.get("https://jeevan-rakshak-backend.onrender.com/user/history", {
        headers: {
          Authorization: token,
        },
      });

      setHistory(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      getUser();
      getHistory();
    }
  }, [token]);

  return { user: [user, setUser], history: [history, setHistory] };
};

export default UserApi;
