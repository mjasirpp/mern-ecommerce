import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        requierd: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        requierd: true,        
    },
    isAdmin: {
        type: Boolean,
        requierd: true,
        default: false,
    }
},
    {timestamps: true}
);

const User = mongoose.model('user',userSchema)
export default User;