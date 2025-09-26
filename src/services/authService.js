import axios from "axios";

// Define your API's base URL in one place
const API_URL = "http://localhost:8000/api";

/**
 * Handles the user login request.
 * On success, it stores the token and username.
 */
const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/token/`, {
    username,
    password,
  });

  // If the request is successful and a token is returned
  if (response.data.token) {
    localStorage.setItem("authToken", response.data.token);
    localStorage.setItem("authUser", username);
  }

  return response.data;
};

/**
 * Handles user logout by clearing stored credentials.
 */
const logout = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("authUser");
};

// Export the functions to be used in components
export const authService = {
  login,
  logout,
};