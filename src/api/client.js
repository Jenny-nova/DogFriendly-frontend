import axios from "axios";

// Use the env var set in Vercel (and a localhost fallback for dev)
const baseURL = process.env.REACT_APP_API_URL || "http://127.0.0.1:8000";

export const api = axios.create({
  baseURL
});