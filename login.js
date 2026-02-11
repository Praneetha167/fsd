const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let users = [];

// Register API
app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const userExists = users.find(u => u.username === username);
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  users.push({ username: username, password: password });
  res.status(201).json({ message: "User registered successfully" });
});

// Login API
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({ message: "Login successful", user: username });
});

// Default route
app.get("/", (req, res) => {
  res.json({ message: "Backend Login API is running" });
});

// Start server
app.listen(PORT, () => {
  console.log("Server running on http://localhost:" + PORT);
});
