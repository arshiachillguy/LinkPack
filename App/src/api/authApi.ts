import apiClient from "./apiClient";

export const login = (username: string, password: string) => {
  return apiClient.post("/login", { username, password });
};

export const register = (data: any) => {
  return apiClient.post("/register", data);
};
