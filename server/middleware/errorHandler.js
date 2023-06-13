const {constants} = require("../constatnts")
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: "Not Found",
                messege: err.messege,
                setTrace: err.stack
            });
            break;
        case constants.NOT_FOUND:
            res.json({
                title: "Validation Failed",
                messege: err.messege,
                setTrace: err.stack
            });
            case constants.UNAUTHORIZE:
            res.json({
                title: "unauthorized",
                messege: err.messege,
                setTrace: err.stack
            });
            case constants.FORBIDDEN:
            res.json({
                title: "forbidden",
                messege: err.messege,
                setTrace: err.stack
            });
            case constants.SERVER_ERROR:
            res.json({
                title: "Server error",
                messege: err.messege,
                setTrace: err.stack
            });
        default:
            console.log("No Error All Good")
            break;
    }
    //res.json({ title: "Not Found", messege: err.messege, setTrace: err.stack });
     res.json({title:"Validation Failed", messege: err.messege, setTrace: err.stack });
}
module.exports = errorHandler;