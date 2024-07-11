// zaroori libraries import karna
import express from 'express';
import cors from 'cors';

// database se connect hone ka function import karna
import connect from './configs/db.js';

// user controller, sari zaroori routes aur server homepage
import userController from './Controller/userControl.js';
import homePage from './serverhomePage.js';


// app server ke sab express functions ke liye use hota hai, main sirf app.use jo mainly middleware ke liye hota hai aur app.listen jo server start karne ke liye hota hai, use kar raha hoon
const app = express();

// future mein kisi bhi cors error se bachne ke liye cors() use karna
app.use(cors());

// data ko json format mein lene ke liye express.json() use karna
app.use(express.json());

// main / route ek html page return karega jo backend routes ke baare mein batayega
app.get("/", (req, res) => {
  console.log("==> Home page dikha raha hai");
  res.status(200).send(homePage);
});

// user ke liye route
app.use("/auth", userController);

// app.listen server start karne ke liye, heroku deployment ke liye process.env.PORT use kiya
app.listen(process.env.PORT || 8080, async () => {
  try {
    await connect();

    console.log(`==> Server shuru ho gaya aur port :- ${process.env.PORT || 8080}`);
  } catch (error) {
    console.log("==> ERROR :-", error);
  }
});
