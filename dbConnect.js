const mongoose = require("mongoose")

async function getConnect() {
    try {
        // await mongoose.connect("mongodb://127.0.0.1:27017/abhi_mern")
        await mongoose.connect(process.env.DBKEY)
        console.log("Server is Connected")
    } catch (error) {
        console.log(error)
    }
}
getConnect()