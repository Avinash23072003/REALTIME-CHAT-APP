const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        pic: {
            type: String,
            default: "https://static.thenounproject.com/png/65476-200.png" // If default is provided, 'required' should not be set to true
        }
    },
    {
        timestamps: true, // Automatically adds createdAt and updatedAt fields
    }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
