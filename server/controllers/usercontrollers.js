const User = require("../models/usermodel");
const jwt = require("jsonwebtoken");

//create token
//login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    res.status(200).json({ email });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  res.json({ msg: "login user" });
};
module.exports = loginUser;
