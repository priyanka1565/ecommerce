const mongoose = require("mongoose");
const Joi = require("joi")
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            require: true,
        },
        password: {
            type: String,
            require: true,
        }
    }, { timestamps: true }

);
function validate(user) {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    };
    return Joi.validate(user, schema);
}

const User = mongoose.model("User", userSchema);
module.exports = { User,validate };