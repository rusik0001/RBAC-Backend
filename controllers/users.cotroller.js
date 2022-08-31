const userService = require("../services/users.service")
const userroleService = require("../services/userrole.service")

exports.addUser = async (req, res) => {
    //data validation
    try {
        const user = await userService.addUser(req.body)
        return res.status(200).send({ status: 200, data: user, message: "Succesfully User Created" })
    } catch (error) {
        console.log(error)
        console.log(error.message)
        return res.status(400).send({ status: 400, message: "Bad Request"})
    }
}

exports.getUsers = async (req, res) => {
    try {
        const users = await userService.getUsers(); //modification of the response data required
        return res.status(200).send({status: 200, data: users, message: "Succesfully User Retrieved"})
    } catch (error) {
        return res.status(400).send({ status: 400, message: "Bad Request"})
    }
}