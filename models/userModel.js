const db = require("../db");

// Execute SQL query to create users table if it doesn't exist
const createUsersTable = () => {
  db.query(
    `
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_name VARCHAR(255) NOT NULL
      )
    `,
    (err, result) => {
      if (err) {
        console.error("Error creating users table:", err);
      } else {
        console.log("Users table created successfully");
      }
    }
  );
};

module.exports = {
  createUsersTable,
};
