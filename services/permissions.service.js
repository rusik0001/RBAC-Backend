const permissionModel = require("../models/permissions.model");

exports.addPermission = (permissionData) => {
    const permission = new permissionModel(permissionData);
    return permission.save();
}

exports.getPermissions = () => {
    return permissionModel.find();
}


exports.deletePermission = (permissionId) => { 
    console.log("PermissionID: ", permissionId)
    return permissionModel.deleteOne({
        _id: permissionId
    })
}