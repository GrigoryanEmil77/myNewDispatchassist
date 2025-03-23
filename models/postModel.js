import { Schema, model, models } from "mongoose";

const aboutInfoSchema = new Schema(
  {
    titlefirst: {
      type: String,
      required: true,
    },
    titlesecond: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    carriersnumber: {
      type: Number,
      required: true,
    },
    brokersnumber: {
      type: Number,
      required: true,
    },
    loadsnumber: {
      type: Number,
      required: true,
    },
    carrierstext: {
      type: String,
      required: true,
    },
    brokerstext: {
      type: String,
      required: true,
    },
    loadstext: {
      type: String,
      required: true,
    },
  },

  { timestamps: true } 
);

const AboutModel = models.About || model("About", aboutInfoSchema);

export default AboutModel;
