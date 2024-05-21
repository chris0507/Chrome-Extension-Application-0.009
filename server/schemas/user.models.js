import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcrypt";


const Role={
  PUBLIC : 'PUBLIC',
  BUSINESS : 'BUSINESS',
}


const UserSchema = new Schema(
  {
    username:{
        type:String,
        required:true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: Object.values(Role),
      default: Role.USER,
    },
    dob:{
        type:String,
    },
    city:{
        type:String,
    },
    ethnicity:{
        type:String,
    },
    code:{
        type:String,
    },
    status:{
        type:String,
    },
    brandName:{
        type:String,
    }
    
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
