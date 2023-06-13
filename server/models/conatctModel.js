const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Pleased add contact name"],
  },
  email: {
    type: String,
    required: [true, "Pleased add contact email address"],
  },
  phone: {
    type: String,
    required: [true, "Pleased add cphone number"],
  },
},
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Contact", contactSchema);