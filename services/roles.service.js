const roleModel = require("../models/roles.model");

exports.addRole = (roleData) => {
    const role = new roleModel(roleData);
    return role.save();
}

exports.getRole = () => {
    return roleModel.find();
}

exports.deleteRole = (roleId) => {
    return roleModel.deleteOne({
        _id: roleId
    })
}