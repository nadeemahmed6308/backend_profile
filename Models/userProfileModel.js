// zaroori mongoose libraries import karna
import mongoose from 'mongoose';

// user Profile schema, is schema mein user ka objectID store hoga
const userProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userInfo",
      required: true,
    },
  },
  {
    // version key ki zaroorat nahi aur timestamp chahiye taake pata chale kab user register hua
    versionKey: false,
    timestamps: true,
  },
);

export default mongoose.model("UserProfile", userProfileSchema);