const User = require("../models/User")


// get all users
exports.getAllUsers =async (req,res) => {
    try{
        const users = await User.find();
        res.status(200).send({message: "Users list retrieved", data: users});
    } catch (err) {
        res.satus(err.satus).send(err.mesaage);
    }
};
// get user by ID
exports.getOneUserById = async (req, res) => {
    try{
        let user = await User.findOne({_id: req.params.id });
        if(!user) {
            res.status(404).send("user not found");
        }
        res.status(200).send(user);
    }catch (err) {
        res.status(err.status).send(err.message)
    }
}

// update user
exports.updateOneUser = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      useFindAndModify: false,
    });
    res.status(200).json({ message: "User updateed", data: user });
  } catch (err) {
    res.status(err.status).send(err.message);
  }
};

// delete user
exports.deleteOneUser = async (req, res) =>{
    try{
        await User.deleteOne({_id: req.params.id});
        res.status(200).send("User deleted");
    }catch(err) {
        res.status(err.status).send(err.message);
    }
};

