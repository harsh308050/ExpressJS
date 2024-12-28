const express = require("express"); // Load express library
const path = require("path"); // Load path library
const users = require("./users.json") // Load user data from JSON file
const server = express(); // Create an express server
const port = 3000; // Set server port
const home = path.join(__dirname, "index.html"); // Path to home page
const contact = path.join(__dirname, "./contact.html"); // Path to contact page
const about = path.join(__dirname, "./about.html"); // Path to about page

//Middleware
server.use(express.static(__dirname)) // Serve static files from current directory 

// Route for home page
server.get("/home", (req, res) => {
    res.sendFile(home); // Send home page file
});

// Route for about page
server.get("/about", (req, res) => {
    res.sendFile(about) // Send about page file
});

// Route for contact page
server.get("/contact", (req, res) => {
    res.sendFile(contact) // Send contact page file
});

server.get("/users", (req, res) => {
    res.send(users); // Send user data
});

server.get("/users/:id", (req, res) => {
    let userId = Number(req.params.id); // Get user ID from URL
    const userData = users.find((user) => {
        return user.id == userId; // Find user by ID
    });
    if (userData) {
        res.json(userData); // Send user data if found
    }
    else {
        res.json({
            "SUCESS": "false", // Indicate failure
            "message": "User not found" // Message if user not found
        })
    }
});

// Route for any other requests
server.get("*", (req, res) => {
    res.send("404 Error"); // Send 404 error for unknown routes
});

// Start the server
server.listen(port, () => {
    console.log("Express server is live"); // Log when server starts
});