import mongoose, { Document, Schema } from "mongoose";

export interface IMember extends Document {
  name: string;
  image: string;
  pt: { position: string; description: string };
  en: { position: string; description: string };
}

const MemberSchema: Schema<IMember> = new Schema({
  name: { type: String, require: true, unique: true },
  image: { type: String },
  pt: {
    position: { type: String, require: true },
    description: { type: String, require: true },
  },
  en: {
    position: { type: String, require: true },
    description: { type: String, require: true },
  },
});

export const Member = mongoose.model<IMember>("Member", MemberSchema);
