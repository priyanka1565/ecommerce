const { User,validate } = require("../models/useModel");

const createUser = async (req, res) => {
    //first validate the request
   const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
  
    //check if user already exist

    let user = await User.findOne({email:req.body.email})
     if (user) {
        return res.status(400).send('That user already exisits!');
    } else {
        // Insert the new user if they do not exist yet
        user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        await user.save();
        res.send(user);
    }
};
module.exports = {createUser}