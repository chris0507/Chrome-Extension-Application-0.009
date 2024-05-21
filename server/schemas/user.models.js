const mongoose = require('mongoose')
const Schema = mongoose.Schema


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
      required:true,
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
    },
    urls:{
        type:Array,
    },
  },
  { timestamps: true }
);


module.exports = mongoose.model("User", UserSchema);

