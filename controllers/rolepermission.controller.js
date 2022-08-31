const rolepermissionService = require("../services/rolepermission.service");

exports.addRolePermission = async (req, res, next) => {
    //data validation
    try {
        const rolepermission = await rolepermissionService.addRolePermission(req.body)
        return res.status(200).send({ status: 200, data: rolepermission, message: "Succesfully RolePermission Created" })
    } catch (error) {
        return res.status(400).send({ status: 400, message: "Bad Request"})
    }
}

//addPermissions almost same as addUserroles

exports.getRolePermission = async (req, res) => {
    try {
        const rolepermissions = await rolepermissionService.getRolePermission()
        return res.status(200).send({status: 200, data: rolepermissions, message: "Succesfully RolePermission Retrieved"})
    } catch (error) {
        return res.status(400).send({ status: 400, message: "Bad Request"})
    }
}

exports.deleteRolePermission = async (req, res) => {
    try {
        const rolepermission = await rolepermissionService.deleteRolePermission(req.params.rpid)
        return res.status(200).send({status: 200, data: rolepermission, message: "Succesfully RolePermission Removed"})
    } catch (error) {
        return res.status(400).send({ status: 400, message: "Bad Request"})
    }
}

exports.roleRemoved = async () => {
    try {
        const rolepermission = await rolepermissionService.deleteRolePermission(req.params.rpid)
        return res.status(200).send({status: 200, data: rolepermission, message: "Succesfully RolePermission Removed"})
    } catch (error) {
        return res.status(400).send({ status: 400, message: "Bad Request"})
    }
}