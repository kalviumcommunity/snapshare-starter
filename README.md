# SnapShare — starter

A tiny app: log in, then upload a photo to share. The **Express server is done
for you**. You finish **three files** in the React client.

## Setup (do this before you start)

```bash
# Terminal 1 — API
cd server && npm install && npm start        # http://localhost:3001

# Terminal 2 — React client
cd client && npm install && cp .env.example .env && npm run dev   # http://localhost:5173
```

Log in with **leo@demo.com / password** or **mia@demo.com / password**.

## Files you edit (look for `// TODO`)

1. `client/src/auth/AuthContext.jsx` — Task 1 (login/logout, token in memory)
2. `client/src/api/axios.js` — Task 2 (request interceptor)
3. `client/src/pages/UploadPage.jsx` — Task 3 (upload UI)

Do **not** touch the `server/` folder or any other client file.

## Submit

Delete both `node_modules` folders, add a `RESULT.txt`, and ZIP the project.
