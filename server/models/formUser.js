const mongoose = require('mongoose');
const ReviewSchema = mongoose.Schema

const UserReviewSchema = new ReviewSchema({
    firstName: {
        type: String,
        required: [true, "Firstname is required"]
    }, 
    lastName: {
        type: String,
        required: [true, "Lastname is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    rating: {
        type: Integer,
        required: [true, "Rating is required"]
    },
    comment: {
        type: Text,
        required: [true, "Comment is required"]
    },
    mobile: {
        type: Integer,
        required: [true, "Mobile is required "]
    }
})

const UserReviewModel = mongoose.model("user", UserReviewSchema)
module.exports = UserReviewModel