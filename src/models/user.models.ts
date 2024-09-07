import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  password: string;
}

const UserSchema: Schema<IUser> = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model<IUser>("User", UserSchema);

export default User;
