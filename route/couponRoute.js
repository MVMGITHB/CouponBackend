import express from 'express';
import { createCoupon, getAllCoupon, getSingleCoupon, updateCoupon ,deleteCoupon } from '../controller/couponController.js';

const router= express.Router();
router.post('/create' ,createCoupon);
router.put('/update/:id' ,updateCoupon);
router.get('/getAllCoupon' ,getAllCoupon);
router.get('/getSingleCoupon/:id', getSingleCoupon);
router.delete('/delete/:id', deleteCoupon);


export default router;