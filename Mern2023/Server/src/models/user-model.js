const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: Number,
        default: false,
    },
});


//now bycript using here
userSchema.pre('save', async function(next){
     const user = this;

     if(!user.isModified('password')){
        next();
     }
     try {
        //hash password
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRound);
        user.password = hash_password;

     } catch (error) {
        next(error);
     }

});
// password compare
userSchema.methods.comparePassword = async function(password){
    return bcrypt.compare(password, this.password);
};

//  json web token 
userSchema.methods.generateToken = async function(){
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            role: this.role,
        },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn:"30d", 
            }

        );

    } catch (error) {
        console.error(error);
    }
};



// Pass the model name "User" and the schema to mongoose.model
const User = mongoose.model("User", userSchema);

module.exports = User;
