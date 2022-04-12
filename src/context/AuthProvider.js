import React, { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { KEY_STORAGE } from "../constants/keyStorage";
import { login } from "../utils/api";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const getToken = () => {
    const token = sessionStorage.getItem(KEY_STORAGE.TOKEN);
    return token;
  };

  const [token, setToken] = useState(getToken());
  const [loading, setLoading] = useState(false);

  const saveToken = (token) => {
    sessionStorage.setItem(KEY_STORAGE.TOKEN, token);
    setToken(token);
  };

  const handleLogin = async (username, password) => {
    try {
      setLoading(true);
      const response = await login(username, password);

      if (response.status === "success") {
        saveToken(response.token);
        const origin = location.state?.from?.pathname || "/dashboard";
        navigate(origin);
        setLoading(false);
      } else {
        alert(response.error);
        setLoading(false);
      }
    } catch (error) {
      alert("Something went wrong, please try again.");
      setLoading(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem(KEY_STORAGE.TOKEN);
    setToken(null);
    // navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken: saveToken,
        onLogin: handleLogin,
        onLogout: handleLogout,
        loading,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;
