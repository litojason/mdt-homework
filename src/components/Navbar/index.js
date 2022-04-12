import React from "react";
import { useLocation } from "react-router-dom";

import { useAuthContext } from "context/AuthProvider";
import { BackIcon, Nav, Title } from "./styles";
import { TextLink } from "components/Text";

const Navbar = () => {
  const { onLogout } = useAuthContext();
  const location = useLocation();

  return (
    <Nav>
      {location.pathname !== "/dashboard" ? (
        <>
          <BackIcon />
          <Title>{location.pathname === "/transfer" ? "Transfer" : ""}</Title>
        </>
      ) : (
        <div />
      )}

      {location.pathname === "/dashboard" ? (
        <TextLink to="/login" onClick={onLogout}>
          Logout
        </TextLink>
      ) : (
        <div />
      )}
    </Nav>
  );
};

export default Navbar;
