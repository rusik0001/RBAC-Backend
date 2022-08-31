const cors = require("cors")
const express = require("express");
const app = express();

require("dotenv").config()
require("./db");

//routes
const usersRouter = require("./routes/users.routes");
const rolesRouter = require("./routes/roles.routes");
const permissionsRouter = require("./routes/permissions.routes")
const roleuserRouter = require("./routes/userrole.routes");
const rolepermissionRouter = require("./routes/rolepermission.routes")

//middleware
app.use(cors())
app.use(express.json())
app.use("/api/v1", usersRouter);
app.use("/api/v1", rolesRouter);
app.use("/api/v1", permissionsRouter);
app.use("/api/v1", roleuserRouter);
app.use("/api/v1", rolepermissionRouter);

const PORT = process.env.PORT | 3003;
app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`)
})