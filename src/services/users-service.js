import api from "src/http/index";

const registrationService = async (login, password) => {
  const response = await api.post("/users/registration", {
    login,
    password,
  });

  return response;
};

const loginService = async (login, password) => {
  const response = await api.post("/users/login", {
    login,
    password,
  });

  return response;
};

const logoutService = async () => {
  const response = await api.get("/users/logout");

  return response;
};

export { registrationService, loginService, logoutService };