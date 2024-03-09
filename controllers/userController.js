const db = require("../db");

exports.getUsers = async (req, res) => {
  try {
    const [rows] = await db.promise().query("SELECT * FROM users");
    const users = rows.map((row) => row.user_name);

    res.render("users", { users });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
