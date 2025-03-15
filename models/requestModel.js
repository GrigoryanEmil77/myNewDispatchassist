import { Schema, model, models } from "mongoose";



const requestInfoSchema = new Schema({
  titlefirst: {
    type: String,
    required: true
  },
  titlesecond: {
    type: String,
    required: true
  },

  
});

const  RequestModel = models.Request || model("Request",  requestInfoSchema);

export default RequestModel;