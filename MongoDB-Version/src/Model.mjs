import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema({

    firstname: {
        type: String,
        required: true
    },

    lastname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now,
    }
})

export default mongoose.model('users',userSchema)