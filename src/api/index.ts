import axios from "axios";

const API_URL = "https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org";
const API = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export {
  API_URL,
  API,
};
