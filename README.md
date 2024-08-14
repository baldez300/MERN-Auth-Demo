# MERN Authentication and Localization App

This project is a full-stack web application built with the MERN stack (MongoDB, Express.js, React.js, and Node.js). It features user authentication (login and registration + landing page), password hashing, JSON Web Tokens (JWT) for secure authentication, and localization support for multiple languages (English, Finnish, Japanese, and Arabic). Swagger is also integrated to document the API endpoints.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Backend Setup](#backend-setup)
  - [1. Project Initialization](#1-project-initialization)
  - [2. Connecting to MongoDB](#2-connecting-to-mongodb)
  - [3. Running the Server](#3-running-the-server)
- [Swagger Setup](#swagger-setup)
- [Frontend Setup](#frontend-setup)
  - [1. Setting Up React](#1-setting-up-react)
  - [2. Bootstrap Setup](#2-bootstrap-setup)
  - [3. Run React App](#3-run-react-app)
- [Testing the API](#testing-the-api)
  - [Postman](#postman)
  - [Swagger](#swagger)
  - [Token](#token)
- [Contributing](#contributing)
- [Conclusion](#conclusion)
- [License](#license)

## Features

- User Authentication (Login, Registration)
- Password Hashing with bcrypt.js
- Secure Authentication using JSON Web Tokens (JWT)
- Localization Support (English, Finnish, Japanese, Arabic)
- Protected Routes
- Responsive UI built with React.js
- API Documentation with Swagger
- MongoDB Atlas or Local Integration
- CORS Support

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18.17.0 or higher)
- [npm](https://www.npmjs.com/) (v9.6.6 or higher)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)
- [Git](https://git-scm.com/) (for version control)
- [Postman](https://www.postman.com/) (Optional: for testing API endpoints)

Verify installation by running the following commands in your terminal:

```bash
node --version
npm --version
git --version
```

## Getting Started

Clone the repository and navigate into the project directory:

```bash
git clone https://github.com/baldez300/MERN-Auth-Demo.git

cd MERN-Auth-Demo
```

## Backend Setup

### 1. Project Initialization

Create a new Node.js project using the following commands:

```bash
cd backend

npm init -y

npm install express mongoose dotenv bcryptjs jsonwebtoken cors
```
We'll also install `nodemon` for easier development, it will automatically restart the server when changes are made in the backend code:
    
```bash
cd backend

npm install --save-dev nodemon
```
Add this nodemon script to `package.json` by replacing the one in the `scripts` section:

```json
"scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
}
```
## Swagger Setup
Swagger is a tool for documenting APIs, making it easier for developers to understand and interact with your application. Here's how to set it up:

Install the necessary packages for Swagger:
```bash
cd backend

npm install swagger-jsdoc swagger-ui-express
```
OR for specifically latest `swagger-jsdoc` and `swagger-ui-express`, use:
```bash
npm install swagger-jsdoc@latest swagger-ui-express@latest
```

## 2. Connecting to MongoDB

Create a `.env` file in the backend directory to store environment variables. If not added yet, add the `.env` file to the `.gitignore` file to keep it private. In MONGO_URI change `username` and `password` with your real USERNAME and PASSWORD.
To find your `MONGO_URI`, go to your MongoDB dashboard and click on `Connect` to get the connection string.

Add the following variables to the `.env` file:

```bash
MONGO_URI=mongodb+srv://username:password@cluster0.mongodb.net/myTestDB?retryWrites=true&w=majority

JWT_SECRET=your_jwt_secret
```
Here is how you can generate your JWT secret in VS Code `terminal` run the following command:

```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```
On a Windows machine `terminal`, you can use the following command as well:

```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```
On a Mac `terminal`, you can use the following command:

```bash
openssl rand -base64 64
```
Then, copy the generated secret and paste it in the `.env` file for the variable `JWT_SECRET`.

### 3. Running the Server
To start the backend server, run:

```bash
npm run dev
```

The server will start on http://localhost:5001 and you should see the message `Server started on port 5001` in the VScode terminal.

If MongoDB is connected successfully, you should see the message `MongoDB connected` in the terminal as well.

# ----------------------------------------------
## Frontend Setup

### 1. Setting Up React

React UI project open a new `terminal` and navigate to the frontend directory:

```bash
cd frontend

npm install axios react-router-dom i18next react-i18next
```
### 2. Bootstrap Setup

Install Bootstrap and React Bootstrap for styling the UI components:

```bash
cd frontend

npm install bootstrap react-bootstrap
```

### 3. Run React App
Run the following command to start the React app in the frontend directory terminal:

```bash
npm start
```

### Resolving Webpack Warning for `babel-preset-react-app`

If you encounter a warning related to `babel-preset-react-app` and `@babel/plugin-proposal-private-property-in-object`, follow these steps to resolve it:

1. **Open your `package.json` file** in the `frontend` folder of your project.

2. **Add `@babel/plugin-proposal-private-property-in-object`** to the `devDependencies` section.

   Here’s how your `devDependencies` section should look:

   ```json
   "devDependencies": {
     "@babel/plugin-proposal-private-property-in-object": "^7.14.5"
   }
    ```
3. **Run `npm install` or `yarn install`** to install the missing package.

## Testing the API

Testing your API is crucial to ensure it behaves as expected. Here’s how to use Postman and Swagger for this purpose:

### Postman

1. Open Postman and create a new request.
2. Enter the request URL (e.g., http://localhost:5001/api/auth/register).
3. Select the request method (e.g., POST).
4. Add the required headers and body parameters.
5. Click Send to test the API endpoint.

### Swagger

1. Open a web browser and navigate to http://localhost:5001/api-docs.
2. You will see the Swagger UI with a list of API endpoints.
3. Click on an endpoint to view the details (e.g., parameters, responses).
4. Click Try it out to test the API endpoint.

### Token

To test protected routes, you need to include the JWT token in the request headers. Here’s how to do it:

1. Register a new user or login to get the JWT token.
2. Copy the token from the response.
3. Open `Postman` and create a new request.
4. Enter the request URL (e.g., http://localhost:5001/api/auth/user).
5. Select the request method (e.g., GET).
6. Add the Authorization header with the value Bearer {token}.
7. Click Send to test the protected route.

In `Swagger`, you can also test protected routes by clicking the Authorize button and entering the JWT token.

## Contributing

Contributions are welcome! Please follow the guidelines below to contribute:
- Fork the repository
- Create a new branch for your feature or bugfix
- Submit a pull request with a detailed description of your changes
- Documentation improvements, and Other enhancements.

## Conclusion
This MERN Authentication and Localization App is fully functional with a responsive UI, secure authentication, and multilingual support. The API is well-documented using Swagger, and thorough testing has been performed using Postman and Swagger UI.

## License

This project is open source and available for all to use, modify, and distribute it. Have fun..! 🚀

# Thank YOU!!! 🙏
