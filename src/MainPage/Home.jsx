import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Home = () => {
  let username = localStorage.getItem("email");
  console.log(username);

  let AdminHomePage = () => {
    return (
      <>
        <center>
          <h1>hi!!! {username} </h1>
          <h2> Welcome to KIMSHUKA TECHNOLOGIES</h2>
        </center>
      </>
    );
  };

  let UserHomePage = () => {
    return (
      <>
        <center>
          <h1>{username}   Welcome to KIMSHUKA TECHNOLOGIES</h1>
        </center>
      </>
    );
  };

  return (
    <>
      {localStorage.getItem("role") == "admin" ? (
        <AdminHomePage />
      ) : (
        <UserHomePage />
      )}
    </>
  );
};

export default Home;
