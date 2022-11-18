const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, 'Please provide a firstname'],
      trim: true,
    },
    lastname: {
      type: String,
      required: [true, 'Please provide a lastname'],
      trim: true,
    },
    username: {
      type: String,
      unique: [true, 'username already is use. Please provide another.'],
      min: 3,
      max: 20,
      required: [true, ''],
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: [true, 'email is already in use. Please provide another.'],
      trim: true,
    },
    password: {
      type: String,
      required: true,
      min: 8,
      trim: true,
    },
    passwordConfirm: {
      type: String,
      min: 8,
      required: true,
      select: false,
      validate: {
        validator: function (currentVal) {
          //this only works on SAVE
          return currentVal === this.password;
        },
        message: 'Passwords do not match',
      },
    },
    passwordResetToken: String,
    passwordResetExpire: Date,
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    followings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    joinedOn: {
      type: Date,
      default: Date.now(),
      immutable: true,
    },
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
  //only run if password was modified
  if (!this.isModified('password')) return next();

  //hash incoming password before saving to db
  this.password = await bcrypt.hash(this.password, 12);

  //delete passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});

//instance methods
userSchema.methods.isValidPassword = async function (
  currentPassword,
  storedUserPassword
) {
  return await bcrypt.compare(currentPassword, storedUserPassword);
};

userSchema.methods.createPasswordResetToken = function () {
  //create a reset token
  const resetToken = crypto.randomBytes(32).toString('hex');   //unencrypted reset token

  //encrypt token before saving to db
  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');
  //reset password token expiration time is 10mins
  console.log({resetToken}, this.passwordResetToken)
  this.passwordResetExpire = Date.now() + 10 * 60 * 1000;
  return resetToken;
};
const User = mongoose.model('User', userSchema);

module.exports = User;
