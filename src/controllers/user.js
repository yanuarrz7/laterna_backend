const userModels = require("../models/user")
const {response} = require("../helpers/standardRes")
const bcrypt = require("bcrypt")

exports.createUserController = async (req, res) => {
    const body = req.body;
    const encryptPassword = await bcrypt.hash(body.password, 10)
    const finalData = {
        email: body.email,
        password: encryptPassword,
    }

    const results = await userModels.createDataUser(finalData);
    if(results.affectedRows > 0){
        return response(res,200,true,"Create data successfully")
    }else{
        response(res,200,true,"Failed to create data")
    }
}