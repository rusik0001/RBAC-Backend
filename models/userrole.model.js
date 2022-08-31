const mongoose  = require("mongoose");

const userroleSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: true
    },
    roleid: {
        type: String,
        required: true
    }
})

const userroleModel = mongoose.model("Userrole", userroleSchema, "Userrole")

module.exports = userroleModel;