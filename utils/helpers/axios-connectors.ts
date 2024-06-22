"use client";

import axios from "axios";
import { useSelector } from "react-redux";

export const BASE_URL = "http://localhost:4790/aurora/lms/api/v1";

// Public Request
export const PublicRequest = axios.create({
  baseURL: BASE_URL,
  auth: {
    username: "pass",
    password: "lmsauthpassapplication",
  },
});

// New
export const CreateAxiosInstance = (accesstoken: string) => {
  return axios.create({
    baseURL: BASE_URL,
    auth: {
      username: "pass",
      password: "lmsauthpassapplication",
    },
    headers: {
      accesstoken: accesstoken,
    },
  });
};