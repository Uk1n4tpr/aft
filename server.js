require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(process.env.MONGODB)
.then(() => {
    console.log("MONGODB connected")
})
.catch((err) => {
    console.log(err)
});

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use(express.urlencoded({extended: true, limit:"50mb"}));
app.use(express.json())

app.use("/", require("./routes"));

app.listen(process.env.PORT, (error) => {
    if(error){
        console.log(error.message);
    }else{
        console.log(`Server running on http://localhost:${process.env.PORT}`);
    }
})