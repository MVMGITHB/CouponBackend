import express from 'express';
import { createCoupon, getAllCoupon, getSingleCoupon, updateCoupon ,deleteCoupon,updateStatus } from '../controller/couponController.js';

const router= express.Router();
router.post('/create' ,createCoupon);
router.put('/update/:id' ,updateCoupon);
router.patch('/toggled/:id' ,updateStatus);
router.get('/getAllCoupon' ,getAllCoupon);
router.get('/getSingleCoupon/:id', getSingleCoupon);
router.delete('/delete/:id', deleteCoupon);


export default router;