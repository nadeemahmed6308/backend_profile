// zaroori dotenv library import karna aur env variables use karne ke liye config karna
import dotenv from 'dotenv';
dotenv.config();

// jwtwebtoken import karna taake user ke liye token create aur check kar sakein
import jwt from 'jsonwebtoken';

// token verify karne ka function, yeh JWT__KEY use karta hai jo security ke liye env mein store kiya hai
const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, `${process.env.JWT__KEY}`, (error, user) => {
      if (error) return reject(error);

      resolve(user);
    });
  });
};

// main authenticate function yeh req.header.authentication leta hai, token verify karta hai aur user return karta hai
const authenticate = async (req, res, next) => {
  // check karna ke header mein token hai ya nahi
  if (!req.headers.authorization)
    return res.status(400).send({ message: "Token not provided or Invalid" });

  // token lena
  const token = req.headers.authorization;

  // user data ke liye user variable define karna
  let user;

  try {
    // user token verify karna
    user = await verifyToken(token);
  } catch (error) {
    // error check karna
    console.log("Error:", error);
    return res.status(400).send({ message: "Token not provided or Invalid" });
  }

  // token valid hai. user token se retrieve hua hai aur request object mein hai
  req.user = user.user;

  // middleware khatam karne ke liye next
  return next();
};

export default authenticate;