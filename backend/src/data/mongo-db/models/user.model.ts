import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({

  firstName: {
    type: String,
    required: [ true, 'Nombre obligatorio'],
    maxlength: 60,
  },

  lastName: {
    type: String,
    maxlength: 60,
  },

  email: {
    type: String,
    required: [ true, 'Email obligatorio'],
    unique: true,
  },

  password: {
    type: String,
    required: [ true, 'Password obligatorio'],
    minlength: 8,
  },

  createdAt: {
    type: Date,
    required: [ true, 'Creado a obligatorio'],
  },

  isActive: {
    type: Boolean,
    default: true,
  },

  img: {
    type: String,
  }

});

UserSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function( _doc, ret, _options ) {
    delete ret._id;
    delete ret.password;
  }
})

export const UserModel = mongoose.model('User', UserSchema );