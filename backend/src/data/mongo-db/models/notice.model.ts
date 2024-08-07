import mongoose, { Schema } from "mongoose";

const NoticeSchema = new mongoose.Schema({

  title: {
    type: String,
    required: [ true, 'Titulo obligatorio' ],
    maxlength: 200,
  },

  body: {
    type: String,
    required: [ true, 'Cuerpo de noticia obligatorio'],
  },

  publishDate: {
    type: Date,
    required: [true, 'Fecha de publicacion obligatoria']
  },

  img: {
    type: [String],
  },

  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [ true, 'El usuario es obligatorio']
  },

  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: [ true, 'Categoria de noticia necesaria']
  }

})  

export const NoticeModel = mongoose.model('Notice', NoticeSchema );
