const mongoose = require("mongoose");
const { DateTime } = require("luxon");

const Schema = mongoose.Schema;
const MessageSchema = new Schema({
    title: {type: String, required: true},
    timestamp: {type: Date, default: Date.now},
    text: {type: String, required: true}
});


MessageSchema.virtual("timestamp_formatted").get(function(){
 return DateTime.local(this.timestamp)
})

// Compile model from schema
const Message = mongoose.model("Message", MessageSchema);

//Export model
module.exports = Message