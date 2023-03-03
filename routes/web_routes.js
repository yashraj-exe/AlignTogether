const Router = require("express").Router();
const userControllers = require("../controllers/userControllers")

Router.post("/register",userControllers.registerUser);
Router.post("/login",userControllers.loginUser)
Router.post("/status",userControllers.updateStatus);
// Router.get("/details");

module.exports = Router;