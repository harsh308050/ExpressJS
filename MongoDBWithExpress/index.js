const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const port = 3000;
const server = express();
const mongo_url = "mongodb://127.0.0.1:27018/mongoExpress";
const home = path.join(__dirname, "./index.html");
server.use(express.static(__dirname));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

mongoose.connect(mongo_url).then(() => {
    console.log("MongoDB Connected")
}).catch((error) => {
    console.log(error)
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const usermodel = mongoose.model('user', userSchema);



server.get("/form", (req, res) => {
    res.sendFile(home);

});

server.post("/users", async (req, res) => {
    const new_user = req.body
    const added_user = await new usermodel(new_user);
    added_user.save();
    const users = await usermodel.find();
    res.json(users)
})


server.listen(port, () => {
    console.log("Server Started")
})