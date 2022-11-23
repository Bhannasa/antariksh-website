import mongoose, { Schema } from "mongoose";

const PostSchema = new Schema(
    {
        title: { type: String },
        images: [{ type: mongoose.Types.ObjectId, ref: 'DocFile' }],
        description: { type: String },
    }, { timestamps: true }
)
export default Post = mongoose.model('Post', PostSchema);