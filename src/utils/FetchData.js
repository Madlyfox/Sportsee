import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const useAxios = (url) => {
  const [data, setData] = useState(null);

  React.useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return data;
};

export default useAxios;
