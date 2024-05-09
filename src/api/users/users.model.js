import { Schema, model } from 'mongoose';

const { ObjectId } = Schema.Types;

const usersSchema = new Schema({
  classId: {
    type: ObjectId,
    ref: 'Class',
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  secondLastName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    // eslint-disable-next-line func-names, object-shorthand
    default: function () {
      return this.email;
    },
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const userModel = model('User', usersSchema);
export default userModel;
