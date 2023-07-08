const moongose = require('moongose');

const userSchema = moongose.Schema({
    username: {
        type: String,
        required: [true, "Add your username"]
    },
    email: {
        type: String,
        required: [true, "Add your email"],
        unique: [true, "Email already registered"]
    },
    username: {
        type: String,
        required: [true, "Add your password"]
    }
}, {
    timestamps: true
});

module.exports = moongose.model("User", userSchema);
