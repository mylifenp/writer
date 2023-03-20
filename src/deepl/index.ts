import axios from "axios";
import { DEEPL_API_KEY, DEEPL_API_URL } from "../config";

const deepl_api = axios.create({
  baseURL: DEEPL_API_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": "writer/0.0.1",
    Authorization: `DeepL-Auth-Key ${DEEPL_API_KEY}`,
  },
});

export { deepl_api };
