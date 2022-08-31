const rolepermissionModel = require("../models/rolepermissions.model");

exports.addRolePermission = (rolepermissionData) => {
    const rolepermission = new rolepermissionModel(rolepermissionData);
    return rolepermission.save()
}

exports.getRolePermission = () => {
    return rolepermissionModel.find();
}

exports.deleteRolePermission = (rolepermissionId) => {
    return rolepermissionModel.deleteOne({
        _id: rolepermissionId
    })
}

exports.roleRemoved = (roleid) => {
    return rolepermissionModel.deleteMany({ roleid: roleid})
}