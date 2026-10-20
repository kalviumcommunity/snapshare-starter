// App shell — DONE FOR YOU. Do not edit.
// Shows the login page when logged out, and the upload page when logged in.
import { useAuth } from "./auth/AuthContext";
import LoginPage from "./pages/LoginPage";
import UploadPage from "./pages/UploadPage";

export default function App() {
  const { user } = useAuth();
  return (
    <main className="app">
      <h1>SnapShare</h1>
      {user ? <UploadPage /> : <LoginPage />}
    </main>
  );
}
