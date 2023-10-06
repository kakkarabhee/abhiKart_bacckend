const Cart = require("../Models/Cart")

async function createCart(req, res) {
    try {
        var data = new Cart(req.body)
        await data.save()
        res.send({ result: "Done", message: "Record is Created!!!!", data: data })
    } catch (error) {
        if (error.errors.userid)
            res.send({ result: "Fail", message: error.errors.userid.message })
        else if (error.errors.productid)
            res.send({ result: "Fail", message: error.errors.productid.message })
        else if (error.errors.name)
            res.send({ result: "Fail", message: error.errors.name.message })
        else if (error.errors.brand)
            res.send({ result: "Fail", message: error.errors.brand.message })
        else if (error.errors.color)
            res.send({ result: "Fail", message: error.errors.color.message })
        else if (error.errors.size)
            res.send({ result: "Fail", message: error.errors.size.message })
        else if (error.errors.price)
            res.send({ result: "Fail", message: error.errors.price.message })
        else if (error.errors.total)
            res.send({ result: "Fail", message: error.errors.total.message })
        else
            res.status(500).send({ result: "Fail", message: "Internal Server Error" })
    }
}

async function getAllCart(req, res) {
    try {
        var data = await Cart.find({ userid:req.params.userid}).sort({ _id: -1 })
        res.send({ result: "Done", count: data.length, data: data })
    } catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error" })
    }
}
async function getSingleCart(req, res) {
    try {
        var data = await Cart.findOne({ _id: req.params._id })
        if (data)
            res.send({ result: "Done", count: data.length, data: data })
        else
            res.send({ result: "Fail", message: "Invalid Id!!!!" })
    } catch (error) {
         res.status(500).send({ result: "Fail", message: "Internal Server Error" })
    }
}


async function updateCart(req, res) {
    try {
        var data = await Cart.findOne({ _id: req.params._id })
        if (data) {
            data.qty = req.body.qty ?? req.body
            data.total = req.body.total ?? req.body
            await data.save()
            res.send({ result: "Done", message: "Record Updated Successfully" })
        }
        else
            if (error.keyValue)
                res.send({ result: "Fail", message: "User Already Exists" })
            else
                res.send({ result: "Fail", message: "Invalid Id!!!!" })
    } catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error",error:error })
    }
}


async function deleteCart(req, res) {
    try {
        var data = await Cart.deleteOne({ _id: req.params._id })
        if (data) {
            data.name = req.body.name ?? req.body
            res.send({ result: "Done", message: "Record Deleted Successfully" })
        }
    } catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error" })
    }
}

module.exports = [createCart, getAllCart, getSingleCart, updateCart, deleteCart]