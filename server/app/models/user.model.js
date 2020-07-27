// http://devsmash.com/blog/implementing-max-login-attempts-with-mongoose
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;
const Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
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
// https://stackoverflow.com/questions/32359720/how-get-this-from-arrow-function
UserSchema.pre('save', function (next) {
  console.log('ejecuta el pre-hook: ', this);
  var user = this;
  console.log('ejecuta el pre-hook: ', user.password);
  bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) return next(err);
    user.password = hash;
    next();
  });
});

module.exports = mongoose.model('User', UserSchema);
