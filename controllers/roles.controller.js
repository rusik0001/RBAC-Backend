const roleService = require("../services/roles.service");
const rolepermissionService = require("../services/rolepermission.service")

exports.addRole = async (req, res, next) => {
    //data validation
    try {
        const role = await roleService.addRole(req.body)
        return res.status(200).send({ status: 200, data: role, message: "Succesfully Role Created" })
    } catch (error) {
        return res.status(400).send({ status: 400, message: "Bad Request"})
    }
}

exports.getRoles = async (req, res) => {
    try {
        const roles = await roleService.getRole()
        return res.status(200).send({status: 200, data: roles, message: "Succesfully Role Retrieved"})
    } catch (error) {
        return res.status(400).send({ status: 400, message: "Bad Request"})
    }
}

exports.deleteRole = async (req, res) => {
    try {
        const roles = await roleService.deleteRole(req.params.rid);
        await rolepermissionService.roleRemoved(req.params.rid)
        return res.status(200).send({status: 200, data: roles, message: "Succesfully Role Removed"})
    } catch (error) {
        return res.status(400).send({ status: 400, message: "Bad Request"})
    }
}