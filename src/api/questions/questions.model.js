import { Schema, model } from 'mongoose';

const { ObjectId } = Schema.Types;

const questionsSchema = new Schema({
  // awaiting quizzes model
});

const questionModel = model('Question', questionsSchema);
export default questionModel;
