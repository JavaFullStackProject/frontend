import React from "react";
import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:8082/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default Api;
