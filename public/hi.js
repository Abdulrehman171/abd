// In Express.js, middleware functions are functions that have access to the request object (req),
// the response object (res), and the next middleware function in the application's request-response cycle.
// These functions can perform various tasks like executing code, modifying the request and response objects, 
// ending the request-response cycle, or calling the next middleware function in the stack.

// Here are some common uses of middleware in Express.js:

// Logging Requests:
// Middleware can log details about each request, such as the HTTP method, URL, and response time.

// javascript
// Copy code
// const express = require('express');
// const app = express();

// const logger = (req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next(); // Pass control to the next middleware function
// };

// app.use(logger);
// Serving Static Files:
// Middleware can serve static files like images, CSS files, and JavaScript files.

// javascript
// Copy code
// app.use(express.static('public'));
// Handling JSON Requests:
// Middleware can parse JSON bodies in requests.

// javascript
// Copy code
// app.use(express.json());
// Authentication:
// Middleware can check if a user is authenticated before allowing them to access certain routes.

// javascript
// Copy code
// const checkAuth = (req, res, next) => {
//   if (req.isAuthenticated()) {
//     return next();
//   } else {
//     res.status(401).send('Unauthorized');
//   }
// };

// app.get('/protected', checkAuth, (req, res) => {
//   res.send('This is a protected route');
// });
// Error Handling:
// Middleware can handle errors and send appropriate responses.

// javascript
// Copy code
// const errorHandler = (err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// };

// app.use(errorHandler);
// In summary, middleware in Express.js is a powerful feature that allows you 
// to modularize and organize your code by separating different concerns, making
//  your application easier to manage and extend.