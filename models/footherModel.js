import { Schema, model, models } from "mongoose";

const contactInfoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  gmail: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  locationFlorida:{
    type: String,
    required: true
  },
  picture:{
    type:String,
    required:true
  }
});


const  ContactModel = models.Contact || model("Contact",  contactInfoSchema);

export default ContactModel