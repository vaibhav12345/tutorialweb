const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
app.use("/", require("./api"));

// Listen at specified port
app.listen(5000, () => {
    console.log(`Server started at port 5000!`);
});