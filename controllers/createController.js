const db = require("../db");

exports.getCreatePage = (req, res) => {
  res.render("createUser", { heading: "Create users" });
};

exports.createUser = async (req, res) => {
  const { userName } = req.body;
  try {
    await db
      .promise()
      .query("INSERT INTO users (user_name) VALUES (?)", [userName]);
    res.redirect("/users");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
