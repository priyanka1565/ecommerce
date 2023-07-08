const express = require("express");
const app = express();


app.use(express.json());

app.post("/register", async (req, res) => {
    res.send("aap is working");
});

app.listen(5000)