import "./App.css";
import Login from "./Authentication/Login.jsx";
import Signup from "./Authentication/Signup.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./MainPage/Home";
import PageNotFound from "./Authentication/PageNotFound";
import FirstPage from "./FirstPage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
