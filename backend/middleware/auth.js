// backend/middleware/auth.js

const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  // Get the token from the Authorization header
  const authHeader = req.header('Authorization');
  const token = authHeader && authHeader.split(' ')[1]; // Extract the token from the "Bearer <token>" format

    // If no token is found, return an error response.
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify the token and extract the user information from it and attach it to the request object.
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
