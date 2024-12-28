const express = require("express"); // Import the express library to create a web server
const path = require("path"); // Import the path library to handle file paths
const server = express(); // Create an instance of an Express server
const port = 3000; // Set the port number where the server will listen
const home = path.join(__dirname, "./index.html"); // Define the path to the home HTML file

// Middleware to serve static files and parse incoming request data
server.use(express.static(__dirname)); // Serve static files (like HTML, CSS) from the current directory
server.use(express.json()); // Allow the server to parse JSON data in requests
server.use(express.urlencoded({ extended: true })); // Allow the server to parse URL-encoded data (like form submissions)

// Route to serve the home page
server.get("/form", (req, res) => {
    res.sendFile(home); // Send the home HTML file when the /form route is accessed
});

// Route to handle form submission using GET method
server.get("/formSubmit", (req, res) => {
    console.log(req.query); // Log the data sent in the query string to the console
    res.json({ "message": "Form Submitted via GET", "data": req.query }); // Send back a JSON response with the submitted data
});

// Route to handle form submission using POST method
server.post("/formSubmit2", (req, res) => {
    console.log(req.body); // Log the data sent in the body of the request to the console
    res.json({ "message": "Form Submitted via POST", "data": req.body }); // Send back a JSON response with the submitted data
});

// Start the server and listen for incoming requests
server.listen(port, () => {
    console.log("Server Started on port " + port); // Log a message when the server starts
});