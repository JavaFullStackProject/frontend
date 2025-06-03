// src/services/amadeusApi.js
import axios from "axios";

let token = null;

export const getAmadeusToken = async () => {
  if (token) return token;


  const res = await axios.post("https://test.api.amadeus.com/v1/security/oauth2/token", 
  new URLSearchParams({
    grant_type: "client_credentials",
    client_id,
    client_secret,
  }), {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  }
);


  token = res.data.access_token;
  return token;
};
