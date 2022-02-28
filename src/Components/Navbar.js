import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import logo from "../assets/logo.png";

function Navigator() {
  const { user, logout } = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  let location = useLocation();
  const ignorePaths = ["/login", "/signup"];
  if (!ignorePaths.includes(location.pathname)) {
    return (
      <div>
        <Navbar
          className="navbar-style"
          bg="light"
          variant="light"
          expand="lg"
          sticky="top"
        >
          <Navbar.Brand href="#home">
            <Nav.Link href="/home">
              <span className="logo">
                <img src={logo} alt="" srcset="" />
              </span>
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className=" " id="basic-navbar-nav">
            <Nav className="ml-auto">
              {user ? (
                location.pathname === "/dashboard" ? (
                  <span className="logout" onClick={handleLogout}>
                    Logout
                  </span>
                ) : (
                  <Nav.Link href="/home">Explore</Nav.Link>
                )
              ) : (
                <Nav.Link href="/login">Login</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
  return null;
}

export default Navigator;
