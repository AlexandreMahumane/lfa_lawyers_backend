import mongoose, { Document, Schema } from "mongoose";

export interface IMember extends Document {
  name: string;
  position: string;
  description: string;
}

const MemberSchema: Schema<IMember> = new Schema({
  name: { type: String, require: true, unique: true },
  position: { type: String, require: true },
  description: { type: String, require: true },
});

export const Member = mongoose.model<IMember>("Member", MemberSchema);
