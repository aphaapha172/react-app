import { URLS } from "../constants/urls";
import { User } from "../types/user.types";
import api from "./api";

export const login = (data: any) => {
  return api.post<any>(URLS.login, data);
};
export const user = () => {
  return api.get<User>(URLS.user);
};
