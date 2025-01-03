const mongoose = require('mongoose');
const bcrypt=require('bcrypt')
const userSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true ,unique:true},
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

userSchema.methods.matchPassword=async function(enterdPassword){
    return await bcrypt.compare(enterdPassword,this.password)
}
userSchema.pre("save", async function (next) {
    // Check if the password field is modified
    if (!this.isModified("password")) {
        return next();
    }

    // Generate salt and hash the password
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});


const User = mongoose.model("User", userSchema);
module.exports = User;
