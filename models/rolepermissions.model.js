const mongoose  = require("mongoose");

const rolepermissionleSchema = new mongoose.Schema({
    roleid: {
        type: String,
        required: true
    },
    permissionid: {
        type: String,
        required: true
    }
})

const rolepermissionModel = mongoose.model("Rolepermission", rolepermissionleSchema, "Rolepermission")

module.exports = rolepermissionModel;