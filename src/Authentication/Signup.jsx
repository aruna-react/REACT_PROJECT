import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../api/Auth";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRadio,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  CustomParameters,
} from "firebase/auth";
import { auth } from "../api/Auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function App() {
  let [userName, setUserName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassWord] = useState("");
  let [role, setRole] = useState("");
  let [toggle, setToggle] = useState(true);
  let [passWordShow, setPassWordShow] = useState(false);
  let navigate = useNavigate();

  const userCollections = collection(db, "users");

  let EyeIcon = () => {
    setToggle(!toggle);
    setPassWordShow(!passWordShow);
  };

  let handleData = async e => {
    e.preventDefault();
    try {
      let userData = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      sendEmailVerification(userData.user);
      let confirmMail = `The verification mail has been sent to ${email} please verify`;
      toast.success(confirmMail);
      navigate("/login");
      await addDoc(userCollections, { name: userName, role: role });
    } catch (error) {
      console.log(error.message);
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
                  <h2 className="fw-bold mb-2 text-uppercase">SignUp Page !</h2>
                  <p className="text-white-50 mb-5">
                    Please create your account here!
                  </p>

                  <MDBInput
                    wrapperClass="mb-4 mx-5 w-100"
                    labelClass="text-white"
                    label="User Name"
                    id="formControlLg"
                    type="text"
                    size="lg"
                    onChange={e => {
                      setUserName(e.target.value);
                    }}
                    autoComplete="off"
                  />

                  <MDBInput
                    wrapperClass="mb-4 mx-5 w-100"
                    labelClass="text-white"
                    label="Email address"
                    id="formControlLg"
                    name="email"
                    type="email"
                    size="lg"
                    autoComplete="off"
                    onChange={e => {
                      setEmail(e.target.value);
                    }}
                  />
                  <MDBInput
                    wrapperClass="mb-4 mx-5 w-100"
                    labelClass="text-white"
                    label="Password"
                    id="formControlLg"
                    type={passWordShow === true ? "text" : "password"}
                    // value={password}
                    size="lg"
                    onChange={e => {
                      setPassWord(e.target.value);
                    }}
                    autoComplete="off"
                  />
                  <span
                    onClick={EyeIcon}
                    style={{
                      position: "absolute",
                      margin: "265px",
                      left: "60px",
                    }}
                  >
                    {toggle !== false ? <FaEyeSlash /> : <FaEye />}
                  </span>
                  <div
                    style={{
                      display: "flex",
                      width: "60%",
                      justifyContent: "space-around",
                    }}
                  >
                    <MDBRadio
                      name="role"
                      id="inlineRadio1"
                      value="admin"
                      label="ADMIN"
                      onChange={e => {
                        setRole(e.target.value);
                      }}
                    />

                    <MDBRadio
                      name="role"
                      id="inlineRadio2"
                      value="user"
                      label="USER"
                      onChange={e => {
                        setRole(e.target.value);
                      }}
                    />
                  </div>
                  <br />
                  <MDBBtn
                    outline
                    className="mx-2 px-5"
                    color="white"
                    size="lg"
                    onClick={handleData}
                  >
                    SIGNUP
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
                      Already have an account?{" "}
                      <Link to="/login" class="text-white-50 fw-bold">
                        Login here !
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
