// backend/server.js

// This file is the main entry point for the backend server.
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const authRoutes = require('./routes/auth');

// Used for generating and serving API documentation.
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Load environment variables from a .env file into process.env
require('dotenv').config();

// Initialize the Express app.
const app = express();

connectDB();

// Middleware to enable Cross-Origin Resource Sharing.
// This allows the frontend to make HTTP requests to the backend.
app.use(cors());

// Middleware to parse the request body of the incoming requests as JSON objects.
app.use(express.json());

// Define the routes for the API endpoints.
app.use('/api/auth', authRoutes);

// Swagger Setup:  Defines the Swagger settings, including security and API details.
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'MERN Auth API',
      version: '1.0.0',
      description: 'Authentication API documentation',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./routes/*.js'],
};

// Generates Swagger documentation based on the defined options and the route files.
const swaggerDocs = swaggerJsdoc(swaggerOptions);

// Serve the Swagger documentation to the /api-docs route.
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Here we define the port the app will run on in the backend.
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
