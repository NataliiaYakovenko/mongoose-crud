const mongoose = require('mongoose');
const yup = require('yup');

const EMAIL_VALIDATION_SCHEMA = yup.string().email();

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      match: /^[A-Z][a-z]+$/,
      minLength: [2, 'First name must have more 2 letters'],
      maxLength: 64,
    },
    lastNmame: {
      type: String,
      required: true,
      match: /^[A-Z][a-z]+$/,
      minLength: 2,
      maxLength: 64,
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: (v) => EMAIL_VALIDATION_SCHEMA.isValid(v),
      },
    },
    birthday: { type: Date, max: new Date() },
    workExperience: { type: Number, min: 0 },
    gender: { type: String, enum: ['male', 'female', 'other'] },
    isMarried: { type: Boolean, default: false },
  },
  {
    versionKey: false,
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
