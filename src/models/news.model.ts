import mongoose, { Document, Schema } from "mongoose";

export interface INews extends Document {
  image: string;
  pt: { title: string; text: string };
  en: { title: string; text: string };
}

const NewsSchema: Schema<INews> = new Schema(
  {
    image: { type: String },
    pt: {
      title: { type: String, require: true, unique: true },
      text: { type: String, require: true },
    },
    en: {
      title: { type: String, require: true, unique: true },
      text: { type: String, require: true },
    },
  },
  { timestamps: true }
);

export const News = mongoose.model<INews>("News", NewsSchema);
