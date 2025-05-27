import Coupon from "../model/couponSchema.js";
import slugify from 'slugify';
export const createCoupon = async (req, res) => {
  try {
    const { title, code, website, description,description1,discount,category,logo ,slug} = req.body;
    if (!title || !code || !website) {
      return res.status(400).json({ message: "Please fill all the fields!" });
    }

    // if (!req.file) {
    //     return res.status(400).json({ message: "Logo is required!" });
    //   }

    const check = await Coupon.findOne({ code });
    if (check) {
      return res.status(400).json({ message: "Coupon Already Exists" });
    }

    const newCoupon = new Coupon({
      title,
      code,
      website,
      description,
      description1,
      discount ,
      category,
      logo,
      slug:slugify(req.body.slug).toLowerCase()
      //   logo: `/uploads/${req.file.filename}`,
    });

    const saveCoupon = await newCoupon.save();
    res
      .status(201)
      .json({ message: "Coupon Created Successfully", data: saveCoupon });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Error creating coupon", error: error });
  }
};

export const updateCoupon = async (req, res) => {
  try {
    const { title, code, website, description ,description1,discount } = req.body;
    const id = req.params.id;
    console.log(title, code , website )
    if (!title || !code || !website) {
      return res.status(400).json({ message: "Please fill all the fields!" });
    }
    const check = await Coupon.findOne({ code });
    if (check && check._id != id) {
      return res.status(400).json({ message: "Coupon Already Exists" });
    }
    const updateCoupon = await Coupon.findByIdAndUpdate(req.params.id, {...req.body,slug:slugify(req.body.slug).toLowerCase()}, {
        new: true,
      });
    res.status(200).json({ message: "Coupon Updated Successfully", data: updateCoupon });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Server Error", error:error });

  }
};


export const updateStatus = async (req, res) => {
  try {

    let jobs = await Coupon.findById(req.params.id)
   

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

export const deleteCoupon = async (req,res) =>{
    try {
        const id= req.params.id;
        const deleteCoupon = await Coupon.findByIdAndDelete(id);
        res.status(200).json({ message: "Coupon Deleted Successfully",deleteCoupon });
    } catch (error) {
        console.log(error);
        res.status(404).json({message:"Server Error"});
    }
}

export const getAllCoupon = async (req , res) =>{
    try {
        const coupons = await Coupon.find().populate('category');
        res.status(200).json({message:"Coupons Fetched Successfully",data:coupons})
    } catch (error) {
        console.log(error);
        res.status(404).json({message:"Server Error"});
    }
}

export const getSingleCoupon = async (req, res) =>{
    try {
        const id =req.params.id;
        const coupon = await Coupon.findById(id);
        res.status(200).json({message:"Coupon Fetched Successfully",data:coupon})
    } catch (error) {
        res.status(404).json({message:"Server Error "});
 
    }
}


