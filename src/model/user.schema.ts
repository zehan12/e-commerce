import { NextFunction } from "express";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../config/config";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: { type: String, require: true, maxlength: 40 },
    lastName: { type: String, require: true, maxlength: 50 },
    email: {
        type: String,
        minlength: 7,
        unique: true,
        required: [true, 'Email is required.'],
        lowercase: true,
        maxlength: 64,
        index: true,
        validate: {
            validator: (email: string) => {
                const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
                return regex.test(email);
            },
            message: (props: { value: string }) => `${props.value} is not in correct format !!`,
        }
    },
    password: {
        type: String,
        required: [true, "password required !!"],
        minLength: [9, "isnt is too short !!"],
        maxlength: 20
    },
    username: {
        type: String,
        unique: true,
        required: [true, 'Username is required.'],
        lowercase: true,
        minlength: 4,
        maxlength: 30,
        validate: {
            validator: (username: string) => {
                const regex = /^[a-z]+_?[a-z0-9]{1,}?$/ig;
                return regex.test(username);
            },
            message: 'Username Must preceed with letters followed by _ or numbers eg: john23 | john_23'
        }
    },
    isEmailValidated: {
        type: Boolean,
        default: false
    },

    contactNumber: { type: String },
    info: {
        bio: {
            type: String,
            maxlength: 200,
            default: ''
        },
        birthday: {
            type: Date,
        },
        gender: {
            type: String,
            default: 'unspecified',
            enum: ['male', 'female', 'unspecified']
        }
    },

    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },

    isAdmin: { type: Boolean, required: true, default: false },

    profilePicture: {
        type: String,
        default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    },
    status: {
        type: Number,
        default: 1 // 1 OK | 2 Warning | 3 Blocked | 4 Ban
    },

    whishlist: [{
        type: Schema.Types.ObjectId,
        ref: "Products"
    }],

    following: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    ],

    followers: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    history: [{
        date: Date,
        paid: { type: Number, default: 0 },
        // items: { type: Schema.Types.ObjectId, ref: '' },
    }],
    dateJoined: {
        type: Date,
        default: Date.now,
        required: true
    }
});

// storing hashed password in db
// @ts-ignore
userSchema.pre('save', async function (next: NextFunction) {
    // @ts-ignore
    if (this.password && this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10)
    }
    next();
})

// login flow check pasword 
userSchema.methods.verifyPassword = async function (password: string) {
    try {
        var result = await bcrypt.compare(password, this.password);
        return result;
    } catch (error) {
        return error;
    }
};

// sign jwt token
userSchema.methods.signToken = async function () {
    const payload = { id: this._id, email: this.email, name: this.name };
    try {
        const token = jwt.sign(payload, config.jwt.secret);
        return token;
    } catch (error) {
        return error;
    }
};





module.exports = mongoose.model("User", userSchema);