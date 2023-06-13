const mongoose = require("mongoose");

function DataBaseConnect() {
    return mongoose.connect("mongodb+srv://priyankaingle250:priya1565@cluster0.zrm5cra.mongodb.net/full-stack-application")
}
module.exports = {DataBaseConnect}