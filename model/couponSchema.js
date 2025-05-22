import mongoose from "mongoose";

const couponSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    default:
      "https://img.freepik.com/free-vector/branding-identity-corporate-vector-logo-r-design_460848-8630.jpg?ga=GA1.1.170324605.1744353854&semt=ais_hybrid&w=740",
  },
  timestamps: {
    type: Date,
    default: Date.now,
  },
});

const Coupon = mongoose.model("Coupon", couponSchema);
export default Coupon;
