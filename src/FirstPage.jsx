import React from "react";
import { useState } from "react";
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
  MDBCarouselInner,
  MDBCarouselElement,
} from "mdb-react-ui-kit";

import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FirstPage = () => {
  const [showNavColor, setShowNavColor] = useState(false);
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  const [showNavColorThird, setShowNavColorThird] = useState(false);

  let navigate = useNavigate();

  return (
    <>
      <div>
        <MDBNavbar expand="lg" light style={{ backgroundColor: "#e3f2fd" }}>
          <MDBContainer fluid>
          
            <MDBNavbarToggler
              type="button"
              data-target="#navbarColor02"
              aria-controls="navbarColor02"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShowNavColorThird(!showNavColorThird)}
            >
              <MDBIcon icon="bars" fas />
            </MDBNavbarToggler>
            <MDBCollapse show={showNavColorThird} navbar>
              <MDBNavbarNav className="me-auto mb-2 mb-lg-0">
                <MDBNavbarItem className="active">
                  <MDBNavbarLink aria-current="page" href="#">
                    Home
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href="#">Features</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href="#">Pricing</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href="#">About</MDBNavbarLink>
                </MDBNavbarItem>
              </MDBNavbarNav>
            </MDBCollapse>
            <MDBBtn
              className="me-1"
              color="warning"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign up
            </MDBBtn>
            <MDBBtn
              color="info"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </MDBBtn>
          </MDBContainer>
        </MDBNavbar>
      </div>
      <div>
        
      </div>
    </>
  );
};

export default FirstPage;
