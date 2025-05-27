import BestOffer from '../model/BestOfferModel.js';

// Create BestOffer
export const createBestOffer = async (req, res) => {
  try {
    const bestOffer = new BestOffer(req.body);
    const saved = await bestOffer.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all BestOffers with populated coupons
export const getAllBestOffers = async (req, res) => {
  try {
    const bestOffers = await BestOffer.find().populate('coupon');
    res.json(bestOffers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get one BestOffer by ID with populated coupons
export const getBestOfferById = async (req, res) => {
  try {
    const bestOffer = await BestOffer.findById(req.params.id).populate('coupon');
    if (!bestOffer) return res.status(404).json({ message: 'BestOffer not found' });
    res.json(bestOffer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const updateStatus = async (req, res) => {
  try {

    let jobs = await BestOffer.findById(req.params.id)
   

    if (!jobs) return res.status(404).json({ error: "Job not found" });

    if(jobs.status ==='Inactive')  {
      jobs.status ='Active'
    }else{
      jobs.status ='Inactive'
    }

   const Jobs =  await  jobs.save()

    res.json(Jobs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update BestOffer
export const updateBestOffer = async (req, res) => {
  try {
    const updated = await BestOffer.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: Date.now() },
      { new: true }
    ).populate('coupon');
    if (!updated) return res.status(404).json({ message: 'BestOffer not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete BestOffer
export const deleteBestOffer = async (req, res) => {
  try {
    const deleted = await BestOffer.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'BestOffer not found' });
    res.json({ message: 'BestOffer deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
