import DealOnFire from '../model/dealOnFireModel.js';

// Create DealOnFire
export const createDealOnFire = async (req, res) => {
  try {
    const deal = new DealOnFire(req.body);
    const saved = await deal.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all DealOnFire entries with populated coupons
export const getAllDealsOnFire = async (req, res) => {
  try {
    const deals = await DealOnFire.find().populate('coupon');
    res.json(deals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const updateStatus = async (req, res) => {
  try {

    let jobs = await DealOnFire.findById(req.params.id)
   

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

// Get one DealOnFire by ID
export const getDealOnFireById = async (req, res) => {
  try {
    const deal = await DealOnFire.findById(req.params.id).populate('coupon');
    if (!deal) return res.status(404).json({ message: 'Deal not found' });
    res.json(deal);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update DealOnFire
export const updateDealOnFire = async (req, res) => {
  try {
    const updated = await DealOnFire.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: Date.now() },
      { new: true }
    ).populate('coupon');
    if (!updated) return res.status(404).json({ message: 'Deal not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete DealOnFire
export const deleteDealOnFire = async (req, res) => {
  try {
    const deleted = await DealOnFire.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Deal not found' });
    res.json({ message: 'Deal deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
