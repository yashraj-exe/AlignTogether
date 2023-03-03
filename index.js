const express = require('express');
const app = express();
const connectDB = require("./config/connect");
const Router = require("./routes/web_routes")
connectDB()
app.use(express.json());


app.use("/test",Router)


app.listen(3000)