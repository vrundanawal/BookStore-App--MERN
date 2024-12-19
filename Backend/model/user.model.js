import mongoose from 'mongoose';

//Write a schema for the User data
const userSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const User = mongoose.model('User', userSchema); //in database it will store as User

export default User;
