// SnapShare API — DONE FOR YOU. Do not edit.
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const path = require("path");

const app = express();
const PORT = 3001;
const JWT_SECRET = "snapshare-demo-secret";

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// --- demo users ---
const USERS = [
  { id: 1, name: "Leo", email: "leo@demo.com", password: "password" },
  { id: 2, name: "Mia", email: "mia@demo.com", password: "password" },
];

// POST /auth/login -> { user, accessToken }
app.post("/auth/login", (req, res) => {
  const { email, password } = req.body;
  const found = USERS.find((u) => u.email === email && u.password === password);
  if (!found) return res.status(401).json({ error: "Invalid credentials" });
  const accessToken = jwt.sign({ userId: found.id }, JWT_SECRET, { expiresIn: "1h" });
  res.json({
    user: { id: found.id, name: found.name, email: found.email },
    accessToken,
  });
});

// auth guard
function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "No token" });
  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
}

// multer: save photos to uploads/ with a unique name, max 5 MB, images only
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, "uploads")),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `photo-${Date.now()}${ext}`);
  },
});
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => cb(null, file.mimetype.startsWith("image/")),
});

// POST /api/upload (auth + multer) -> { url }
app.post("/api/upload", verifyToken, upload.single("photo"), (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No photo uploaded" });
  res.status(201).json({ url: `/uploads/${req.file.filename}` });
});

app.listen(PORT, () => console.log(`SnapShare API on http://localhost:${PORT}`));
