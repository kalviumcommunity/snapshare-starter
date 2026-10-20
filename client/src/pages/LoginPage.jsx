// Login page — DONE FOR YOU. Do not edit.
import { useState } from "react";
import { useAuth } from "../auth/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState("leo@demo.com");
  const [password, setPassword] = useState("password");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
    } catch {
      setError("Login failed. Check your email and password.");
    }
  }

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2>Log in</h2>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Log in</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}
