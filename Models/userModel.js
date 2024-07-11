// zaroori libraries import karna
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

 // user schema jo sirf iss json format mein data post karne ke liye hai
const userSchema = new mongoose.Schema({
   // schema definition
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
}, {
  // version key ki zaroorat nahi aur timestamp chahiye taake pata chale kab user register hua
  versionKey: false,
  timestamps: true,
});

// yeh password ko chupane aur database mein encrypted password store karne ke liye hai privacy ke liye
userSchema.pre('save', function (next) {
  if (!this.isModified('password')) return next();

  const hash = bcrypt.hashSync(this.password, 8);
  this.password = hash;

  return next();
});
 // yeh login ke waqt password check karne ke liye hai
userSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.models.users || mongoose.model('users', userSchema);

// user model export karna
export default User;
