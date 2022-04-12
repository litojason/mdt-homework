import React from "react";
import PropTypes from "prop-types";

import { Background, Container, Description, Title } from "./styles";
import Button from "components/Button";

const Modal = ({
  title,
  description,
  setModalVisible,
  cancelable,
  buttonText,
  buttonPress = null,
}) => {
  return (
    <Background onClick={() => (cancelable ? setModalVisible(false) : null)}>
      <Container>
        <Title>{title}</Title>

        <Description>{description}</Description>

        <Button
          onClick={() => {
            setModalVisible(false);
            if (buttonPress) buttonPress();
          }}
        >
          {buttonText}
        </Button>
      </Container>
    </Background>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  setModalVisible: PropTypes.func,
  cancelable: PropTypes.bool,
  buttonText: PropTypes.string,
  buttonPress: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

export default Modal;
