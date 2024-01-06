import mongoose from "mongoose";
import { Schema } from "mongoose";

const noteSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  month: {
    type: String,
    required: true
  },
  date:{
    type: String,
  }
});

const virtual = noteSchema.virtual("id");
virtual.get(function () {
  return this._id;
});

noteSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

export const Note = mongoose.model("Note", noteSchema);
