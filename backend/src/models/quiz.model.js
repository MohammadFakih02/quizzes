import { Schema, model } from "mongoose";

const quizSchema = Schema({
    quizname:{
        type: String,
        required:true,
        unique: true,
    },
    description:{
        type:String,
        required:true,
    },
    points:{
        type:Number,
        required:true,
    },
    questions: {
        type: [questionSchema],
        required: true,
      },
})

export const Quiz = model("Quiz", quizSchema);