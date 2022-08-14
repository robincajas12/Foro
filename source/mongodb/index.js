const mongoose = require('mongoose');

mongoose.connect(process.env.DB_KEY);

const discussionSchema =  new mongoose.Schema(
    {
        user: {
            type: String
        },
        discussionName: {
            type: String
        },
        popularPosts: [],
        countOfPost: {
            type: Number
        }
    }
);

const Discussion = mongoose.model('Discussion', discussionSchema);

module.exports = {
    Discussion
}
