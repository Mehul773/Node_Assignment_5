const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs").promises;
const mysql = require("mysql2");

const usersRoute = require("./routes/usersRoute");
const createUserRoute = require("./routes/createUserRoute");

const app = express();
const PORT = 3000;

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Create a connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "node_assignment_5",
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL Connected...");
});

app.set("view engine", "ejs");
app.set("views", "views");

// Create users
app.get("/", createUserRoute);

// Display Users
app.get("/users", usersRoute);

// Add route (for adding a user)
app.post("/add", async (req, res) => {
  const { userName } = req.body;
  try {
    // Append new user to file
    await fs.appendFile("users.txt", `${userName}\n`);
    // Redirect to users page
    res.redirect("/users");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} open http://localhost:3000/`);
});
