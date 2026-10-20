// Task 3 — Upload UI: validate, upload with FormData, show the photo.
import { useState } from "react";
import { api, API_URL } from "../api/axios";
import { useAuth } from "../auth/AuthContext";

export default function UploadPage() {
  const { user, logout } = useAuth();
  const [photoUrl, setPhotoUrl] = useState(null);
  const [error, setError] = useState("");

  async function handleFile(file) {
    setError("");
    if (!file) return;

    // TODO (Task 3):
    //   1. Validate: the file must be an image.
    //        if (!file.type.startsWith("image/")) { setError("Please choose an image"); return; }
    //   2. Build FormData and append the file under the field name "photo":
    //        const form = new FormData();
    //        form.append("photo", file);
    //   3. Upload it:
    //        const { data } = await api.post("/api/upload", form);
    //   4. Show the uploaded photo:
    //        setPhotoUrl(`${API_URL}${data.url}`);
  }

  return (
    <div className="card">
      <header>
        <span>Hi, {user.name}</span>
        <button onClick={logout}>Log out</button>
      </header>
      <h2>Share a photo</h2>
      <input type="file" onChange={(e) => handleFile(e.target.files[0])} />
      {error && <p className="error">{error}</p>}
      {photoUrl && <img className="photo" src={photoUrl} alt="shared" />}
    </div>
  );
}
