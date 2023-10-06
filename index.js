const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const cors = require("cors")
const PORT = process.env.PORT || 8000

const router = require("./Routes/index")

require("./dbConnect")
const app = express()
app.use(cors())

app.use("/public", express.static("public"))
app.use(express.json())
app.use("/api", router)


app.listen(PORT, () => console.log(`Server is Running at port no ${PORT)`)