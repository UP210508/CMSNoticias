import mongoose, { Schema } from "mongoose";

const CategorySchema = new mongoose.Schema({

  name: {
    type: String,
    required: [ true, 'Nombre de categoria necesario'],
    maxlength: 100,
  },

  color: {
    type: String,
    required: [ true, 'Color de categoria necesario'],
  }

})  

export const CategoryModel = mongoose.model('Category', CategorySchema );