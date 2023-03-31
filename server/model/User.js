const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: { type: String, require: true, maxlength: 40 },
    lastName: { type: String, require: true, maxlength: 50 },
    email: {
        type: String,
        minlength: 12,
        unique: true,
        required: [true, 'Email is required.'],
        lowercase: true,
        maxlength: 64,
        index: true,
        validate: {
            validator: (email) => {
                const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
                return regex.test(email);
            },
            message: '{VALUE} is invalid.'
        }
    },
    password: {
        type: String,
        minlength: 8,
        required: true,
        maxlength: 100
    },
    username: {
        type: String,
        unique: true,
        required: [true, 'Username is required.'],
        lowercase: true,
        minlength: 4,
        maxlength: 30,
        validate: {
            validator: (username) => {
                const regex = /^[a-z]+_?[a-z0-9]{1,}?$/ig;
                return regex.test(username);
            },
            message: 'Username Must preceed with letters followed by _ or numbers eg: john23 | john_23'
        }
    },
    phone: {
        type: String
    },
    isEmailValidated: {
        type: Boolean,
        default: false
    },
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
    isAdmin: { type: Boolean, required: true, default: false },
    profilePicture: {
        type: Object, // switched to cloudinary so I have to set as Object
        default: {}
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
})

module.exports = mongoose.model("User", userSchema);