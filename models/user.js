// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    first_name: {type: String, required:true},
    last_name: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    membership: {
        type: String,
        required: true,
        enum: ["Active","Inactive","Suspended"],
        default:"Inactive",
    },
});



// Compile model from schema
const User = mongoose.model("User", UserSchema);

//Export model
module.exports = User