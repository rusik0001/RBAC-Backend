const userModel = require("../models/users.model");

exports.addUser = (userData) => {
    //check if user already exist
    const user = new userModel(userData);
    return user.save();
}

exports.getUsers = () => {
    return userModel.find();    //find() can be improvide providing a certain limit amount for request
}