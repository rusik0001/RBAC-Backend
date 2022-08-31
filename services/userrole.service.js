const userroleModel = require("../models/userrole.model");

exports.addUserRole = async (userroleData) => {
    if(await isUserroleAlreadyCreated(userroleData)){
        return {}
    }else{
        const userrole = new userroleModel(userroleData);
        return userrole.save();
    }
}

exports.getUserRole = () => {
    return userroleModel.find();
}
exports.deleteUserRole = (userroelId) => {
    return userroleModel.deleteOne({
        _id: userroelId
    })
}

exports.roleRemoved = (roleid) => {
    return userroleModel.deleteMany({ roleid: roleid})
}

const isUserroleAlreadyCreated = async (userroleData) => {
    const userrole = await userroleModel.find({
        userid: userroleData.userid
    })

    if(userrole < 1 ) return false
    if(userrole[0].userid === userroleData.userid && userrole[0].roleid === userroleData.roleid) return true

    return false
}

/*
needed just when user can be removed
exports.userRemoved = (userid) => {
    return userroleModel.deleteMany({ userid: userid})
}
*/