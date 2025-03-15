import { Schema, model, models } from "mongoose";

const followInfoSchema = new Schema({
  followtitle: {
    type: String,
    required: true
  }, 
  facelink: {
    type: String,
    required: true
  },
  instagramlink: {
    type: String,
    required: true
  },
  linkedlink:{
    type:String,
    required:true
  },
  
});


const  FollowModel = models.Follow || model("Follow",  followInfoSchema);

export default FollowModel