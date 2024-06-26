import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: [true, "Email is required"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    password: {
        type: String,
        trim: true,
        required: [true, "Password is Required"],
        
    },
});

export const User = mongoose.model('User', userSchema);