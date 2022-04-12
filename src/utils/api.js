import axios from "axios";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.common["Accept"] = "application/json";

const baseUrl = "https://green-thumb-64168.uc.r.appspot.com";

// const handleTokenExpired = (responseData) => {
//   if (responseData.error?.name === "TokenExpiredError") {
//   }
// };

export const login = async (username, password) => {
  try {
    const body = {
      username,
      password,
    };

    const response = await axios({
      url: `${baseUrl}/login`,
      method: "POST",
      data: body,
    });

    console.log("login response", response);

    return response?.data;
  } catch (error) {
    console.log("login error", error.response);
    return error.response.data;
  }
};

export const transfer = async (
  token,
  receipientAccountNo,
  amount,
  description
) => {
  try {
    const body = {
      receipientAccountNo,
      amount: parseInt(amount),
      description,
    };

    const response = await axios({
      url: `${baseUrl}/transfer`,
      method: "POST",
      data: body,
      headers: {
        Authorization: token,
      },
    });

    console.log("transfer response", response);

    return response?.data;
  } catch (error) {
    console.log("transfer error", error.response);
    return error.response.data;
  }
};

export const balance = async (token) => {
  try {
    const response = await axios({
      url: `${baseUrl}/balance`,
      method: "GET",
      headers: {
        Authorization: token,
      },
    });

    console.log("balance response", response);

    return response?.data;
  } catch (error) {
    console.log("balance error", error.response);
    return error.response.data;
  }
};

export const payees = async (token) => {
  try {
    const response = await axios({
      url: `${baseUrl}/payees`,
      method: "GET",
      headers: {
        Authorization: token,
      },
    });

    console.log("payees response", response);

    return response?.data;
  } catch (error) {
    console.log("payees error", error.response);
    return error.response.data;
  }
};

export const transactions = async (token) => {
  try {
    const response = await axios({
      url: `${baseUrl}/transactions`,
      method: "GET",
      headers: {
        Authorization: token,
      },
    });

    console.log("transactions response", response);

    return response?.data;
  } catch (error) {
    console.log("transactions error", error.response);
    return error.response.data;
  }
};

export const register = async (username, password) => {
  try {
    const body = {
      username,
      password,
    };

    const response = await axios({
      url: `${baseUrl}/register`,
      method: "POST",
      data: body,
    });

    console.log("register response", response);

    return response?.data;
  } catch (error) {
    console.log("register error", error.response);
    return error.response.data;
  }
};
