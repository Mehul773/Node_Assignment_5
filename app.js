const express = require("express");
const bodyParser = require("body-parser");
const homeRoute = require("./routes/homeRoute");
const userRoute = require("./routes/userRoute");
const createRoute = require("./routes/createRoute");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "views");

app.use("/", homeRoute);
app.use("/users", userRoute);
app.use("/create", createRoute);

app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} http://localhost:3000/`);
});
