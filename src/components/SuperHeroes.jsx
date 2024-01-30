import axios from "axios";
import React, { useEffect, useState } from "react";

const SuperHeroes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/superheroes")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      <h2>Super heroes page</h2>
      {data.map((hero) => (
        <div key={hero.name}>{hero.name}</div>
      ))}
    </div>
  );
};

export default SuperHeroes;
