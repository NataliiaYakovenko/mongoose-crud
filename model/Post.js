const mongoose = require('mongoose');
const { ref } = require('yup');

const postSchema = new mongoose.Schema(
  {
    body: {
      type: String,
      required: true,
      minLength: 5,
    },
    userId: {
      type: mongoose.ObjectId,
      ref: 'User'
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
