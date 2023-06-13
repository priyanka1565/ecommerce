const express = require("express");
const DataBaseConnect = require("./database/databse")

const app = express();
app.use(express.json());

app.listen(8080, async() => {
    try {
        await DataBaseConnect.DataBaseConnect();
          console.log("Database connected successfully!")
       console.log("server is running on http://localhost:8080")
    } catch (error) {
        console.log(error);
   }
})