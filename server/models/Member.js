import mongoose, { Schema } from "mongoose";

const MemberSchema = new Schema(
    {
        name: { type: String },
        image: { type: mongoose.Types.ObjectId, ref: 'DocFile' },
        batch: { type: Number },
        branch: { type: String },
        position: { type: String },
    }, { timestamps: true }
)
export default Member = mongoose.model('Member', MemberSchema);