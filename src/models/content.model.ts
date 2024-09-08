import mongoose, { Document, Schema } from "mongoose";

export interface IContent extends Document {
  pt: {
    presentation: string;
    aboutUs: string;
    values: string;
    team: string;
    skills: string;
    joinUs: string;
  };
  en: {
    presentation: string;
    aboutUs: string;
    values: string;
    team: string;
    skills: string;
    joinUs: string;
  };
}

const ContentSchema: Schema<IContent> = new Schema({
  pt: {
    presentation: { type: String },
    aboutUs: { type: String },
    values: { type: String },
    team: { type: String },
    skills: { type: String },
    joinUs: { type: String },
  },
  en: {
    presentation: { type: String },
    aboutUs: { type: String },
    values: { type: String },
    team: { type: String },
    skills: { type: String },
    joinUs: { type: String },
  },
});

export const Content = mongoose.model<IContent>("Content", ContentSchema);
