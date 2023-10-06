const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const cors = require("cors")

const router = require("./Routes/index")

require("./dbConnect")
const app = express()
app.use(cors())

app.use("/public", express.static("public"))
app.use(express.json())
app.use("/api", router)


app.listen(8000, () => console.log("Server is Running at http://localhost:8000"))