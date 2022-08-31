const userroleService = require("../services/userrole.service");

exports.addUserRole = async (req, res, next) => {
    //data validation
    try {
        const userrole = await userroleService.addUserRole(req.body)
        return res.status(200).send({ status: 200, data: userrole, message: "Succesfully UserRole Created" })
    } catch (error) {
        return res.status(400).send({ status: 400, message: "Bad Request"})
    }
}

exports.addUserRoles = async (req, res) => {
    if(!req.body.roles) return res.status(400).send({ status: 400, message: "Bad Request"})
    let err = undefined;
    roles = req.body.roles;
    roles.forEach(async (role, index, array) => {
        try {
            const userrole = await userroleService.addUserRole({ userid: req.body.userid, roleid: role})
        } catch (error) {
            console.log(error)
            err = !!error
        }
        if(index+1 === array.length){
            if(err) return res.status(200).send({ status: 400, data: {}, message: "Bad Request" }) 
            else return res.status(200).send({ status: 200, data: {}, message: "Succesfully UserRole Created" })
        }
    });
}

exports.getUserRoles = async (req, res) => {
    try {
        const userroles = await userroleService.getUserRole();
        return res.status(200).send({status: 200, data: userroles, message: "Succesfully UserRole Retrieved"})
    } catch (error) {
        return res.status(400).send({ status: 400, message: "Bad Request"})
    }
}

exports.deleteUserRole = async (req, res) => {
    try {
        const userrole = await userroleService.deleteUserRole(req.params.urid)
        return res.status(200).send({status: 200, data: userrole, message: "Succesfully UserRole Removed"})
    } catch (error) {
        return res.status(400).send({ status: 400, message: "Bad Request"})
    }
}
