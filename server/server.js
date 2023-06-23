const express = require("express");
const cors = require("cors");
const DataBaseConnect = require("./database/databse");
const UserRouter = require("./router/userRoute")

const app = express();
app.use(express.json());
app.use(cors());

app.use("/userRouter", UserRouter);


app.listen(8080, async() => {
    try {
        await DataBaseConnect.DataBaseConnect();
          console.log("Database connected successfully!")
       console.log("server is running on http://localhost:8080")
    } catch (error) {
        console.log(error);
   }
})