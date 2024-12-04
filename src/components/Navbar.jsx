import React, { useContext } from "react";
import { quizContext } from "../context/quizContext";

const Navbar = () => {
  const { user } = useContext(quizContext);

  return (
    <div className="navbar">
      <div className="navbar-title">
        <h1>Quizzer</h1>
      </div>
      <div className="navbar-user">
        <p>{user.name}</p>
        <p>Points: {user.points}</p>
      </div>
    </div>
  );
};

export default Navbar;
