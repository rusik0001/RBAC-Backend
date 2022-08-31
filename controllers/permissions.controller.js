const permissionService = require("../services/permissions.service")

exports.addPermission = async (req, res, next) => {
    //data validation
    try {
        const permissions = await permissionService.addPermission(req.body)
        return res.status(200).send({ status: 200, data: permissions, message: "Succesfully Permission Created" })
    } catch (error) {
        return res.status(400).send({ status: 400, message: "Bad Request"})
    }
}

exports.getPermissions = async (req, res) => {
    try {
        const permissions = await permissionService.getPermissions()
        return res.status(200).send({status: 200, data: permissions, message: "Succesfully Permissions Retrieved"})
    } catch (error) {
        return res.status(400).send({ status: 400, message: "Bad Request"})
    }
}

exports.deletePermission = async (req, res) => {
    try {
        const permissions = await permissionService.deletePermission(req.params.pid)
        return res.status(200).send({status: 200, data: permissions, message: "Succesfully Permission Removed"})
    } catch (error) {
        return res.status(400).send({ status: 400, message: "Bad Request"})
    }
}