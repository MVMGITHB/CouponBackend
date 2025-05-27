import mongoose from 'mongoose';

const bestOfferSchema = new mongoose.Schema({
 

  coupon: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Coupon',
      default: null
    }
  ],

  createdAt: {
    type: Date,
    default: Date.now,
  },


  status: {
    type: String,
    default: "Inactive"
  },

  
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const BestJob = mongoose.model('BestOffer', bestOfferSchema);

export default BestJob;
