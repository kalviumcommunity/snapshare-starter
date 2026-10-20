// Task 2 — Axios request interceptor.
import axios from "axios";

export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

export const api = axios.create({ baseURL: API_URL });

// The access token lives HERE, in memory (never in localStorage).
let accessToken = null;
export function setAccessToken(token) {
  accessToken = token;
}

// TODO (Task 2): add a REQUEST interceptor on `api`.
//   1. api.interceptors.request.use((config) => { ... })
//   2. If `accessToken` exists, set:
//        config.headers.Authorization = `Bearer ${accessToken}`
//   3. return config;   // required — this IS the outgoing request
