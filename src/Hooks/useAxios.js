import React from "react";
import { useState } from "react";
import { v1 as uuid } from "uuid";
import axios from "axios";

const useAxios = (url) => {
  const [data, setData] = useState([]);

  const addData = async () => {
    const response = await axios.get(url);
    setData((data) => [...data, { ...response.data, id: uuid() }]);
  };
  return [data, addData];
};

export default useAxios;
