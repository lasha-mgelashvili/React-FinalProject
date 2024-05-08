import React, { useEffect, useState } from "react";

const TopMovies = () => {
  const [movies, setMovies] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://imdb-top-100-movies.p.rapidapi.com/";
         console.log(url);
         console.log("alalalal");
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "9470022ce9mshd575d39f35209ccp11fe43jsnfe7776b25b5d",
          "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
          ...(user && { Authorization: `Bearer ${user.token}` }),
        },
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setMovies(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [user]); 
  return (
    <div>
      <h1>Top 100 Movies</h1>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TopMovies;
