const route = require("express").Router();

route.get("/", (req,res)=>{
    res.send("Hello from API route");
});

module.exports = route;