const {z} = require("zod"); 

// create object schema
const signupSchema = z.object({
    fullname: z
    .string({required_error: "Name is Required"})
    .trim()
    .min(3, {message: "Name Must be at least of 3 char."})
    .max(255, {message:"Name must not be more than 255 characters"}),
    
    email: z
    .string({required_error: "Email is Required"})
    .trim()
    .email({message:"Invalid Email"})
    .min(5, {message: "Email Must be at least of 3 char."})
    .max(255, {message:"Email must not be more than 255 characters"}),

    phone: z
    .string({required_error: "phone is Required"})
    .trim()
    .min(3, {message: "phone Must be at least of 3 char."})
    .max(255, {message:"phone must not be more than 255 characters"}),

    password: z
    .string({required_error: "password is Required"})
    .trim()
    .min(7, {message: "password Must be at least of 7 char."})
    .max(1024, {message:"password must not be more than 255 characters"}),


});

module.exports = signupSchema; 