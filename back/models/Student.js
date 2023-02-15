import mongoose, { mongo } from "mongoose";

const Student = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    grade: {
        type: Number,
        require: true
    }
})

export default mongoose.model("Student", Student)
