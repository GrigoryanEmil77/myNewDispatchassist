import { Schema, model, models } from "mongoose";

const navbarInfoSchema = new Schema({
  home: {
    type: String,
    required: true
  },
  about: {
    type: String,
    required: true
  },
  services:{
    type:String,
    required:true
  },
  trucktypes:{
    type:String,
    required:true
  },
  testimonials: {
    type: String,
    required: true
  },
  faqs: {
    type: String,
    required: true
  },
  truckstop: {
    type: String,
    required: true
  },
  contact:{
    type:String,
    required:true
  },
  setup:{
    type:String,
    required:true
  },
  picture:{
    type:String,
    required:true
  }

  },
  { timestamps: true }
);

const NavbarModel = models.Navbar || model("Navbar", navbarInfoSchema);

export default NavbarModel;

