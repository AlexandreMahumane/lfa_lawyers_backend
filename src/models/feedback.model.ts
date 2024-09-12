import mongoose, { Document, Schema } from "mongoose";

interface IFeedback extends Document {
  name: string;
  content: string;
}

const feedbackSchema: Schema<IFeedback> = new Schema({
  name: { type: String },
  content: { type: String },
});

export const Feedback = mongoose.model<IFeedback>("Feedback", feedbackSchema);
