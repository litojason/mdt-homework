import React from "react";

import { Screen as StyledScreen, Content } from "./styles";
import Navbar from "components/Navbar";

const Screen = ({ hasNavbar, children }) => {
  return (
    <StyledScreen>
      {hasNavbar ? (
        <>
          <Navbar />
          <Content>{children}</Content>
        </>
      ) : (
        <Content>{children}</Content>
      )}
    </StyledScreen>
  );
};

export default Screen;
