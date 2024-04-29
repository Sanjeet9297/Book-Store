import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  fullname:{
    type: String,
    requied: true,
  },
  email: {
    type: String,
    requied: true,
    unique: true,
  },
  password:{
    type: String,
    requied: true,
  },
});
const User = mongoose.model("User", userSchema);
export default User;