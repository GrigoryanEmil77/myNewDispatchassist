import { Schema, model, models } from "mongoose";

const trucktypestopsInfoSchema = new Schema({

    picture1: {
     type: String,
     required: true
   },
   picture2:{
     type:String,
     required:true
   },
   picture3: {
     type: String,
     required: true
   },
   picture4:{
     type:String,
     required:true
   },
 
   picture5: {
     type: String,
     required: true
   },
   picture6:{
     type:String,
     required:true
   },
   
   picture7: {
     type: String,
     required: true
   },
   picture8:{
     type:String,
     required:true
   },
   picture9: {
     type: String,
     required: true
   },
   picture10:{
     type:String,
     required:true
   },
   
 
   
 
   
 });
 



const TruckTypesStopModel = models.TruckTypesStop || model("TruckTypesStop", trucktypestopsInfoSchema );

export default TruckTypesStopModel;
