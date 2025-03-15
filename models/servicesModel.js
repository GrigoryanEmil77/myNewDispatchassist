import { Schema, model, models } from "mongoose";


const servicesInfoSchema = new Schema({

  titlefirst: {
    type: String,
    required: true
  },
  titlesecond: {
    type: String,
    required: true
  },
  titleServices: {
    type: String,
    required: true
  },

  LoadSearch: {
    type: String,
    required: true
  },
  Booking:{
    type:String,
    required:true
  },
  BrokerSetup: {
    type: String,
    required: true
  },
  Detention: {
    type: String,
    required: true
  },
  Invoicing: {
    type: String,
    required: true
  },
  Factoring:{
    type:String,
    required:true
  },
  Support: {
    type: String,
    required: true
  },
  picture1: {
    type: String,
    required: true
  },
  picture2: {
    type: String,
    required: true
  },
  picture3: {
    type: String,
    required: true
  },
  picture4: {
    type: String,
    required: true
  },
  picture5: {
    type: String,
    required: true
  },
  picture6: {
    type: String,
    required: true
  },
  picture7: {
    type: String,
    required: true
  },
  

  
});


const  ServicesModel = models.Services || model("Services",  servicesInfoSchema);

export default ServicesModel;
