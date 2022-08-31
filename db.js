const mongoose = require("mongoose")

const url = process.env.MONGOODB_URL;

mongoose.connect(url).then(()=>{
    console.log("Mongoose is connected")
}).catch((err)=>{
    console.log(`Mongoose connection falied, cause: ${err}`)
})

mongoose.connection.on("error", (error)=> {
    console.log("Mongoose Error Event: ", error)
})

exports.mongoose = mongoose;