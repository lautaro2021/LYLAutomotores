import React, { useState, useEffect } from "react";

const fetchData = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  return data;
};

function useFetcher(url: string) {
  const [data, setData] = useState();

  useEffect(() => {
    fetchData(url).then((data) => setData(data));
  }, []);

  return { data };
}

export default useFetcher;
