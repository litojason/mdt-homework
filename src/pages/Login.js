import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { login } from "../utils/api";
import { useAuthContext } from "../context/AuthProvider";
import Button from "components/Button";
import Modal from "components/Modal";
import { Form, Input, InputContainer, Label } from "components/Form";
import { Text, TextLink, AuthTitle } from "components/Text";
import Screen from "components/Screen";
import { AuthFooter } from "components/Screen/styles";

const Login = () => {
  const { setToken } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState({
    title: null,
    description: null,
    buttonText: null,
  });

  const handleUsername = (e) => {
    let text = e.target.value;
    setUsername(text);
  };

  const handlePassword = (e) => {
    let text = e.target.value;
    setPassword(text);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await login(username, password);

      if (response.status === "success") {
        setToken(response.token);
        const origin = location.state?.from?.pathname || "/dashboard";
        navigate(origin);
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
        />
      )}
      <Screen>
        <AuthTitle>Welcome</AuthTitle>

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
          </InputContainer>

          <Button type="submit" loading={loading}>
            Login
          </Button>
        </Form>

        <AuthFooter>
          <Text>Do not have an account?</Text>
          <TextLink to="/register">Register</TextLink>
        </AuthFooter>
      </Screen>
    </>
  );
};

export default Login;
