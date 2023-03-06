import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../api/Auth";
import { getDocs, collection } from "firebase/firestore";

function App() {
  // NAV BAR STATES
  const [showNavColor, setShowNavColor] = useState(false);
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  const [showNavColorThird, setShowNavColorThird] = useState(false);

  let navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassWord] = useState("");

  const userCollections = collection(db, "users");

  let userLogin = async e => {
    e.preventDefault();
    try {
      let userData = await signInWithEmailAndPassword(auth, email, password);
      console.log(userData);
      let data = await getDocs(userCollections);
      // check verify or not
      if (userData.user.emailVerified === true) {
        navigate("/home");
        toast.success("email verified ");
        localStorage.setItem("email", email);
      }
    } catch (error) {
      navigate("/login");
      toast.error("User not yet verified check the email");
    }
  };

  return (
    <>
      <form action="">
        <ToastContainer />
        <MDBContainer fluid>
          <MDBRow className="d-flex justify-content-center align-items-center h-100">
            <MDBCol col="12">
              <MDBCard
                className="bg-dark text-white my-5 mx-auto"
                style={{ borderRadius: "1rem", maxWidth: "400px" }}
              >
                <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">
                    Please enter your login and password!
                  </p>

                  <MDBInput
                    wrapperClass="mb-4 mx-5 w-100"
                    labelClass="text-white"
                    label="Email address"
                    id="formControlLg"
                    type="email"
                    size="lg"
                    onChange={e => {
                      setEmail(e.target.value);
                    }}
                  />
                  <MDBInput
                    wrapperClass="mb-4 mx-5 w-100"
                    labelClass="text-white"
                    label="Password"
                    id="formControlLg"
                    type="password"
                    size="lg"
                    onChange={e => {
                      setPassWord(e.target.value);
                    }}
                  />

                  <p className="small mb-3 pb-lg-2">
                    <a class="text-white-50" href="#!">
                      Forgot password?
                    </a>
                  </p>
                  <MDBBtn
                    outline
                    className="mx-2 px-5"
                    color="white"
                    size="lg"
                    onClick={userLogin}
                  >
                    Login
                  </MDBBtn>

                  <div className="d-flex flex-row mt-3 mb-5">
                    <MDBBtn
                      tag="a"
                      color="none"
                      className="m-3"
                      style={{ color: "white" }}
                    >
                      <MDBIcon fab icon="facebook-f" size="lg" />
                    </MDBBtn>

                    <MDBBtn
                      tag="a"
                      color="none"
                      className="m-3"
                      style={{ color: "white" }}
                    >
                      <MDBIcon fab icon="twitter" size="lg" />
                    </MDBBtn>

                    <MDBBtn
                      tag="a"
                      color="none"
                      className="m-3"
                      style={{ color: "white" }}
                    >
                      <MDBIcon fab icon="google" size="lg" />
                    </MDBBtn>
                  </div>

                  <div>
                    <p className="mb-0">
                      Don't have an account?{" "}
                      <Link to="/signup" class="text-white-50 fw-bold">
                        Sign up
                      </Link>
                    </p>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </form>
    </>
  );
}

export default App;
