import React from "react";
import PropTypes from "prop-types";

import { Button as StyledButton, LoadingSpinner } from "./styles";

const Button = ({ type, onClick, loading, children }) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      loading={loading ? loading.toString() : "false"}
      disabled={loading}
    >
      {loading ? <LoadingSpinner /> : children}
    </StyledButton>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  children: PropTypes.element,
};

export default Button;
