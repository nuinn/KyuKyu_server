import { Schema, model } from 'mongoose';

const { ObjectId } = Schema.Types;

const quizzesSchema = new Schema({
  creatorId: {
    type: ObjectId,
    required: true,
    ref: 'User',
  },
  category: {
    type: String,
    required: true,
  },
  playableSolo: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const quizModel = model('Quiz', quizzesSchema, 'quizzes');
export default quizModel;
