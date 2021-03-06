const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    description : String,
    hashtags    : String,
    author  : String,
    place   : String,
    image   : String,
    likes : {
        type : Number,
        default : 0,
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model("Post", PostSchema);