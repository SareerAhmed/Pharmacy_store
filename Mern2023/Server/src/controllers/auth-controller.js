const User = require("../models/user-model");
const Category_model = require("../models/category-model");
const bcrypt = require("bcryptjs"); 


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
            return res.status(200).json({
                msg: userCreated, 
                token: await userCreated.generateToken(), 
                userId: userCreated._id.toString(),
            });
        }
    } catch (error) {
        res.status(400).json("Enternal error");
    }
}

const login = async (req, res)=>{
    try {
        const {email, password} = req.body;

        const userExist = await User.findOne({email});
        console.log(userExist);
        if(!userExist){
            res.status(400).json({msg: "User is not registred"}); 
        }

        const user = await bcrypt.compare(password, userExist.password);
     
        if(user){
            res.status(200).json({
                msg: userExist, 
                token: await userExist.generateToken(), 
                userId: userExist._id.toString(),
                
            }); 
        }else{
            res.status(401).json({message: "Invalid Login Credential"});
        }

    } catch (error)  {
        res.status(500).json("Enternal Error");
    }
}




module.exports = {home, register, category, login};