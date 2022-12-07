//repost a post
const mongoose = require('mongoose');

const RepostSchema = new mongoose.Schema({
    _user: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    }],
    _post: {
        type: mongoose.Schema.Types.ObjectId, ref: "Post"
    }
}, {timestamps: true})
const Repost = mongoose.model('Repost', RepostSchema)
module.exports = Repost;