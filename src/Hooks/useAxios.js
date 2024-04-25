import axios from "axios";
import { useState } from "react";
import { v1 as uuid } from "uuid";

const useAxios = (url) => {
  const [data, setData] = useState([]);

  const addData = async (pathParam = null) => {
    const apiUrl = pathParam ? `${url}/${pathParam}` : url;

    const response = await axios.get(apiUrl);
    setData((data) => [...data, { ...response.data, id: uuid() }]);
  };

  return [data, addData];
};

export default useAxios;
