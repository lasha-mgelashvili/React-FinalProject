import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import TopMovies from "./components/TopMovies";

function App() {
  const [currentPage, setCurrentPage] = useState("login");

  const switchToLogin = () => {
    setCurrentPage("login");
  };

  const switchToRegister = () => {
    setCurrentPage("register");
  };

  return (
    <div className="App">
      {currentPage === "login" && <Login switchToRegister={switchToRegister} />}
      {currentPage === "register" && <Register switchToLogin={switchToLogin} />}
      {currentPage === "topmovies" && <TopMovies />}
    </div>
  );
}

export default App;
