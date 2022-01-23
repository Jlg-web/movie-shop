const mongoose = require("mongoose");

const PostsModel = mongoose.model(
    "node-api",
    {
        title: {
            type: String,
            required: true
        },

        image: {
            type: String,
            required: true
        },

        synopsis: {
            type: String,
            required: true
        }, 
        
        director: {
            type: String,
            required: true
        }
    },
    "posts"
);

module.exports = { PostsModel };

