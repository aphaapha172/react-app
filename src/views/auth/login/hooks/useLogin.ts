import { useState } from "react";
import {
  ERROR,
  IDLE,
  PENDING,
  SUCCESS,
  ApiStatus,
} from "../../../../constants/apiStatus";
import { login } from "../../../../api/authApi";

const useLogin = () => {
  const [result, setResult] = useState<any>();
  const [loginStatus, setLoginStatus] = useState<ApiStatus>(IDLE);

  const initLogin = async (data: any) => {
    setLoginStatus(PENDING);
    const response = await login(data);
  };
  return {
    result,
    loginStatus,
    initLogin,
  };
};
