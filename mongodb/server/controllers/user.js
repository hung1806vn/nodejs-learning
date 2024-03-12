const User = require('../models/user');

const createUser = async (req, res) => {
    try {
        // {
        //     "age": 18,
        //     "name": "hung"
        // }
        let user = new User(req.fields);
        await user.save();
        res.send("Create user successfully!")
    } catch (err) {
        res.status(500).send(err);
    }
}

const getAllUsers = async (req, res) => {
    try {

        let users = await User.find();
        res.send(users)
    } catch (err) {
        res.status(500).send(err);
    }
}

const getUserById = async (req, res) => {
    try {

        const id = req.params.userId;
        let user = await User.findById(id);
        res.send(user)
    } catch (err) {
        res.status(500).send(err);
    }
}

const updateUserById = async (req, res) => {
    try {

        const id = req.params.userId;
        let updatedUser = req.fields;
        let result = await User.updateOne({ _id: id }, { $set: updatedUser });
        res.send(result)
    } catch (err) {
        res.status(500).send(err);
    }
}

const deleteUserById = async (req, res) => {
    try {

        const id = req.params.userId;
        await User.deleteOne({ _id: id });
        res.send(`Delete userId=${id} successfully! `)
    } catch (err) {
        res.status(500).send(err);
    }
}


module.exports = { createUser, getAllUsers, getUserById, updateUserById, deleteUserById };