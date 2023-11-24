const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    category_name: {
        type: String,
        required: true,
    },
    category_date: {
        type: String,
        required: true,
    },
    
});

// Pass the model name "Category" and the schema to mongoose.model
const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
