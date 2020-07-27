// http://devsmash.com/blog/password-authentication-with-mongoose-and-bcrypt

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const UserSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: {
      type: String,
      required: true,
      min: 6,
      max: 255,
      trim: true
    },
    username: {
      type: String,
      required: true,
      unique: true,
      min: 6,
      max: 255,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      min: 6,
      max: 255,
      trim: true
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 1024
    }
  },
  { timestamps: true }
);

// Hashea la password antes de insertar el registro en la db
UserSchema.pre('save', function (next) {
  const user = this;
  bcrypt.hash(user.password, SALT_WORK_FACTOR, (err, hash) => {
    if (err) return next(err);
    user.password = hash;
    next();
  });
});

module.exports = mongoose.model('User', UserSchema);
