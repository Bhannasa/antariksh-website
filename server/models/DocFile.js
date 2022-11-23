import mongoose, { Schema } from "mongoose";

const DocFileSchema = new Schema(
    {
        type: {type: String, enum: ['IMAGE', 'PDF', 'VIDEO', 'AUDIO'], default: 'IMAGE', required: true},
        name: {type: String, required: true},
        extension: {type: String, required: true},
        data: {type: String, required: true}
    }
)
export default DocFile = mongoose.model('DocFile', DocFileSchema);