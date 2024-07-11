// zaroori libraries import karna
import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';

// user model ko data lene aur post karne ke liye import karna
import User from '../Models/userModel.js';
import UserProfile from '../Models/userProfileModel.js';

// user ka  newJWT token banane ke liye function
const newToken = (user) => {
  return jwt.sign({ user }, `${process.env.JWT__KEY}`);
};

// register function database mein naya user add karne ke liye
const register = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email }).lean().exec();

    if (user) {
      console.log("=>> User already exists", req.body.email);
      return res.status(400).send({
        error: true,
        token: "",
        message: "Please check your email or password",
      });
    }

    user = await User.create(req.body);
    let userProfile = await UserProfile.create({ userId: user._id }); // UserProfile create karna

    const token = newToken(user);

    console.log(`=>> ${req.body.email} is registered. token: ${token}`);

    res.status(201).send({ error: false, token });
  } catch (error) {
    console.log("=>>> Registration server ERROR", error);
    res.status(500).send({ error: true, token: "", message: error.message });
  }
};

// User login karne ka function
const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      console.log("=>> User not found :-", req.body.email);
      return res.status(404).send({
        error: true,
        token: "",
        message: "Please check your email or password",
      });
    }

    let match = user.checkPassword(req.body.password);

    if (!match) {
      console.log("=>> password not match for :-", req.body.email);
      return res.status(400).send({
        error: true,
        token: "",
        message: "Please check your email or password",
      });
    }

    const token = newToken(user);

    console.log(`=>> ${user.email} is logged in`);

    res.status(200).send({ error: false, token });
  } catch (error) {
    console.log("=>>> Login server ERROR", error);
    res.status(500).send({ error: true, message: error.message });
  }
};

// edit function user ko edit karne ke liye
const edit = async (req, res) => {
  try {
    // Verify authentication and authorization
    if (!req.user) {
      return res.status(401).send({ error: true, message: "Unauthorized" });
    }

    // Update user details
    let user = await User.findByIdAndUpdate(req.user._id, {
      $set: req.body,
    }, { new: true }); // Set { new: true } to return updated document

    if (!user) {
      return res.status(404).send({ error: true, message: "User not found" });
    }

    const token = newToken(user);

    console.log(`=>> ${user.name} is edited`);

    res.status(200).send({ error: false, token });
  } catch (error) {
    console.log("=>>> User edit server ERROR", error);
    res.status(500).send({ error: true, message: error.message });
  }
};

// User delete karne ka function
const userDelete = async (req, res) => {
  try {
    let user = await User.findOne({ _id: req.user._id });

    if (!user) {
      console.log("=>> User not found");
      return res.status(404).send({ error: true, message: "User not found" });
    }

    user = await User.findByIdAndDelete(req.params.id);

    console.log(`=>> User delete with id ${req.params.id}`);
    res.status(200).send({ error: false, message: "User deleted successfully" });
  } catch (error) {
    console.log("=>>> User delete server ERROR", error);
    res.status(500).send({ error: true, message: error.message });
  }
};

// Register aur login function export karna
export { register, login, edit, userDelete };
