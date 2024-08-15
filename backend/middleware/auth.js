// backend/middleware/auth.js

const jwt = require('jsonwebtoken');

// This is an Express middleware function. 
// It will be called for each request to routes that require authentication.

module.exports = function(req, res, next) {

  // The JWT is expected to be in the Authorization header in the format Bearer <token>.
  const authHeader = req.header('Authorization');

  // This code extracts the token by splitting the header value.
  const token = authHeader && authHeader.split(' ')[1]; 

    // If no token is found, return an error response.
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // The token is verified using the secret key stored in process.env.JWT_SECRET.
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next(); // Proceed to the protected route.
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
