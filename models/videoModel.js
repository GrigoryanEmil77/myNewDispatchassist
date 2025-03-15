import { Schema, model, models } from "mongoose";

const videobackgroundallInfoSchema = new Schema({
  videodispatch: {
    type: String,
    required: true
  },
  videobackground: {
    type: String,
    required: true
  },
  
  
});


const VideoTypesAllModel = models.VideoTypesAll || model("VideoTypesAll", videobackgroundallInfoSchema );
export default VideoTypesAllModel;
