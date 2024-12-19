import User from '../model/user.model.js';
import bcrypt from 'bcryptjs';

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    //check user with email exists
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }
    //bcrypt password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create new user
    const createNewUser = new User({
      fullname,
      email,
      password: hashedPassword,
    });
    await createNewUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.log('Error : ', error);
    res.status(500).json(error || { message: 'Internal Server Error' });
  }
};
