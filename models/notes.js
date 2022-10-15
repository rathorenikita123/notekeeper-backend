import { Schema } from "mongoose";
import mongoose from "mongoose";

const NoteSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    tagline: {
        type: String,
    },
    description: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    pin: {
        type: Boolean,
        default: false,
    },
});

export default mongoose.model("Note", NoteSchema);
