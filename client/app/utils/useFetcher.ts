import React, { useState, useEffect } from "react";

const fetchData = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  return data;
};

function useFetcher() {
  const url =
    "http://localhost:1337/api/homes?populate[hero][populate][0]=background&populate[exclusivos][populate][0]=carrusel&populate[exclusivos][populate][1]=carrusel.imagenes&populate[usados][populate][0]=carrusel&populate[usados][populate][1]=carrusel.imagenes";

  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData(url)
      .then((data) => setData(data.data[0].attributes))
      .finally(() => setIsLoading(false));
  }, []);

  return { data, isLoading };
}

export default useFetcher;
