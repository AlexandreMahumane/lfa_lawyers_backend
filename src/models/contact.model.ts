import mongoose, { Document, Schema } from "mongoose";
import { string } from "zod";

export interface IContact extends Document {
  adress: string;
  tel: string;
  email: string;
}

const ContactSchema: Schema<IContact> = new Schema({
  adress: { type: String },
  tel: { type: String },
  email: { type: String },
});

export const Contact = mongoose.model<IContact>("Contact", ContactSchema);
