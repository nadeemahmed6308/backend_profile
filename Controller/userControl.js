// Zaroori libraries import karna
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

// User aur userProfile model ko data lene aur post karne ke liye import karna
import User from "../Models/userModel.js";
import UserProfile from '../Models/userProfileModel.js'; // Ensure correct casing

// Authorization middleware taake data ko check kar sakein, yeh zaroori hai taake koi aur data ko breakthrough karke users ka data na le sake
import Authenticate from '../Middleware/authenticate.js';

// Register, edit aur login route function ko lena
import { register, login, edit, userDelete } from './authControl.js';

// Express router
const router = express.Router();

// Yeh database se user ka full detail lene ke liye hai
router.get('/users/details', Authenticate, async (req, res) => {
  try {
    const user = req.user;
    
    // Fetch user profile details
    const userProfile = await UserProfile.findOne({ userId: user._id }).lean().exec();

    console.log(`==> getting user data for ${user.email}`);
    res.status(201).send({ error: false, user, userProfile, message: 'Getting user by token' });
  } catch (error) {
    console.log('==> getting user Error', error);
    res
      .status(500)
      .send({ error: true, user: 'Server error', message: error.message });
  }
});

// Yeh sab users ki list lene ke liye hai
router.get('/users/list', Authenticate, async (req, res) => {
  try {
    const users = await User.find().lean().exec();

    console.log(`==> getting all users list`);
    res
      .status(201)
      .send({ error: false, users, message: 'Getting all users list' });
  } catch (error) {
    console.log('==> getting user Error', error);
    res
      .status(500)
      .send({ error: true, user: 'Server error', message: error.message });
  }
});

// Register ke liye router.post
router.post('/register', register);

// Login ke liye router.post
router.post('/login', login);

// Database se user data edit karne ke liye router.put
router.put('/edit', Authenticate, edit);

// Database se user delete karne ke liye router.delete
router.delete('/users/delete', Authenticate, userDelete);

// Routers export karna
export default router;