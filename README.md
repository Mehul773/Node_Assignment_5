# Node Assignment 5

This project is a Node.js application that implements a simple user management system. It allows users to be created and viewed through a web interface.

## Features

- Create users: Users can be created by providing a username through a form.
- View users: The application displays a list of all users.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Mehul773/Node_Assignment_5
   ```

2. Navigate to the project directory:

   ```bash
   cd Node_Assignment_5
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Configure the database connection:

1. Open the `db.js` file located in the project root directory.
2. Update the database connection details:

   ```javascript
   const db = mysql.createConnection({
     host: "your-hostname",
     user: "your-username",
     password: "your-password",
     database: "your-database-name",
   });
   ```
   Replace `"your-hostname"`, `"your-username"`, `"your-password"`, and `"your-database-name"` with your actual database connection details.

4. Start the server:

   ```bash
   npm start
   ```

5. Access the application in your web browser at [http://localhost:3000](http://localhost:3000).

## Project Structure

```

└── 📁Node_Assignment_5
    └── .gitignore
    └── app.js
    └── 📁controllers
        └── createController.js
        └── homeController.js
        └── userController.js
    └── db.js
    └── 📁models
        └── userModel.js
    └── package-lock.json
    └── package.json
    └── README.md
    └── 📁routes
        └── createRoute.js
        └── homeRoute.js
        └── userRoute.js
    └── 📁views
        └── 404.ejs
        └── createUser.ejs
        └── home.ejs
        └── home.html
        └── users.ejs

```

- **controllers**: Contains the controllers that handle the application logic.
- **models**: Contains the model definitions for interacting with the database.
- **routes**: Contains the route definitions for routing HTTP requests.
- **views**: Contains the EJS templates for rendering HTML views.

## Technologies Used

- Node.js
- Express.js
- MySQL
- EJS (Embedded JavaScript)
