const mongoose  = require("mongoose");

const permissionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const permissionModel = mongoose.model("Permission", permissionSchema, "Permission")

module.exports = permissionModel;