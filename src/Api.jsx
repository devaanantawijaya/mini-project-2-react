import axios from "axios";
import { useState } from "react";

export const ApiUsers = () => {
  const [users, setUsers] = useState([]);
  const [skip, setSkip] = useState(1);
  const [totalPages, setTotalPages] = useState({});

  const getUsers = async () => {
    try {
      const res = await axios.get(`https://reqres.in/api/users?page=${skip}`);
      console.log("res users:", res.data.data);
      setUsers(res.data.data);
      setTotalPages(res.data);
    } catch (error) {
      console.log("error:", error);
    }
  };

  return { users, getUsers, skip, setSkip, totalPages };
};
