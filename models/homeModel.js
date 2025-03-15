import { Schema, model, models } from "mongoose";

const homeInfoSchema = new Schema({
  titlesmall: {
    type: String,
    required: true
  },
  titlesmall1: {
    type: String,
    required: true
  },
  titlesmall2: {
    type: String,
    required: true
  },
  titlesmall3: {
    type: String,
    required: true
  },
  titlelarge: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  videoheader: {
    type: String,
    required: true
  },
  videobackground:{
    type:String,
    required:true
  }
});



const  HomeModel = models.Home || model("Home",  homeInfoSchema);

export default HomeModel;