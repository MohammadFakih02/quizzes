import { Schema, model } from "mongoose";

// create a schema => shapes and set rules for the inserted data
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["teacher", "user"],
    default: "user",
  },
  points:{
    type:Number,
    default:0,
  }
});

// create a model from the schema => resembles a collection in the db
export const User = model("User", userSchema);
