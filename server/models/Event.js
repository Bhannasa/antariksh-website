import mongoose, { Schema } from "mongoose";

const EventSchema = new Schema(
    {
        title: { type: String },
        images: [{ type: mongoose.Types.ObjectId, ref: 'DocFile' }],
        description: { type: String },
        startTime: { type: Date },
        endTime: { type: Date },
        venue: { type: String }
    }, { timestamps: true }
)
export default Event = mongoose.model('Event', EventSchema);