// Task 1 — AuthContext: keep the user and token (in memory).
import { createContext, useContext, useState } from "react";
import { api, setAccessToken } from "../api/axios";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  async function login(email, password) {
    // TODO (Task 1):
    //   1. const { data } = await api.post("/auth/login", { email, password });
    //   2. setAccessToken(data.accessToken);   // store token IN MEMORY (no localStorage!)
    //   3. setUser(data.user);
    //   4. return data.user;
  }

  function logout() {
    // TODO (Task 1): clear the user and the token.
    //   setUser(null);
    //   setAccessToken(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
