const User = require("../models/user-model");
const Category_model = require("../models/category-model");

const home = async (req, res) => {
    try {
            res.status(200).send("this is router dashboard");
        
    } catch (error) {
        console.log(error);
    }
}
const category = async (req, res)=> {
    try {
        const {category_name, category_date } = req.body;
        console.log(req.body)
        const userExist = await Category_model.findOne({category_name});
        if(userExist){
            return res.status(400).json({msg: "category already regiseterd"}) 
        }
        await Category_model.create({category_name, category_date});
        res.status(200).json({data});
    } catch (error) {
        res.status(400).json("Enternal error");
    }
}

const register = async (req, res)=> {
    
    try {
        const {fullname, email, phone, password } = req.body;
        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({msg: "email already regiseterd"}) 
        }else{
          const userCreated = await User.create({fullname, email, phone, password});
            return res.status(200).json({msg: userCreated});
        }
    } catch (error) {
        res.status(400).json("Enternal error");
    }
}




module.exports = {home, register, category};