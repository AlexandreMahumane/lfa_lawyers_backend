import mongoose, { Document, Schema } from "mongoose";

export interface INews extends Document {
  title: string;
  text: string;
}

const NewsSchema: Schema<INews> = new Schema(
  {
    title: { type: String, require: true, unique: true },
    text: { type: String, require: true },
  },
  { timestamps: true }
);

export const News = mongoose.model<INews>("News", NewsSchema);
