import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { login, register } from "../utils/api";
import { useAuthContext } from "../context/AuthProvider";
import Button from "components/Button";
import Modal from "components/Modal";
import { Form, Input, InputContainer, Label } from "components/Form";
import { Text, TextLink, AuthTitle } from "components/Text";
import Screen from "components/Screen";
import { AuthFooter } from "components/Screen/styles";

const Register = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState({
    title: null,
    description: null,
    buttonText: null,
    buttonPress: null,
  });

  const handleUsername = (e) => {
    let text = e.target.value;
    setUsername(text);
  };

  const handlePassword = (e) => {
    let text = e.target.value;
    setPassword(text);
  };

  const handleConfirmPassword = (e) => {
    let text = e.target.value;
    setConfirmPassword(text);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username) {
      setModalVisible(true);
      setModalData({
        title: "Failed",
        description: "Username is required.",
        buttonText: "Okay",
      });
      return;
    }

    if (!password) {
      setModalVisible(true);
      setModalData({
        title: "Failed",
        description: "Password is required.",
        buttonText: "Okay",
      });
      return;
    }

    if (password !== confirmPassword) {
      setModalVisible(true);
      setModalData({
        title: "Failed",
        description: "Password is not match.",
        buttonText: "Okay",
      });
      return;
    }

    try {
      setLoading(true);
      const response = await register(username, password);

      if (response.status === "success") {
        setModalVisible(true);
        setModalData({
          title: "Success",
          description: "Successfully register account.",
          buttonText: "Okay",
          buttonPress: () => navigate("/login"),
        });
        setLoading(false);
      } else {
        setModalVisible(true);
        setModalData({
          title: "Failed",
          description: response.error,
          buttonText: "Try Again",
        });
        setLoading(false);
      }
    } catch (error) {
      setModalVisible(true);
      setModalData({
        title: "Failed",
        description: "Something went wrong, please try again.",
        buttonText: "Try Again",
      });
      setLoading(false);
    }
  };

  return (
    <>
      {modalVisible && (
        <Modal
          setModalVisible={setModalVisible}
          title={modalData.title}
          description={modalData.description}
          buttonText={modalData.buttonText}
          buttonPress={modalData.buttonPress}
        />
      )}
      <Screen>
        <AuthTitle>Register</AuthTitle>

        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleUsername}
            />

            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePassword}
            />

            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPassword}
            />
          </InputContainer>

          <Button type="submit" loading={loading}>
            Register
          </Button>
        </Form>

        <AuthFooter>
          <Text>Already have an account?</Text>
          <TextLink to="/login">Login</TextLink>
        </AuthFooter>
      </Screen>
    </>
  );
};

export default Register;
